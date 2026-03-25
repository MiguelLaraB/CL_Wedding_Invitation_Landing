## ADDED Requirements

### Requirement: Responsive Layout
The landing page MUST provide a responsive layout that adapts to both desktop and mobile devices.

#### Scenario: User opens on mobile
- **WHEN** the viewport width is small (e.g., less than 768px)
- **THEN** the elements like photo frames scale or stack vertically as appropriate for easy viewing

### Requirement: Photo Frames
The UI MUST include two distinct photo frames positioned below the couple's names.

#### Scenario: Displaying placeholders
- **WHEN** the user views the initial landing page state
- **THEN** two distinct photo frame areas are visible below the names

### Requirement: Letter Reveal Interaction
The UI MUST include a right-arrow button that transitions the view from the initial landing state to a virtual letter view.

#### Scenario: User clicks the arrow
- **WHEN** the user clicks the right-arrow button
- **THEN** the couple's names and photo frames are hidden
- **THEN** the virtual letter/poem is revealed to the user
