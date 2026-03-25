## Why

The current codebase contains some foundational elements (background color, names, animations) but needs to be transformed into a fully functional and responsive wedding invitation landing page. This will allow the couple to formally invite guests, display photos, and set the mood with background music, accessible from both desktop and mobile devices.

## What Changes

- Add a responsive layout that works seamlessly on both PC and mobile devices.
- Add two distinct photo frames below the couple's names for placeholders/images.
- Add a medium-sized music player button (play/pause) below the photo frames.
- Add a right-arrow button that, when clicked, transitions the view by hiding the photos and names.
- Reveal a virtual letter/formal invitation containing a poem or formal text when the arrow is clicked.

## Capabilities

### New Capabilities
- `wedding-invitation-ui`: The core responsive UI structure including the photo frames, the transitional arrow button, and the revealable letter/poem view.
- `music-player`: A simple audio control component to play and pause background music.

### Modified Capabilities

## Impact

- Layout HTML files: Will be restructured to add the new elements (photo frames, audio player, letter view) and navigation logic.
- CSS styling files: Will have significant additions for the new components, animations for the letter reveal, and media queries for responsiveness.
- JavaScript files: Will be updated to handle the music play/pause logic and the view transition when the arrow is clicked.
