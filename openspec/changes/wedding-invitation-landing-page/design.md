## Context

The current landing page is a basic implementation containing a background color, the couple's names, and some initial animations. The goal is to evolve this into a fully-fledged, interactive wedding invitation. The final product needs to be responsive, work on both desktop and mobile, and include specific interactive elements such as photo frames, background music control, and a "reveal" interaction for the formal invitation/poem.

## Goals / Non-Goals

**Goals:**
- Implement a responsive UI that adapts to mobile and desktop screens.
- Create a section with two distinct photo frames below the couple's names.
- Integrate a custom medium-sized play/pause button for background music.
- Implement a view transition: clicking a right-arrow button hides the initial elements (names and photos) and reveals a virtual letter containing a formatted poem or formal invitation.

**Non-Goals:**
- Implementing a backend RSVP system or database integration (this is purely a frontend UI/UX upgrade).
- Using heavy frontend frameworks (React, Angular) if not already present; the focus is on lightweight vanilla web technologies.

## Decisions

- **View Transition Strategy**: We will use CSS classes and vanilla JavaScript to toggle visibility and apply CSS transitions (e.g., fading out the main view and fading in the letter view). This keeps the implementation lightweight and performant.
- **Music Player Implementation**: We will use the native HTML5 `<audio>` element but hide its default controls. A custom HTML button will trigger `play()` and `pause()` via JavaScript to match the specific "medium-sized button" design requirement. This avoids browser autoplay restrictions since it relies on direct user interaction.
- **Responsive Layout**: We will use CSS Flexbox (and occasionally CSS Grid if needed) to ensure the photo frames stack gracefully on mobile devices and sit side-by-side on broader screens.

## Risks / Trade-offs

- **[Risk] Browser Autoplay Restrictions**: Browsers often block audio from playing without user interaction.
  - **Mitigation**: The design relies on the user explicitly clicking the play/pause button to start the music, which perfectly complies with modern browser policies.
- **[Risk] Asset Loading (Images/Audio)**: High-resolution photos and uncompressed audio can slow down the initial load time.
  - **Mitigation**: Recommend using compressed web formats (e.g., WebP for images, MP3/AAC for audio) in the implementation phase.
