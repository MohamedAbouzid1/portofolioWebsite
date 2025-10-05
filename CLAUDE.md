# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern, minimalist portfolio website for a backend software developer. Built with vanilla JavaScript, HTML5, and CSS3 - no build tools or frameworks required.

**Design Philosophy:** Clean, minimalist aesthetic with subtle animations and a modern color palette featuring deep slate and cyan accents.

## Development Workflow

### Running the Site
- Simply open `index.html` in a web browser
- For live development, use any static file server:
  ```bash
  # Python 3
  python3 -m http.server 8000

  # Node.js (if http-server is installed globally)
  npx http-server -p 8000
  ```
- Access at `http://localhost:8000`

### No Build Process
This project has no build step, bundler, or package manager. All changes to HTML, CSS, or JS are immediately reflected on page refresh.

## Architecture

### File Structure
```
├── index.html          # Single-page application markup
├── css/
│   └── styles.css      # All styles, using CSS custom properties
├── js/
│   └── main.js         # All interactive functionality
└── assets/
    └── images/         # Image assets (hero image, etc.)
```

### JavaScript Architecture (js/main.js)

The JavaScript follows a modular function pattern with a single initialization entry point:

**Initialization Flow:**
1. `DOMContentLoaded` event → `initializeWebsite()`
2. `initializeWebsite()` calls all setup functions in order

**Key Feature Modules:**
- `setupSmoothScrolling()` - Handles anchor link navigation with smooth scroll
- `setupActiveNavigation()` - Updates nav link active state based on scroll position using Intersection Observer
- `setupScrollAnimations()` - Animates elements on scroll with staggered effects
- `setupHeroInteractions()` - Parallax effects and mouse movement interactions in hero section
- `setupTypingAnimation()` - Typewriter effect for name in hero section
- `setupNavbarScrollEffects()` - Navbar hide/show on scroll with background changes

**Code Organization Pattern:**
Each feature is isolated in its own function. To add new features, create a new `setup*()` function and call it from `initializeWebsite()`.

### CSS Architecture (css/styles.css)

**Design System:**
The entire design system is defined via CSS custom properties in `:root`:
- **Color Palette:** Modern minimalist - Deep slate (#0f172a) for text, cyan (#06b6d4) for accents
- **Typography:** Space Grotesk (headings), Inter (body) - both highly readable and modern
- **Spacing:** 8px-based system for consistent rhythm
- **Borders:** Subtle 1px borders with minimal rounded corners (8px-16px)
- **Shadows:** Very subtle or none - emphasis on borders and spacing
- **Animations:** Minimal and purposeful - short durations (0.2s-0.6s)

**Key Patterns:**
- All colors use custom properties - never hardcode colors
- Responsive typography uses `clamp()` for fluid scaling
- Minimalist aesthetic: subtle shadows, clean borders, ample whitespace
- Hover states are subtle - typically just border/color changes with slight transforms
- CSS custom properties allow theme changes by modifying `:root` values only

### HTML Structure (index.html)

**Single Page Layout:**
Four main sections: `#about`, `#works`, `#skills`, `#contact`

**Navigation:**
Fixed navbar with smooth scroll links to sections. Active state managed by `setupActiveNavigation()` in main.js

**Hero Section (`#about`):**
Clean split layout with text + profile image. Minimal background effects (single subtle gradient orb). Profile image uses rounded corners (not circle) for modern look.

## Making Changes

### Adding New Sections
1. Add section markup in `index.html` with unique `id`
2. Add nav link in `.nav-links` pointing to new section
3. Style in `styles.css` following existing section patterns
4. Update `setupActiveNavigation()` in `main.js` if needed (auto-detects sections with `id` attribute)

### Modifying Colors/Theme
All color changes happen in `css/styles.css` `:root` section. Modify custom properties only - never hardcode colors in component styles.

### Adding Interactive Features
Create new `setup*()` function in `js/main.js` and call it from `initializeWebsite()`. Follow existing patterns for consistency.

### Updating Content
- Personal info: Edit `#about` section in `index.html`
- Projects: Edit `.project-card` elements in `#works` section
- Skills: Edit `.skill-category` elements in `#skills` section
- Contact: Edit `.contact-item` elements in `#contact` section

## Important Notes

- No package.json or dependencies - this is intentional
- All external resources (fonts) loaded via CDN in HTML `<head>`
- Profile image path: `assets/images/hero.png`
- Resume link at `/resume.pdf` (not tracked in repo)
- Social media links are hardcoded in `index.html` - update URLs as needed
