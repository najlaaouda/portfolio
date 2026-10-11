# najlaa. — Portfolio

Astro static site. Ochre accent, Bricolage Grotesque + DM Sans.

## تشغيل محلي
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # يطلع الموقع الجاهز في dist/
```

## إضافة مشروع جديد

**الطريقة 1: من صفحة الأدمن**
- محلياً: `npm run dev` ← افتحي `http://localhost:4321/admin` ← **Work with Local Repository** ← اختاري مجلد `E:\portfolio` (Chrome أو Edge).
- على الموقع المنشور: `/admin` ← سجّلي دخول بـ GitHub (Sign in with token) ← Projects ← New Project ← Save. كل حفظ = commit، والموقع يتحدّث لحاله.

**الطريقة 2: يدوياً**
1. انسخي `src/content/projects/shipping-app/` باسم جديد (مثلاً `delivery-app`)
2. حطّي الصور في `public/images/projects/delivery-app/`
3. عدّلي `index.md` (العنوان، الملخص، الصور، التاغات، القصة)
4. `git push` ← ينشر تلقائياً

## تجهيز شاشات فيجما لمشروع
اعملي export للفريمات PNG بدقة 2x بمجلد (مثلاً `export/my-app`)، وبعدين:
```bash
node scripts/prepare-screens.mjs "export/my-app" my-app "#1D2089" home.png orders.png details.png
```
بيحوّل كل الشاشات لـ WebP في `public/images/projects/my-app/`، وبيعمل `cover.webp` من 3 شاشات على لون الخلفية اللي بتحدديه.

## أماكن مهمة
| الملف | شو فيه |
|---|---|
| `src/data/site.json` | الاسم، نص الـ hero، About، الخدمات، آراء العملاء، التواصل، السوشال |
| `src/content/projects/` | مشروع = مجلد فيه `index.md` |
| `src/styles/global.css` | الألوان والخطوط (tokens) |
| `public/admin/config.yml` | حقول صفحة الأدمن واسم الـ repo |

## النشر (GitHub Pages)
1. ارفعي المشروع على repo اسمه `portfolio` (أو غيّري `repo` في `public/admin/config.yml`)
2. GitHub ← Settings ← Pages ← Source: **GitHub Actions**
3. أي push على `main` ينشر الموقع عبر `.github/workflows/deploy.yml`
4. لو الـ repo مش `najlaaouda.github.io`، الرابط بيكون `/portfolio/` ولازم نضيف `base: '/portfolio'` في `astro.config.mjs`، أو نربط دومين خاص.
