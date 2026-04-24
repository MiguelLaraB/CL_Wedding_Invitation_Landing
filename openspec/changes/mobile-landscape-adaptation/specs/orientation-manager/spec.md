## ADDED Requirements

### Requirement: Orientation Warning Overlay
The system SHALL display a blocking overlay message when the device is in portrait orientation.

#### Scenario: Blocking Portrait View
- **WHEN** a mobile device is detected in portrait orientation.
- **THEN** an overlay with the message "Por favor, pon el celular en modo horizontal" is displayed, preventing interaction with the main content.

#### Scenario: Releasing Landscape View
- **WHEN** the device orientation changes to landscape.
- **THEN** the overlay is hidden and the landing page content is interactive.
