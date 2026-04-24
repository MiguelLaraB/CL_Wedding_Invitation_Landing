# Design: Mobile Landscape Adaptation

## Context

The wedding invitation landing page is currently designed for desktop browsers. It needs to be adapted for mobile devices, specifically enforcing a landscape orientation to preserve the intended visual composition and removing browser-specific touch artifacts.

## Goals / Non-Goals

**Goals:**
- Enforce landscape orientation on mobile devices via a full-screen warning overlay.
- Optimize the layout for mobile landscape screens (e.g., iPhone 13/14/15, Samsung Galaxy).
- Remove the default mobile browser tap highlights.
- Ensure the desktop experience remains identical.

**Non-Goals:**
- Implementing a portrait-mode mobile layout (this is explicitly avoided per user request).
- Changing the core logic of the wedding invitation (envelope opening, photo displays).

## Decisions

- **Orientation Detection (CSS first)**: Use a CSS media query `@media (orientation: portrait)` combined with a viewport check to display the orientation overlay. This ensures immediate response without waiting for JS execution.
- **Overlay Implementation**: Add a root-level `div` with high `z-index` and `fixed` positioning.
- **Viewport Scaling**: Adjust the main layout using relative units (vh, vw) and media queries specifically for mobile landscape dimensions (typically heights < 500px).
- **Touch Interaction**: Apply `* { -webkit-tap-highlight-color: transparent; }` in the global styles to ensure a cleaner "app-like" feel on mobile.
- **No Portrait Layout**: Instead of creating a vertical layout, the app will simply "block" portrait view with the warning message, fulfilling the user's specific request.

## Risks / Trade-offs

- **Forced Landscape**: Some users might find forced landscape annoying, but this is a direct requirement to preserve design integrity.
- **Orientation Lock**: Browsers don't allow programmatic orientation locking without full-screen mode, so a visual overlay is the best fallback.
