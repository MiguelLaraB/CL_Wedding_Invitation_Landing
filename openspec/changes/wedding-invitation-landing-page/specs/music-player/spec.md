## ADDED Requirements

### Requirement: Background Music Control
The system MUST include a medium-sized button to control audio playback without relying on browser auto-play features.

#### Scenario: User starts music
- **WHEN** the user clicks the play button while music is paused
- **THEN** the background audio begins playing
- **THEN** the button visually updates to indicate a "pause" state

#### Scenario: User pauses music
- **WHEN** the user clicks the pause button while music is playing
- **THEN** the background audio stops playing
- **THEN** the button visually updates to indicate a "play" state
