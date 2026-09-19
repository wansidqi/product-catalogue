# Product Catalog App

A small product catalog app built for the Neurogine Junior Mobile Developer assessment, using the DummyJSON API.

## Stack

- **Framework:** [FILL IN: Flutter / Kotlin / Swift / React Native / KMP]
- **Language:** [FILL IN]
- **State management:** [FILL IN, e.g. ViewModel / Provider / Riverpod / hooks]
- **Networking:** [FILL IN, e.g. Retrofit / Dio / fetch / URLSession]
- **Image loading:** [FILL IN]

## How to Run

1. Clone the repo: `git clone [YOUR REPO URL]`
2. Install dependencies: `[FILL IN]`
3. Run the app: `[FILL IN]`

Requirements: [FILL IN: SDK/Node/Xcode versions]. No API key needed.

## Features

- [x] Product list (title, thumbnail, price)
- [x] Pagination via `skip` (infinite scroll)
- [x] Product detail (description, price, rating, images)
- [x] Loading / error (with retry) / empty / success states
- [x] Debounced search
- [ ] Pull-to-refresh (bonus) [tick if done]
- [ ] Image placeholder and error handling (bonus) [tick if done]
- [ ] Unit test (bonus) [tick if done]

## Architecture

```
[PASTE YOUR ACTUAL FOLDER STRUCTURE HERE]
e.g.
lib/
  data/    -> API client, DTOs, repository
  domain/  -> models, (use cases)
  ui/      -> screens, widgets, state
```

**Layers:** [Explain what each layer does and what depends on what.]

**UI state:** [Explain how you model loading/error/empty/success.]

**Pagination:** [Explain how you track skip/total, prevent duplicate requests, and detect the end of the list.]

## Search Approach

I chose **[server-side via /products/search | client-side filtering]** because [YOUR REASON].

Debounce: [duration, e.g. 400ms] and how [previous requests are cancelled or ignored].

## Key Decision

[Pick ONE architectural decision, say what you chose, what the alternative was, and why. This is the same one you'll explain in the video.]

## AI Usage Disclosure

- use AI as guidance to setup nativewind for simplify styling
- design the template for README.md
- guideline usage of tanstack library for infinite query fetch next page
- asking AI for styling color
- guide for component cannot scroll
- asking opinion for UI layout for product description screen & generate styling for me
- create UI component search bar 
- guide to handle query key if data is undefined (tanstack library)

## Testing

[Describe your unit test, or write "None yet".]

## Not Finished / TODO

- [ ] [Item 1]
- [ ] [Item 2]

## Known Limitations

- [e.g. No offline caching]
- [e.g. Search resets pagination]