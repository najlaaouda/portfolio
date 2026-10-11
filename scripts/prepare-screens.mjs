// Turn a folder of Figma exports into web-ready images for one project.
//
//   node scripts/prepare-screens.mjs <export folder> <project slug> [cover bg hex] [cover screens...]
//
// Example:
//   node scripts/prepare-screens.mjs "export/shipping app" futian "#1E2287" home.png orders.png "orders details.png"
//
// Output: public/images/projects/<slug>/<name>.webp for every PNG/JPG, plus cover.webp
// (1600x1000, up to three phone screens on a solid background).

import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const [src, slug, bg = '#1A1A1A', ...coverScreens] = process.argv.slice(2);
if (!src || !slug) {
  console.error('Usage: node scripts/prepare-screens.mjs <export folder> <project slug> [cover bg hex] [cover screens...]');
  process.exit(1);
}

const out = path.join('public', 'images', 'projects', slug);
await fs.mkdir(out, { recursive: true });

const toSlug = (name) =>
  path.parse(name).name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const files = (await fs.readdir(src)).filter((f) => /\.(png|jpe?g)$/i.test(f)).sort();
for (const f of files) {
  const dest = path.join(out, `${toSlug(f)}.webp`);
  // Phone exports stay at 780px wide (2x of 390); web and tablet exports go to 1440px
  const { width = 0 } = await sharp(path.join(src, f)).metadata();
  const target = width > 1000 ? 1440 : 780;
  await sharp(path.join(src, f)).resize({ width: target, withoutEnlargement: true }).webp({ quality: 82 }).toFile(dest);
  console.log('screen', dest);
}

// Cover: phones with rounded corners and a soft shadow, centred on the brand colour.
const picks = (coverScreens.length ? coverScreens : files.slice(0, 3)).slice(0, 3);
const firstMeta = picks.length ? await sharp(path.join(src, picks[0])).metadata() : null;
const isWeb = firstMeta && firstMeta.width > firstMeta.height * 0.8 || (firstMeta && firstMeta.width > 1000);

if (picks.length && isWeb) {
  // Web cover: a browser window with the first screen, a phone (second pick) overlapping its corner
  const W = 1600, H = 1000;
  const bw = 1240, bh = 800, bar = 44, r = 18;
  const bx = 120, by = 110;
  const shot = await sharp(path.join(src, picks[0])).resize({ width: bw }).extract({ left: 0, top: 0, width: bw, height: bh - bar }).png().toBuffer();
  const frame = Buffer.from(`<svg width="${bw}" height="${bh}">
    <rect width="${bw}" height="${bh}" rx="${r}" fill="#FFFFFF"/>
    <circle cx="26" cy="22" r="6" fill="#E7E1D8"/><circle cx="46" cy="22" r="6" fill="#E7E1D8"/><circle cx="66" cy="22" r="6" fill="#E7E1D8"/>
    <rect x="${bw / 2 - 160}" y="11" width="320" height="22" rx="11" fill="#F2EEE8"/>
  </svg>`);
  const bmask = Buffer.from(`<svg width="${bw}" height="${bh}"><rect width="${bw}" height="${bh}" rx="${r}" fill="#fff"/></svg>`);
  const browser = await sharp(frame).composite([{ input: shot, left: 0, top: bar }, { input: bmask, blend: 'dest-in' }]).png().toBuffer();
  const shadow = (w, h, rr) => sharp({ create: { width: w + 100, height: h + 100, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: Buffer.from(`<svg width="${w + 100}" height="${h + 100}"><rect x="50" y="64" width="${w}" height="${h}" rx="${rr}" fill="rgba(0,0,0,.32)"/></svg>`) }])
    .blur(22).png().toBuffer();
  const layers = [{ input: await shadow(bw, bh, r), left: bx - 50, top: by - 50 }, { input: browser, left: bx, top: by }];
  if (picks[1]) {
    const ph = 640, pw = 296, pr = 36;
    const pmask = Buffer.from(`<svg width="${pw}" height="${ph}"><rect width="${pw}" height="${ph}" rx="${pr}" fill="#fff"/></svg>`);
    const phone = await sharp(path.join(src, picks[1])).resize(pw, ph, { fit: 'cover', position: 'top' }).composite([{ input: pmask, blend: 'dest-in' }]).png().toBuffer();
    const px = W - pw - 70, py = H - ph - 40;
    layers.push({ input: await shadow(pw, ph, pr), left: px - 50, top: py - 50 }, { input: phone, left: px, top: py });
  }
  const dest = path.join(out, 'cover.webp');
  await sharp({ create: { width: W, height: H, channels: 3, background: bg } }).composite(layers).webp({ quality: 85 }).toFile(dest);
  console.log('cover (web)', dest);
} else if (picks.length) {
  const W = 1600, H = 1000, phoneH = 820, radius = 44;
  const meta = await sharp(path.join(src, picks[0])).metadata();
  const phoneW = Math.round((meta.width / meta.height) * phoneH);
  const gap = 56;
  const total = picks.length * phoneW + (picks.length - 1) * gap;
  const mask = Buffer.from(`<svg width="${phoneW}" height="${phoneH}"><rect width="${phoneW}" height="${phoneH}" rx="${radius}" fill="#fff"/></svg>`);
  const shadow = await sharp({
    create: { width: phoneW + 80, height: phoneH + 80, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: Buffer.from(`<svg width="${phoneW + 80}" height="${phoneH + 80}"><rect x="40" y="52" width="${phoneW}" height="${phoneH}" rx="${radius}" fill="rgba(0,0,0,.35)"/></svg>`) }])
    .blur(18)
    .png()
    .toBuffer();

  const layers = [];
  for (let i = 0; i < picks.length; i++) {
    const left = Math.round((W - total) / 2 + i * (phoneW + gap));
    // middle phone sits a little higher
    const top = Math.round((H - phoneH) / 2 + (picks.length === 3 && i !== 1 ? 40 : -10));
    const phone = await sharp(path.join(src, picks[i]))
      .resize(phoneW, phoneH, { fit: 'cover', position: 'top' })
      .composite([{ input: mask, blend: 'dest-in' }])
      .png()
      .toBuffer();
    layers.push({ input: shadow, left: left - 40, top: top - 40 });
    layers.push({ input: phone, left, top });
  }

  const dest = path.join(out, 'cover.webp');
  await sharp({ create: { width: W, height: H, channels: 3, background: bg } })
    .composite(layers)
    .webp({ quality: 85 })
    .toFile(dest);
  console.log('cover', dest);
}
