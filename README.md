# 🐾 Paws & Claws Pet Store Frontend

**An OpenHands frontend development demo** — companion to the [Petstore API Demo](https://github.com/rajshah4/openhands-petstore-demo).

This demo shows how OpenHands adds a new feature to an existing website: an AI agent takes a pet store frontend, adds a complete "Pet Grooming Services" section, previews it in the browser, and reviews the code — all in a single conversation.

## Demo Story

1. **Existing Site** (`main` branch) — A polished pet store with hero banner, category browsing (Dogs, Cats, Birds, Fish), pet cards with photos and pricing, and a shopping cart.

2. **Feature Addition** (`feature/add-grooming-services` branch) — OpenHands adds a new Pet Grooming Services section with:
   - 6 grooming packages with descriptions, durations, and pricing
   - Filter by pet type (Dogs, Cats, Birds)
   - "Most Popular" badges on top services
   - Purple-themed "Book Now" buttons
   - Grooming nav link in the header with smooth scroll

3. **Browser Preview** — OpenHands uses its built-in browser to verify the UI looks correct.

4. **Code Review** — OpenHands reviews the diff, catching accessibility issues, UX anti-patterns (alert() dialogs), and design system improvements (hardcoded colors → CSS variables).

## Quick Start

```bash
npm install
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173)

## Tech Stack

- React 19 + Vite
- Lucide React (icons)
- Vanilla CSS with custom properties

## Recording a Demo Video

A [demorec](https://github.com/OpenHands/demorec) script is included at `demo/frontend-feature-demo.demorec`. To record:

```bash
pip install demorec
demorec record demo/frontend-feature-demo.demorec
```

## What This Demonstrates

| Capability | How It's Shown |
|---|---|
| **Feature development** | Adds a complete new section to an existing React app |
| **Browser preview** | Agent navigates to the running site and verifies UI |
| **Code review** | Reviews the diff for accessibility, UX, and maintainability |
| **Design awareness** | Follows existing patterns (card grids, filters, CSS variables) |
| **Realistic workflow** | Feature branch → preview → PR review |

## Related Demos

- [Petstore API Demo](https://github.com/rajshah4/openhands-petstore-demo) — Backend workflows (PR review, dependency mgmt, bug fixes)
- [Spec-Driven Development](https://github.com/jpelletier1/demo-spec-driven) — Building from specifications
- [demorec](https://github.com/OpenHands/demorec) — Recording demo videos mixing terminal + browser
