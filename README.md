# Product Catalog App

A small product catalog app built for the Neurogine Junior Mobile Developer assessment, using the DummyJSON API.

## Stack

- **Framework:** Expo (React Native) with Expo Router
- **Language:** TypeScript
- **State management:** TanStack React Query (`useInfiniteQuery` / `useQuery`) for server state, local `useState` for UI state
- **Networking:** Native `fetch` against the DummyJSON REST API
- **Styling:** NativeWind (Tailwind for React Native)
- **Image loading:** `expo-image`

## How to Run

1. Clone the repo: `git clone [YOUR REPO URL]`
2. Install dependencies: `npm install`
3. Start the dev server: `npx expo start`
4. Open the app:
   - **Expo Go (phone):** install the **Expo Go** app, make sure your phone is on the same Wi-Fi as your computer, then scan the QR code shown in the terminal (Camera app on iOS, or directly in Expo Go on Android).
   - **Browser:** press `w` in the terminal.

Requirements: Node.js LTS, Expo Go app. No API key needed.

## Features

- [x] Product list (title, thumbnail, price)
- [x] Pagination via `skip` (infinite scroll)
- [x] Product detail (description, price, rating, images)
- [x] Loading / error (with retry) / empty / success states
- [x] Debounced search
- [ ] Pull-to-refresh (bonus)
- [ ] Image placeholder and error handling (bonus)
- [ ] Unit test (bonus)

## Architecture

```
src/
  app/
    index.tsx              -> Product list screen (search bar, grid, pagination)
    [id].tsx                -> Product detail screen
    _layout.tsx             -> Expo Router root layout / navigator
    components/
      card.tsx               -> Product card used in the list grid
    constant/
      color.ts                -> Shared color/theme tokens
      state.ts                 -> Shared state constants
    hooks/
      useDebounce.ts           -> Generic debounce hook for the search input
    interface/
      product-interface.ts     -> TypeScript types for DummyJSON product responses
    services/
      product-service.ts       -> React Query hooks (list, detail, search) wrapping fetch calls
  styles/
    product-detail.styles.ts  -> Styles for the product detail screen
  global.css                  -> Tailwind/NativeWind entry stylesheet
```

**Layers:** `services/` isolates all network calls and React Query configuration (queryKey, staleTime, pagination params) behind hooks. Screens in `app/` only consume these hooks and render UI/state — they don't call `fetch` directly. `interface/` holds the shared product typings consumed by both services and screens.

**UI state:** Each screen derives loading/error/empty/success directly from the React Query hook's `isLoading`/`isError` flags and the returned data. Loading and error states render dedicated full-screen views (error includes a "Retry" button wired to `refetch()`); empty state is shown when a search yields zero results.

**Pagination:** `useGetProducts` uses `useInfiniteQuery` with `initialPageParam: 0` and `getNextPageParam` computed from the previous page's `skip + limit` (20 items per page). The list screen calls `fetchNextPage()` from `FlatList`'s `onEndReached`, and React Query dedupes in-flight requests automatically.

## Search Approach

I chose **server-side search via `/products/search`** because DummyJSON's dataset isn't fully loaded client-side (it's paginated), so filtering locally would only search whatever pages have already been fetched — server-side search guarantees results across the whole catalog.

Debounce: 500ms, implemented in `useDebounce` (`src/app/hooks/useDebounce.ts`). The search query is only sent to `useSearchProducts` once the debounced value settles and to prevent spamming API calls on input text.

## Key Decision

I used React Query's `useInfiniteQuery` instead of managing `skip`/pagination state manually with `useState`/`useEffect`. The alternative — hand-rolled pagination state — would require manually tracking the current offset, preventing duplicate fetches while a request is in flight, and merging pages into a single array. `useInfiniteQuery` handles all of that (caching, dedupe, page merging via `data.pages`) out of the box, which kept the list screen focused on rendering rather than fetch orchestration.

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

None yet.

## Not Finished / TODO

- [ ] Pull-to-refresh on the product list
- [ ] Image placeholder / error fallback for broken thumbnails
- [ ] Unit tests for services and components
- [ ] recent search
- [ ] search suggestion
- [ ] skeleton UI while loading the actual data
- [ ] better loading and error UI