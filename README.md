# Product Dashboard

A responsive product dashboard that fetches product data from the Fake Store API and displays it in a clean, modern, and interactive user interface.

## Live Demo

Live Project: https://serene-klepon-85cb34.netlify.app/

GitHub Repository: https://github.com/farespachu65

## Tech Stack

* React – Frontend UI development
* Vite – Fast build tool and development server
* Tailwind CSS – Modern styling and responsive layout
* Fetch API – Fetching product data from API

## Features

**Fetch & Display Products**

* Loads products from the Fake Store API
* Displays product image, title, price, and rating

**Search Functionality**

* Search products by title, category, or description
* Case-insensitive filtering

**Category Filtering**

* Filter products by categories:

  * Electronics
  * Jewelery
  * Men's Clothing
  * Women's Clothing

**Sorting Options**

* Sort by price (Low → High)
* Sort by price (High → Low)
* Sort by name (A → Z)
* Sort by rating (High → Low)

**Responsive Design**

* Mobile: 1 column layout
* Tablet: 2 columns
* Desktop: 3–4 columns
* Optimized for different screen sizes

**Loading Skeleton**

* Shows skeleton cards while data is loading

**Error Handling**

* Displays error message if API request fails
* Retry button to reload products

**Empty State**

* Displays message when no products match search or filter

## UI Highlights

* Clean and modern dashboard layout
* Responsive grid design using Tailwind CSS
* Interactive product cards
* Smooth loading experience with skeleton UI
* User-friendly search and filtering controls

## API Used

Fake Store API
https://fakestoreapi.com/products

## How to Run the Project

1. Install dependencies

npm install

2. Start the development server

npm run dev

3. Open the URL shown in the terminal in your browser
   (example: http://localhost:5180)

## Build for Production

npm run build

Preview the production build locally

npm run preview

## Project Structure

src/
├── api/products.js
├── hooks/useProducts.js
├── components/
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   ├── SearchBar.jsx
│   ├── FilterSortBar.jsx
│   ├── LoadingSkeleton.jsx
│   └── EmptyState.jsx
├── App.jsx
├── main.jsx
└── index.css

## Deployment

This project can be deployed on platforms like:

* Netlify
* Vercel
* GitHub Pages

Since it is a static Vite build, deploy the **dist** folder after running:

npm run build

## Screenshots

Add screenshots of the dashboard (desktop and mobile view) inside a **/screenshots** folder.

Example:

screenshots/
├── desktop-view.png
├── mobile-view.png
├── search-feature.png

## Author

Fares K

GitHub: https://github.com/farespachu65
