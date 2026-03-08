# Product Dashboard

A responsive product dashboard that fetches data from the [Fake Store API](https://fakestoreapi.com/) and displays products in a clean, filterable UI.

## Tech Stack

- **React** + **Vite** – UI and build tooling
- **Tailwind CSS** – Styling and responsive layout
- **Fetch API** – Data fetching (no extra HTTP client)

## Features

- **Fetch & display** – Loads products from `https://fakestoreapi.com/products` and shows image, title, price, and rating on each card
- **Search** – Filter by product title, category, or description (case-insensitive)
- **Filter** – Filter by category (electronics, jewelery, men's clothing, women's clothing)
- **Sort** – Sort by price (low/high), name (A–Z), or rating (high to low)
- **Responsive design** – Mobile (1 column), tablet (2), desktop (3–4 columns) with touch-friendly controls
- **Loading state** – Skeleton cards while data is loading
- **Error state** – Message and Retry button if the API fails
- **Empty state** – Message when search or filter returns no results

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the dev server:
   ```bash
   npm run dev
   ```

3. Open the URL shown in the terminal (e.g. `http://localhost:5173`) in your browser.

## Build for Production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── api/products.js       # Fetch products from API
├── hooks/useProducts.js  # React hook: products, loading, error, retry
├── components/
│   ├── ProductCard.jsx   # Single product card
│   ├── ProductGrid.jsx   # Grid of cards
│   ├── SearchBar.jsx     # Search input
│   ├── FilterSortBar.jsx # Category filter + sort dropdown
│   ├── LoadingSkeleton.jsx # Skeleton loading UI
│   └── EmptyState.jsx    # Empty and error states
├── App.jsx               # App state and layout
├── main.jsx
└── index.css             # Tailwind + base styles
```

## Deployment

The app is a static Vite build. You can deploy the `dist` folder to:

- **Vercel** – Connect your GitHub repo; Vite is supported by default
- **Netlify** – Build command: `npm run build`, publish directory: `dist`
- **GitHub Pages** – Build and push the `dist` contents to a `gh-pages` branch or use a GitHub Action

## Screenshots

Add screenshots of the dashboard (desktop and mobile) here or in a `/screenshots` folder when submitting.
