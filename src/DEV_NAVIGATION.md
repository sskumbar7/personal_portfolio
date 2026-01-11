# 🛠️ Development Navigation

## Quick Access Links

During development, access the style guide at:

**Style Guide:** [http://localhost:5173/style-guide](http://localhost:5173/style-guide)

---

## All Routes

| Page | Route | Status |
|------|-------|--------|
| **Homepage** | `/` | ✅ Production |
| **Work** | `/work` | ✅ Production |
| **Contact** | `/contact` | ✅ Production |
| **Discussion Forum** | `/work/discussion-forum` | ✅ Production |
| **Recyclify** | `/work/recyclify` | ✅ Production |
| **Visual Design** | `/work/visual-design` | ✅ Production |
| **Confidential 1** | `/work/confidential` | ✅ Production |
| **Confidential 2** | `/work/confidential-case-study-2` | ✅ Production |
| **Confidential 3** | `/work/confidential-case-study-3` | ✅ Production |
| **Style Guide** | `/style-guide` | 🟡 Dev Only - DELETE BEFORE PRODUCTION |

---

## 🚨 Before Deployment

Remember to **DELETE** the style guide route and files:

1. Remove route from `/App.tsx`
2. Delete `/pages/StyleGuidePage.tsx`
3. Delete `/STYLE_GUIDE_README.md`
4. Delete `/DEV_NAVIGATION.md` (this file)

---

## Quick Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works between pages
- [ ] Responsive on mobile
- [ ] Images load (check figma:asset imports)
- [ ] Buttons have hover states
- [ ] Forms work (Contact page)
- [ ] Accessibility (keyboard navigation)
- [ ] Style guide renders correctly

---

Happy developing! 🚀
