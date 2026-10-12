# Week 8 — JavaScript Interaction Handoff

## Hill Country Trail Guide

**Primary User:** Maya Torres

## Required Behaviors

1. Accessible trail-difficulty disclosure
2. Hike-planning form validation/submission feedback

---

## JavaScript Decisions

### Decision 1 — DOM Selection

What elements did your script need to select, and why?

The elements I need to select were the difficulty button/panel and the form/feedback. We selected these in order to use an event listener so that we can trigger events to happen.

### Decision 2 — Event Handling

What events did you listen for? Why were those events appropriate?

Our difficulty button has an event listener attached when clicked it triggers our difficulty panel.

### Decision 3 — State / DOM Update

How did the interface change after user action?

The interface displays information needed for the user after they take action on the webpage.

### Decision 4 — Accessibility

How did you preserve or improve keyboard/accessibility behavior?

I have the webpage listening for click, not onclick, meaning it's only waiting for an element to be activated. If I wanted to improve keyboard I'd use the keydown event to better the accessability, but when trying to use both in one event listener it stopped supporting keyboard control all together, which caused me to revert this decision.

---

## Testing Notes

### Difficulty Disclosure

- Mouse: works fine
- Keyboard: Tab, Enter & Space works fine.
- `aria-expanded`: located on the difficulty button used if true.
- Console errors: None at the moment.

### Planning Form

- Empty/invalid submission: Empty and Partial submissions do not process or give the formFeedback text.
- Valid submission: give the necessary feedback to the user.
- Keyboard: Keyboard controls work fine.
- Console errors: no console errors at this time.

---

## Live Site

https://amandasgit.github.io/WebWorks-Studio/week08-javascript/
