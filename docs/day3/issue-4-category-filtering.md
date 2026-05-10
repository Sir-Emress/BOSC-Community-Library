## Description

The resource area would benefit from clearer categorized browsing to help users understand content types at a glance. Grouping resources into categories such as Books, Journals, Articles, and Tutorials will improve usability and make the interface easier to navigate.

## Current Behavior

- Resource cards are presented in a single undifferentiated group.
- Users cannot quickly browse by content type.
- The current presentation offers limited support for structured scanning and accessible orientation.

## Expected Behavior

- Users should be able to browse resources by category.
- Categories should make it easier to distinguish Books, Journals, Articles, and Tutorials.
- The browsing experience should improve usability while preserving accessibility and clear semantics.

## Proposed Solution

- Introduce category metadata and visible labels in `src/index.html`.
- Add category filter controls or grouped presentation logic in `src/script.js`.
- Update `src/style.css` to support category badges, filter controls, and accessible visual states.

## Priority

Medium

## Category

Enhancement / Categorized browsing
