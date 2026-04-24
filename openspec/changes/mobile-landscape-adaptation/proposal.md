# Proposal: Mobile Landscape Adaptation

Adapt the wedding invitation landing page for mobile devices, enforcing a landscape-only experience with orientation prompts and removing mobile-specific touch artifacts.

## Problem

The landing page currently lacks mobile optimization. The user requires a specific mobile experience that works exclusively in landscape mode, provides guidance when the device is in portrait mode, and feels premium by removing default mobile browser highlights.

## Goal

- Provide a seamless mobile experience in landscape orientation.
- Implement an orientation warning system that guides users to rotate their devices.
- Remove the default blue tap highlight across the entire application.
- Maintain existing PC functionality without regressions.

## What Changes

- **New Overlay Component**: An orientation warning message ("Por favor, pon el celular en modo horizontal") that appears on mobile devices when in portrait mode.
- **Responsive Styling**: CSS media queries specifically targeting mobile devices in landscape mode to adjust layout, typography, and element positioning.
- **Global CSS Refinement**: Addition of `-webkit-tap-highlight-color: transparent` to remove the blue tap feedback.
- **Orientation Detection**: JavaScript/CSS logic to detect and respond to device orientation changes.

## Capabilities

### New Capabilities
- `mobile-landscape-ui`: Specialized UI layout and scaling for mobile devices in landscape orientation.
- `orientation-manager`: Detection of device orientation and management of the landscape-mode-only warning overlay.
- `ui-refinement`: Global UI cleanup, specifically removing mobile-specific browser artifacts like tap highlights.

### Modified Capabilities
*(None - first implementation of these features)*

## Impact

- **UI/UX**: Significant improvement in mobile usability and visual quality.
- **Styling**: New media queries in global and component-level CSS.
- **Logic**: Potential minor additions to handle orientation events.
