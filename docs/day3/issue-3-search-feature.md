## Description

The library interface currently lacks a search mechanism for quickly locating relevant resources. As additional content is introduced, users will need a simple live filtering experience to reduce scanning time and improve discoverability.

## Current Behavior

- Users must manually read each resource card to find relevant content.
- There is no search input or live filtering behavior in the current interface.
- Resource discovery becomes less efficient as the collection grows.

## Expected Behavior

- Users should be able to type into a search field and immediately filter visible resource cards.
- The filtering experience should update in real time without reloading the page.
- The interface should clearly communicate when no matching resources are found.

## Proposed Solution

- Add a search input near the resource section in `src/index.html`.
- Extend `src/script.js` with a lightweight live filtering routine for resource cards.
- Add supporting styles in `src/style.css` for the search field and empty-state messaging.

## Priority

Medium

## Category

Enhancement / Search and discovery
