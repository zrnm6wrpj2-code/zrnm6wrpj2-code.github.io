# Stitch Prompt: Personal Website Prototype — “Xiaohongqun / 小红裙的个人网站”

Use this document as the single source of truth to generate a **high-fidelity UI prototype** (desktop-first, responsive) for a **personal portfolio homepage**. Apply the **Corporate Trust** design system below consistently. **Do not use real photos, stock imagery, or human avatars**—use **abstract placeholders** only (e.g., rounded blocks, gradient frames, initials in a circle, or simple geometric shapes).

---

## Your role

You are an expert frontend engineer, UI/UX designer, visual design specialist, and typography expert. Produce a prototype that is visually cohesive, accessible, and maintainable—**not generic**. Make deliberate layout, motion, and typography choices that express the design system’s personality (gradient accents, soft colored shadows, elevated cards, atmospheric background blobs). Before generating screens, internalize the design tokens, spacing rhythm, and component behaviors specified in **Corporate Trust**.

---

## Site purpose (from product brief)

- **Goal**: A personal homepage that showcases professional work and provides contact information.
- **Brand / logo wordmark**: **`XIAOHONGQUN`** (display as a typographic logo in all caps; treat it as the site mark in the header area).
- **Tone**: Professional, trustworthy, modern enterprise SaaS—warm and approachable, not cold corporate.

---

## Information architecture & navigation

### Global navigation

- **Placement**: **Fixed to the top-right** of the viewport on all pages (persistent while scrolling).
- **Items** (click navigates between pages/sections):
  1. **Home**
  2. **About Me**
  3. **Contact Me**
  4. **Works**
- **Interaction**: Standard click-to-navigate between the four views. Show a clear **active state** for the current page.
- **Accessibility**: Use clear focus states, sufficient contrast, and touch-friendly targets (min ~44×44px).

### Responsive behavior

- Mobile-first; **do not** require horizontal scrolling.
- On small screens, collapse navigation into a compact pattern that still preserves all four destinations (e.g., menu button + drawer, or a simplified top bar)—**do not remove pages**.

---

## Page-by-page content requirements

### 1) Home

- **Hero headline (exact English copy)**: `Hello~ Welcome to my world~`
- **Primary CTA button (exact English label)**: `Contact Me`
  - CTA should scroll or navigate to **Contact Me** (choose the most appropriate prototype pattern; label must remain **Contact Me**).
- **Header**: Include the **`XIAOHONGQUN`** logo/wordmark; navigation remains **top-right fixed**.

### 2) About Me

- **Body copy (exact English paragraph)**:
  - “10 years of B-end project management and strategic operations management experience. Currently working in the innovation R&D department of a foreign enterprise, responsible for AI efficiency improvement in Global R&D.”
- Present as a readable editorial section within the Corporate Trust layout (generous spacing, constrained line length).

### 3) Contact Me

- **Contact detail (exact text)**:
  - **WeChat ID**: `1219145634`
- **Avatar rule**: **No real portrait**. Replace with a **non-photographic placeholder** (e.g., gradient ring + initials **“XQ”**, or an abstract silhouette block).

### 4) Works

- **Creative freedom**: Design a portfolio grid or featured-case layout suitable for an enterprise/PM-operational profile.
- **No image assets required**: Use **placeholder project tiles** (title, short description, tags, metrics chips) with abstract thumbnails (solid gradients, patterns, or simple icons)—**no stock photos**.

---

## Visual system — Corporate Trust (must follow)

**Philosophy keywords**: Trustworthy, vibrant, polished, dimensional, modern, approachable, enterprise-ready, elegant.

### Core visual DNA

1. **Colored shadows** (indigo-tinted), not flat gray-only shadows  
2. **Soft gradient “blobs”** in the background (blurred orbs, low opacity)  
3. **Gradient signature**: Indigo → Violet  
4. **Gradient text** for emphasis in key headlines (where it improves hierarchy)  
5. **Elevated cards**: subtle lift + stronger shadow on hover  
6. **Optional subtle isometric/3D feel** on decorative cards (restrained—don’t harm readability)

### Tokens (light mode)

- **Background**: `#F8FAFC` (Slate 50)  
- **Surface / cards**: `#FFFFFF`  
- **Primary**: `#4F46E5` (Indigo 600)  
- **Secondary / gradient partner**: `#7C3AED` (Violet 600)  
- **Text main**: `#0F172A` (Slate 900)  
- **Text muted**: `#64748B` (Slate 500)  
- **Accent/success (optional)**: `#10B981` (Emerald 500)  
- **Border**: `#E2E8F0` (Slate 200)

### Typography

- **Font**: **Plus Jakarta Sans**  
- **Headings**: ExtraBold/Bold hierarchy; tight line-height on large headlines; modern tracking on display sizes  
- **Body**: Regular; comfortable line-height (~1.6–1.7)  
- **Responsive type**: scale hero headline down on mobile while preserving hierarchy

### Radius, borders, shadows (directional guidance)

- Cards: `rounded-xl` (12px), thin borders using the border token  
- Buttons: `rounded-full` or `rounded-lg`; **primary** uses **Indigo→Violet** gradient, white label, indigo-tinted shadow, subtle hover lift  
- Shadows: implement **soft indigo-tinted** elevations; stronger hover elevation  
- Background blobs: large blurred gradient orbs (low opacity), layered depth

### Layout spacing

- Container: **max width ~1280px** (`max-w-7xl` equivalent)  
- Gutters: responsive horizontal padding (e.g., `px-4 sm:px-6`)  
- Vertical rhythm: generous section padding that increases at larger breakpoints  
- Paragraph width: constrain to comfortable reading measure

### Motion

- Refined motion only: short transitions (`~200ms`) for hovers; ease-out  
- Respect **prefers-reduced-motion** (reduce parallax/pulse if applicable)

### Iconography

- If icons are needed, use a **simple modern outline** style consistent with **Lucide-like** strokes (rounded, 2px), tinted with brand colors for feature highlights.

---

## Deliverable format expectations (for Stitch)

Generate **four prototype screens/views** (Home, About Me, Contact Me, Works) that share:

- The same **header + fixed top-right navigation** pattern  
- The same **Corporate Trust** visual language  
- Consistent **components** (buttons, cards, section headings, page shells)

**Explicit exclusions**

- No real photos, no realistic human faces, no stock imagery  
- No reliance on external image URLs—use placeholders and CSS-driven visuals

---

## Quality bar

The result should feel **premium and intentional**: clear hierarchy, crisp typography, lively but professional gradients, and cohesive rhythm across all pages—**not** a default template look.
