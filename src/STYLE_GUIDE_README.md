# 🎨 Style Guide Documentation

## Overview

A comprehensive, Figma-friendly style guide page that documents all design tokens, typography, spacing, and interactive states used throughout the portfolio.

---

## 📍 Access

**URL:** `/style-guide`

**Status:** 🟡 Development Only — Delete before production

---

## 📚 What's Documented

### 1. **Color System**
- **Primary Colors** (4 tokens)
  - `primary` - Main brand color #1D857E
  - `primary-hover` - Hover state #178076
  - `primary-light` - Subtle backgrounds #CDE9E6
  - `primary-tint` - Very subtle tint rgba(29, 133, 126, 0.06)

- **Gradients** (2 tokens)
  - `gradient-primary` - Animated text gradient
  - `gradient-mesh` - Subtle mesh backgrounds

- **Neutral Scale** (10 tokens)
  - Complete grayscale from 50 (lightest) to 900 (darkest)

- **Semantic Tokens** (7 tokens)
  - Surface colors, borders, text colors

- **Status Colors** (4 tokens)
  - Success, warning, error, info

### 2. **Typography Scale**
- **10 defined styles** with complete specs:
  - Display Large (36px) - Hero headings
  - H1-H4 (32px - 17px) - Headings hierarchy
  - Body Large/Regular (17px - 16px) - Body text
  - Caption (14px) - Small text
  - Label/Tag (13px) - Code tags, monospace
  - Section Label (14px) - Uppercase labels

- **Each style includes:**
  - Font family (Inter / Work Sans / JetBrains Mono)
  - Font size (desktop + mobile)
  - Line height
  - Font weight
  - Letter spacing
  - Usage guidelines

### 3. **Spacing Scale**
- **9 spacing tokens** from 4px to 96px
- Editorial spacing scale: 96/64/40/32px
- Usage guidelines for each token

### 4. **Border Radius**
- **5 radius tokens** (8px - full)
- Visual examples of each radius
- Usage recommendations

### 5. **Shadow Scale**
- **7 shadow tokens**
- Standard shadows (xs - xl)
- Primary-tinted shadows for brand consistency
- Visual examples with usage

### 6. **Interactive States**

#### Buttons
- **Primary Button**
  - Default, Hover, Focus, Disabled
  - Complete CSS specs for each state

- **Secondary Button (Outline)**
  - Default, Hover, Focus, Disabled
  - Animated underline on hover

#### Links
- **4 states documented:**
  - Default, Hover, Focus, Visited
  - Color and underline specs

#### Cards
- **2 states:**
  - Default with soft shadow
  - Hover with lift animation

### 7. **Layout System**
- **12-column grid** visualization
- **Max-width container** (1280px)
- Grid spacing and gutters

### 8. **Accessibility**
- WCAG 2.1 AA compliance notes
- Color contrast ratios
- Keyboard navigation
- Focus indicators

---

## ✨ Features

### **Interactive Copy-to-Clipboard**
- Click any color swatch to copy the hex value
- Visual confirmation (checkmark) on copy
- Click color token name or value to copy

### **Live Component Previews**
- All button states shown with actual styling
- Interactive hover effects visible
- Real CSS applied, not screenshots

### **Complete Token Documentation**
- Every color has a semantic name
- Usage guidelines for each token
- CSS values provided for easy reference

### **Figma-Friendly Format**
- Clean, professional layout
- Easy to reference while designing
- All values match production code

---

## 🎯 Usage

### For Designers
1. Navigate to `/style-guide`
2. Reference color tokens when creating new designs
3. Use exact typography specs for consistency
4. Follow spacing scale for layouts
5. Copy hex values directly to Figma

### For Developers
1. Reference component states when coding
2. Use documented CSS values
3. Follow shadow and radius patterns
4. Maintain consistency with existing tokens

---

## 📦 Export Summary

**Total Design Tokens:**
- 23 color tokens
- 10 typography styles
- 9 spacing tokens
- 5 radius tokens
- 7 shadow tokens
- Complete interactive state documentation

---

## 🚨 Before Production

**IMPORTANT:** This page is for development reference only.

**To remove before production:**

1. **Delete the route from `/App.tsx`:**
   ```tsx
   // Remove this line:
   <Route path="/style-guide" element={<StyleGuidePage />} />
   ```

2. **Delete the page file:**
   ```bash
   rm /pages/StyleGuidePage.tsx
   ```

3. **Delete this README:**
   ```bash
   rm /STYLE_GUIDE_README.md
   ```

**OR** keep it and password-protect for internal team use.

---

## 💡 Benefits

### **Consistency**
- Single source of truth for design tokens
- Ensures design-dev alignment
- Prevents color/spacing drift

### **Efficiency**
- Quick reference during design
- Copy-paste values to Figma
- No guessing on hover states

### **Documentation**
- Self-documenting codebase
- Easy onboarding for new team members
- Clear usage guidelines

### **Quality**
- Maintains design system integrity
- Professional presentation
- Production-ready specs

---

## 🔗 Related Files

- `/styles/globals.css` - CSS variables source
- `/components/Hero.tsx` - Button state examples
- `/components/CaseStudyCard.tsx` - Card examples
- `/PRODUCTION_READINESS.md` - Production checklist

---

## 📝 Notes

- All values are extracted from actual production code
- Colors meet WCAG AA contrast requirements
- Mobile responsive (shows mobile font sizes)
- Tested in Chrome, Safari, Firefox

---

**Created:** January 2026  
**Purpose:** Design system documentation  
**Status:** ✅ Complete and ready for use

---

Enjoy your beautiful, documented design system! 🎨✨
