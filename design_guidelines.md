# Doodle Do — Art & Pattern Licensing Website Design Guidelines

## Design Approach
**Reference-Based Approach** inspired by modern art marketplaces (Society6, Etsy, Creative Market) combined with clean portfolio aesthetics (Behance, Dribbble). The design celebrates patterns as art while maintaining e-commerce functionality.

**Core Principle**: "Gallery meets shop" — every page should feel like walking through a curated art studio where commerce is seamless, not transactional.

---

## Color Palette

### Light Mode (Primary)
- **Background**: 0 0% 98% (soft white with warmth)
- **Surface**: 0 0% 100% (pure white for cards/elevated elements)
- **Primary Brand**: 340 75% 88% (blush pink — soft yet distinctive)
- **Secondary**: 160 45% 85% (mint green — fresh and calming)
- **Accent**: 270 50% 88% (lavender — creative energy)
- **Text Primary**: 0 0% 20% (near-black for readability)
- **Text Secondary**: 0 0% 45% (warm gray for supporting text)

### Dark Mode (Optional Support)
- **Background**: 240 15% 12%
- **Surface**: 240 10% 18%
- **Maintain pastel accents with adjusted saturation (reduce by 20%)

---

## Typography

**Font Families** (via Google Fonts CDN):
- **Display/Headings**: 'Montserrat', sans-serif (weights: 300, 500, 700)
- **Body/UI**: 'Raleway', sans-serif (weights: 400, 500, 600)

**Type Scale**:
- Hero H1: text-5xl md:text-7xl font-light tracking-tight
- Section H2: text-3xl md:text-5xl font-light
- Card H3: text-xl md:text-2xl font-medium
- Body: text-base leading-relaxed
- Small/Meta: text-sm text-gray-500

**Character**: Light, airy headings with generous letter-spacing create breathing room. Body text prioritizes readability with comfortable line-height.

---

## Layout System

**Spacing Primitives**: Use Tailwind units 2, 4, 6, 8, 12, 16, 20, 24 consistently.
- Component padding: p-6 to p-8
- Section padding vertical: py-16 md:py-24 lg:py-32
- Section padding horizontal: px-4 md:px-8 lg:px-12
- Grid gaps: gap-6 md:gap-8 for pattern tiles

**Container Strategy**:
- Max-width for content: max-w-7xl mx-auto
- Full-bleed galleries: w-full with inner max-w-screen-2xl
- Text-heavy sections: max-w-3xl for optimal reading

---

## Component Library

### Navigation
Clean, minimal header with ample whitespace:
- Logo left (custom wordmark or simple text)
- Center: Categories, Collections, Commission, About
- Right: Search icon, Cart, Etsy link icon
- Sticky on scroll with subtle backdrop blur

### Hero Section
**Large Hero Image**: YES — Full-width showcase of a hero pattern in situ (on fabric, wallpaper, or product mockup)
- Height: 70vh to 85vh
- Overlay: Centered text with semi-transparent background
- Tagline: "Art that repeats beautifully" in large, light typography
- CTA: Two buttons — "Explore Patterns" (filled) + "Commission Custom" (outline with blur background)

### Pattern Gallery Grid
Masonry-style grid showcasing pattern thumbnails:
- Desktop: 4 columns (grid-cols-4)
- Tablet: 3 columns (md:grid-cols-3)
- Mobile: 2 columns (grid-cols-2)
- Card design: White background, subtle shadow, rounded corners (rounded-xl)
- Hover state: Lift effect (transform scale-105) with overlay showing Buy/License/Commission icons

### Individual Pattern Cards
- Square aspect ratio for consistency
- Pattern name below thumbnail
- Price or "View Details" beneath
- Smooth transitions on all interactions

### Pattern Detail Page
- Large pattern preview (zoomable)
- Right sidebar: Title, description, pricing tiers (Buy Digital, License, Custom Commission)
- Mockup gallery showing pattern in use (pillows, wallpaper, fabric)
- "Also in this Collection" carousel at bottom

### Commission Form
Full-page form with visual progress indicator:
- Project type selection (cards with icons)
- Size/dimensions input
- Color palette picker (interactive swatches)
- Mood/inspiration upload area
- Budget range slider
- Contact information
- Friendly submit: "Let's Create Together"

### Artist Bio Section
Two-column layout:
- Left: Portrait photo with watercolor border effect
- Right: Story narrative, creative process, medium expertise
- Social media icons in pastel brand colors
- Link to full portfolio or press features

### Newsletter Signup
Integrated footer section (not standalone):
- "Get Pattern Updates" headline
- Single email input with inline submit
- Benefit text: "New designs, exclusive offers, creative inspiration"
- Background: Subtle pastel gradient or watercolor texture

### Footer
- Multi-column layout
- Column 1: Logo + tagline
- Column 2: Shop (Categories, Collections, New Arrivals)
- Column 3: Support (Commission, FAQs, Shipping)
- Column 4: Connect (Email, Instagram, Etsy, Pinterest)
- Bottom bar: Copyright, Terms, Privacy

---

## Images

**Hero Image**: Large, high-quality photograph showing a signature pattern applied to a lifestyle setting (bedroom with patterned wallpaper, styled table with patterned textiles, or product flat lay). Soft, natural lighting. Positioned as full-width background with centered text overlay.

**Pattern Thumbnails**: Square crops of each repeating pattern design, seamless tiling visible. Clean, white or neutral backgrounds to emphasize the artwork.

**Lifestyle/Mockup Images**: Throughout collection pages and pattern detail views — show patterns on pillows, curtains, wallpaper, stationery. Photography style: bright, airy, minimal styling.

**Artist Portrait**: Warm, approachable photo in the bio section with soft focus background.

---

## Visual Effects & Interactions

**Watercolor Textures**: Subtle, low-opacity watercolor PNG overlays on section backgrounds (hero, footer). Use sparingly — 5-10% opacity maximum to avoid distraction.

**Paper Texture**: Very subtle noise/grain texture on white backgrounds for tactile, handmade quality.

**Hover Interactions**:
- Pattern cards: Scale + shadow increase + overlay with action buttons
- Buttons: Gentle scale (scale-105) with color shift
- Links: Underline animation from left to right

**Transitions**: All interactions use ease-in-out with 200-300ms duration for polished feel.

**Animations**: Minimal — fade-in on scroll for section reveals, no aggressive motion to respect the calm, artistic vibe.

---

## Page-Specific Guidelines

### Homepage Structure (6-7 sections)
1. Hero with tagline + CTA
2. Featured Collections (3-4 highlighted with images)
3. Pattern Categories (icon-based navigation tiles)
4. How It Works (Purchase/License/Commission explained visually)
5. Artist Spotlight (brief intro + CTA to full bio)
6. Instagram/Social Feed integration
7. Newsletter + Footer

### Collections Page
- Category filter sidebar (sticky)
- Grid of pattern thumbnails
- Sort options (Newest, Popular, Price)
- Pagination or infinite scroll

### Pattern Detail Page
- Large hero pattern showcase
- Tabbed interface: Details, Mockups, Licensing Info, Reviews
- Sticky "Add to Cart" or "License This" button

---

## Brand Voice in UI Copy
- Warm, inviting, artist-friendly
- "Explore" not "Browse"
- "Let's Create" not "Submit"
- "Your Collection" not "Cart"
- Emphasize creativity, customization, and artistic collaboration

---

**Final Note**: Every element should reinforce the feeling of a curated art gallery where customers discover patterns they love, understand their options (buy, license, commission), and feel confident in their creative choices. The design is sophisticated yet approachable, minimal yet rich with artistic texture.