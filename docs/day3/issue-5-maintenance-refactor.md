## Description

The current frontend structure works for the initial project stage, but it will become harder to maintain as more interface features are added. A focused cleanup pass is needed to improve scalability, reduce duplication, and keep future issue work manageable.

## Current Behavior

- Frontend concerns are still concentrated in a small set of growing files.
- CSS and JavaScript will become harder to extend cleanly if structure is not reviewed early.
- Asset and code organization can be improved before larger feature additions begin.

## Expected Behavior

- Frontend files should remain easy to understand, extend, and maintain.
- CSS and JavaScript should be organized to support future features without unnecessary duplication.
- Asset usage should be reviewed for optimization and cleaner project structure.

## Proposed Solution

- Review `src/index.html`, `src/style.css`, and `src/script.js` for opportunities to simplify structure.
- Clean up styling and scripting patterns that may hinder future work.
- Prepare the frontend for scalable iteration through small refactors and asset optimization steps.

## Priority

Medium

## Category

Maintenance / Frontend refactoring
