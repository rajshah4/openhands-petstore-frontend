# 🐾 Paws & Claws — OpenHands Frontend Demo

A pet store website used to demonstrate how [OpenHands](https://github.com/All-Hands-AI/OpenHands) adds features to an existing frontend codebase. Companion to the [Petstore API Demo](https://github.com/rajshah4/openhands-petstore-demo) (backend).

## The Demo

This repo tells a simple story: **a business wants to add pet grooming services to their existing pet store website.** OpenHands handles the entire workflow in a single conversation — writing code, previewing in the browser, and reviewing the diff.

### What You're Looking At

| Branch | What It Is |
|---|---|
| [`main`](https://github.com/rajshah4/openhands-petstore-frontend) | The **existing** pet store — hero banner, 4 pet categories (Dogs, Cats, Birds, Fish), pet cards with photos/prices, shopping cart |
| [`feature/add-grooming-services`](https://github.com/rajshah4/openhands-petstore-frontend/tree/feature/add-grooming-services) | The **new feature** — a complete Pet Grooming Services section added by OpenHands |
| [**PR #2**](https://github.com/rajshah4/openhands-petstore-frontend/pull/2) | The **diff** — exactly what OpenHands changed, with code review notes |

### Demo Flow (5 minutes)

1. **Show the existing site** — Run the app on `main`. Browse pets, filter by category, add to cart. This is a real, working website.

2. **The ask** — *"The business is expanding into grooming services. We need a new section on the website with service packages, pricing, and booking."*

3. **Show the PR** — Open [PR #2](https://github.com/rajshah4/openhands-petstore-frontend/pull/2). Walk through the diff: 5 files changed, +324 lines. New component, new data, updated nav, new styles.

4. **Show the result** — Switch to the feature branch, refresh. A complete grooming section appears: 6 service packages, "Most Popular" badges, filter by pet type, "Book Now" buttons, purple-themed nav link.

5. **Show the code review** — OpenHands reviewed its own code and flagged:
   - `alert()` → should be a toast/modal (UX anti-pattern)
   - Hardcoded purple hex values → should be CSS custom properties
   - Missing `aria-label` on emoji icons (accessibility)
   - Shared constants could be extracted to prevent drift

### What This Demonstrates

| OpenHands Capability | How It's Shown |
|---|---|
| **Feature development** | Adds a complete new section to an existing React app (not from scratch) |
| **Pattern matching** | Follows existing code patterns — card grids, filter pills, CSS variables |
| **Browser preview** | Agent navigates to the running site and visually verifies the UI |
| **Code review** | Reviews the diff for accessibility, UX, and maintainability issues |
| **PR workflow** | Feature branch → browser preview → PR with structured description |

## Quick Start

```bash
git clone https://github.com/rajshah4/openhands-petstore-frontend.git
cd openhands-petstore-frontend
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

To see the grooming feature:
```bash
git checkout feature/add-grooming-services
```

## Tech Stack

- React 19 + Vite
- Lucide React (icons)
- Vanilla CSS with custom properties

## Recording a Demo Video

A [demorec](https://github.com/jpshackelford/demorec) script is included on the feature branch at `demo/frontend-feature-demo.demorec` for creating a polished video mixing terminal + browser footage.

```bash
git checkout feature/add-grooming-services
pip install demorec
demorec record demo/frontend-feature-demo.demorec
```

## Related

- [Petstore API Demo](https://github.com/rajshah4/openhands-petstore-demo) — Backend demo (PR review, dependency mgmt, bug fixes)
- [OpenHands](https://github.com/All-Hands-AI/OpenHands) — The AI agent platform
- [demorec](https://github.com/jpshackelford/demorec) — Declarative demo video recording
