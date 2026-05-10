## Description

The library index currently shows inconsistent navigation behavior across the header menu, hero action buttons, and footer contribution path. As the interface grows, broken or mismatched anchor targets can make the site feel unreliable and reduce trust in the browsing experience.

## Current Behavior

- Navigation patterns are not fully consistent across major entry points on the page.
- Some `href` targets are fragile and may not remain aligned with the section structure as the index evolves.
- Users can be sent to the wrong location or lose context when expected destinations are not clearly maintained.

## Expected Behavior

- Every navigation link in the library index should resolve to a valid and intentional destination.
- Header, hero, and footer navigation should follow a consistent section structure.
- Users should be able to move through the page without encountering broken or confusing navigation states.

## Proposed Solution

- Audit all in-page navigation targets in `src/index.html`.
- Standardize `href` values and section identifiers for all primary navigation paths.
- Verify mobile navigation behavior in `src/script.js` after the anchor targets are corrected.

## Priority

High

## Category

Bug / Navigation consistency
