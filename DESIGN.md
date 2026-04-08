# Design System Document: Retro-Modern Tech Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Academic Terminal"**
This design system bridges the tactile warmth of 1970s archival design with the precision of modern high-performance computing. It rejects the sterility of modern SaaS dashboards in favor of a "Digital Curator" aesthetic—where information is treated as a premium artifact. 

To break the "template" look, we utilize:
*   **Intentional Asymmetry:** Off-setting 3D assets against strict grid backgrounds to create a sense of depth and motion.
*   **High-Contrast Scale:** Dramatically large Serif headings paired with tiny, hyper-functional Monospace labels.
*   **Tonal Anchoring:** Using deep "terminal-style" dark containers to anchor light, airy compositions.

## 2. Colors
Our palette is rooted in an "Academic Warmth." The base is a sophisticated off-white, contrasted by a high-intellect terracotta and deep charcoal neutrals.

### Core Palette
*   **Surface (Primary Canvas):** `#fcf9f4` (Background) — A soft, non-clinical paper white.
*   **Primary (Action/Brand):** `#924a30` — A terracotta-orange that feels organic and historical.
*   **On-Surface (Typography):** `#1c1c19` — A dark charcoal, avoiding pure black for better readability.
*   **Neutral Secondary:** `#635d5e` — Used for terminal-style UI details and secondary data.

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited for sectioning. Structural boundaries must be defined solely by background shifts. 
*   **Transitions:** Use `surface_container_low` (`#f6f3ee`) to distinguish the main body from the `surface` background.
*   **Surface Hierarchy:** Nest containers using the scale from `surface_container_lowest` (pure white, `#ffffff`) to create a "lifted card" effect against a `surface_container` (`#f0ede8`) backdrop.

### Signature Textures & Glass
*   **The Gradient Anchor:** For high-impact CTAs, use a subtle linear gradient from `primary` (`#924a30`) to `primary_container` (`#d27d5f`) at a 45-degree angle.
*   **Glassmorphism:** Use `surface_container_low` at 80% opacity with a `20px` backdrop-blur for floating navigation or date-pill elements (as seen in the "23 de Abril" floating badge).

## 3. Typography
The system employs a dual-personality typographic approach: **Sophisticated Editorial (Serif)** and **Technical Precision (Monospace).**

| Level | Token | Font Family | Size | Character |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Newsreader (Serif) | 3.5rem | High-end, editorial authority. |
| **Headline**| `headline-md`| Newsreader (Serif) | 1.75rem| Section-level storytelling. |
| **Title**   | `title-lg`   | Space Grotesk (Mono)| 1.375rem| Clear, technical sub-headers. |
| **Body**    | `body-md`    | Space Grotesk (Mono)| 0.875rem| Highly legible, utilitarian. |
| **Label**   | `label-sm`   | Space Grotesk (Mono)| 0.6875rem| Metadata and technical specs. |

## 4. Elevation & Depth
Depth in this system is achieved through **Tonal Layering**, mimicking stacked paper or physical hardware interfaces rather than digital shadows.

*   **The Layering Principle:** Place a `surface_container_lowest` (`#ffffff`) element on top of a `surface_container` (`#f0ede8`) to create a natural "pop" without shadows.
*   **Ambient Shadows:** When a floating 3D effect is required (e.g., for the laptop or folder icons), use a custom shadow: `0px 20px 40px rgba(28, 28, 25, 0.06)`. This uses a tinted version of the `on-surface` color for a naturalistic fall-off.
*   **The "Ghost Border":** For elements requiring high definition, use a `1px` border of `outline_variant` (`#dac1ba`) at **20% opacity**. Never use 100% opaque borders.
*   **Grid Underlay:** Utilize a subtle background grid pattern (1px lines every 40px) using `outline_variant` at 10% opacity to reinforce the "technical blueprint" feel.

## 5. Components

### Buttons & Pills
*   **Primary Button:** Rounded-full (`xl` scale: `3rem`). Background: `primary`. Text: `on_primary`. No border.
*   **Secondary Pill:** Rounded-full. Background: `surface_container_highest`. Text: `on_surface`. High-contrast but low-impact (e.g., the date/time badges).
*   **Tertiary:** Monospaced text with an underlined `primary` weight on hover.

### 3D Stylized Assets
Icons (Folders, Devices) should utilize a soft-matte 3D render style. 
*   **Shadows:** Shadows for these assets must be baked into the asset or use the Ambient Shadow spec to avoid feeling "detached" from the warm background.

### Technical Terminals
*   **The Dark Container:** Use `inverse_surface` (`#31302d`) for terminal windows.
*   **Inner Padding:** Use `xl` spacing (32px) to allow the monospaced code to breathe, emphasizing its "academic" nature.

### Cards & Lists
*   **Prohibition of Dividers:** Vertical list items are separated by `1.5rem` of whitespace or alternating `surface_container_low` backgrounds. Horizontal dividers are forbidden.

## 6. Do's and Don'ts

### Do:
*   **Do** use extreme whitespace. Let the typography and 3D assets be the "hero" of the composition.
*   **Do** overlap elements. Allow a 3D folder or laptop to "break out" of its grid container for a dynamic feel.
*   **Do** use `Newsreader` for emotive, narrative text and `Space Grotesk` for all functional/data-driven text.

### Don't:
*   **Don't** use pure black or pure grey. Every "neutral" should have a slight warmth or tint of the terracotta brand color.
*   **Don't** use standard Material or Bootstrap-style shadows. They feel too "app-like" and ruin the editorial vibe.
*   **Don't** use sharp corners. Use the `md` (`1.5rem`) or `xl` (`3rem`) roundedness scale to maintain the soft, retro-tech approachability.