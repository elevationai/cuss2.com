# Design System: Elevation AI · CUSS 2

## 1. Visual Theme & Atmosphere

Deep-space control room. The palette is near-black navy with electric cyan as the only light source — everything else recedes into dark gradients. The aesthetic is deliberately technical and operational: monospaced labels, tight letter-spacing, grid overlays, pulsing city rings on a world map. It reads as infrastructure software used by people who know what they're doing, not a consumer app trying to look friendly. Density is moderate — generous whitespace within sections, but content is substantial and information-rich rather than airy. Animations are purposeful (scan lines, shimmer, scroll rails) and reinforce the "live system" feeling without being decorative.

## 2. Color Palette & Roles

| Descriptive Name | Hex | Role |
|---|---|---|
| Void Navy | `#0a0e18` | Page background — the deepest layer |
| Elevated Navy | `#121828` | Card and surface background — one step above void |
| Active Navy | `#1a2138` | Hovered card state, focused inputs, diagram fills |
| Hairline | `#232c46` | Default borders, dividers, grid lines |
| Soft Hairline | `#2f3a59` | Secondary borders, ghost button stroke, hovered borders |
| Bright Ink | `#ebeef7` | Primary text — headlines and body on dark backgrounds |
| Muted Ink | `#a8b1cb` | Secondary text — lead copy, descriptions, captions |
| Faint Ink | `#6e7793` | Tertiary text — labels, timestamps, inactive states |
| Electric Cyan | `#6ad1ff` | Brand accent — CTAs, active states, highlights, links on hover. The only warm light in the palette. |
| Cyan Ink | `#001423` | Text placed on top of Electric Cyan backgrounds |
| Cyan Whisper | `#6ad1ff1a` | Translucent accent fill — featured tier gradient, soft glow backgrounds |
| Periwinkle | `#8fb6ff` | Secondary accent — blob B, gradient variation |
| Signal Green | `#7ee5b0` | Positive/live status indicators (the pulsing dot) |
| Alert Red | `#ff8a8a` | Error and danger states |

## 3. Typography Rules

Three typefaces, each with a strictly defined role — never interchangeable.

**Display — Architects Daughter (cursive)**
Used for all headings (`h1`–`h4`), `.display` class, large stat numbers, and promo card titles. Fluid sizing from 22px to 92px. Letter-spacing at −0.02em tightens the handwritten character into something that reads as confident rather than casual. Line height 1.04 — extremely tight, treating headlines as graphic objects rather than running text.

**Body — Inter Tight (sans-serif)**
All paragraph copy, navigation links, button labels, and UI prose. Base line height 1.55. Font smoothing enabled. Lead text (`.lead`) scales fluidly from 17px to 21px in Muted Ink — never full white, always slightly receded to support the headline hierarchy.

**Mono — JetBrains Mono (monospace)**
Reserved exclusively for: card tags, spec row labels, nav brand suffix ("CUSS 2"), stat labels, chip text, tier names, footer column headers, and any data that should feel like a readout from a system. Always uppercase with 0.08–0.18em letter-spacing. Sized at 10–13px. Color is always Faint Ink or Muted Ink — never bright white.

## 4. Component Stylings

**Buttons**
Pill-shaped (border-radius 999px) in two variants. Primary: Electric Cyan fill with Cyan Ink text — lifts 1px and casts a focused cyan glow on hover. Ghost: transparent with Soft Hairline border — border and text transition to Electric Cyan on hover. Large variant adds 4px extra padding. Text-link variant (`.btn-text`) is borderless with an animated `→` that slides right on hover.

**Cards / Containers**
Subtly rounded corners (14px default, 22px for featured/hero containers). Background is Elevated Navy, bordered with Hairline. On hover: border steps up to Soft Hairline, background steps to Active Navy. Padding 28px standard. Cards never have drop shadows — depth is created by background color stepping, not shadow.

**Featured / Promo Cards**
Larger radius (22px). Background uses a radial gradient bleeding Electric Cyan into the top-right corner over a diagonal linear gradient from Elevated Navy to Active Navy. Border mixes 25% accent into the Hairline color. A 4px top edge bar in Electric Cyan acts as a color flag. A pulsing monospaced "FREE" badge in Electric Cyan sits top-right. On hover, the card lifts 4px.

**Form Inputs / Selects / Textareas**
Elevated Navy background, Hairline border, Muted Ink placeholder, Bright Ink entered text. Border-radius 8px (`.radius-sm`). On focus: border transitions to Electric Cyan, background steps to Active Navy. No shadow — the border color change alone signals focus.

**Chips (multi-select toggles)**
Pill-shaped. Default: Elevated Navy background, Soft Hairline border, Muted Ink text. Hover: Electric Cyan border. Active (`.on`): full Electric Cyan background, Cyan Ink text.

**Tags / Badges**
Monospaced, uppercase, tightly tracked. Pill-shaped. Active Navy background, Hairline border, Muted Ink text. The status tag includes a 6px Signal Green dot.

**Spec Rows**
Two-column grid (1fr / 3fr). Each row separated by a Hairline top border. Left column is a monospaced uppercase label in Faint Ink; right column is Bright Ink body text.

**Navigation**
Sticky, blurred backdrop (18px blur), 78% opacity Void Navy. Bottom Hairline border. Nav links are pill-shaped (14px), Muted Ink by default, transitioning to Bright Ink with Elevated Navy background on hover and active. Brand: logo image + vertical Soft Hairline divider + monospaced "CUSS 2" label in Muted Ink.

## 5. Layout Principles

**Max width:** 1240px, centered, 28px horizontal padding on both sides.

**Section rhythm:** Sections use fluid vertical padding — `clamp(64px, 9vw, 140px)` — so the breathing room scales with viewport. Hero sections use a tighter top with expanded bottom.

**Grid system:** Two primary layout patterns — `split-2` (two equal columns, 60px gap, stacks to single column below 760px) and `bento` (6-column grid where cards span 3, 2, or 6 columns). Product and solution grids use a fixed 2-column layout with 16px gaps.

**Depth cues:** Layering is communicated through background color steps (Void → Elevated → Active), not shadows. The one exception is the promo card, which uses a subtle `0 20px 60px -20px rgba(0,0,0,0.5)` outer shadow to lift it off the page.

**Decorative elements:** Blurred circular blobs (50% border-radius, 80px blur, 12–25% opacity) provide ambient color glow behind hero sections. A dot-grid background with a radial fade mask adds texture to the hero without competing with content. Both are pointer-events: none and z-index 0 — content always sits above them.

**Motion:** Entrance animations use `translateY(8px) → 0` with `opacity 0 → 1` over 350ms. Interactive transitions are 150–250ms ease. Looping animations (marquee, kiosk scroll, world scan) use long durations (8–40s) so motion is ambient rather than distracting. `prefers-reduced-motion` is respected for the world map animations.
