## Description

The current resource card layout needs refinement for smaller screens to preserve readability and spacing. On narrower viewports, card compression and uneven spacing can make the resource section feel crowded and harder to use.

## Current Behavior

- Resource cards can appear visually compressed on smaller screens.
- Spacing between cards and surrounding sections is not fully optimized for mobile layouts.
- The responsive layout does not yet provide the most comfortable reading flow for touch devices.

## Expected Behavior

- Resource cards should stack cleanly with consistent spacing on tablets and mobile devices.
- Text blocks should remain readable without feeling cramped or overflowing.
- The overall section layout should maintain visual balance across viewport sizes.

## Proposed Solution

- Review the responsive breakpoints in `src/style.css`.
- Improve spacing, card padding, and grid behavior for smaller screens.
- Validate the updated layout in browser responsive mode and confirm no regressions on desktop.

## Priority

High

## Category

Bug / Responsive layout
