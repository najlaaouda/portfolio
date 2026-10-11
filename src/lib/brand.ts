// Per-project brand colour helpers for plates, hero bands and view transitions.

const hexToRgb = (hex: string) => {
  const n = parseInt(hex.replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

const luminance = (hex: string) => {
  const [r, g, b] = hexToRgb(hex).map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const contrast = (a: string, b: string) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

/** CSS custom properties for a brand-coloured surface: --brand, --on-brand, --on-brand-2 */
export function brandStyle(hex = '#C08A1E') {
  const onBrand = contrast(hex, '#FFFFFF') >= contrast(hex, '#1A1A1A') ? '#FFFFFF' : '#1A1A1A';
  if (contrast(hex, onBrand) < 4.5) console.warn(`[brand] ${hex} text contrast below 4.5:1`);
  const dark = onBrand === '#FFFFFF';
  return `--brand: ${hex}; --on-brand: ${onBrand}; --on-brand-2: color-mix(in srgb, ${onBrand} 85%, transparent); --brand-dark: ${dark ? 1 : 0};`;
}

/** Valid, unique view-transition-name for a project */
export const vtName = (id: string) => `p-${id.replace(/[^a-z0-9-]/gi, '-')}`;

/** Screens for the plate reel: showcase, else first screens, padded to at least 4 */
export function reelImages(showcase: string[], screens: { images: string[] }[]) {
  let list = showcase.length ? showcase : screens.flatMap((g) => g.images).slice(0, 6);
  if (list.length === 0) return [];
  while (list.length < 4) list = [...list, ...list];
  return list.slice(0, 6);
}
