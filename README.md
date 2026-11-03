# 🛒 FreshCart

A supermarket storefront built with **React 19** — browse products, filter and sort them, view product details and manage a persistent shopping cart.

The goal of this project was to practice **scalable state management without external libraries**, using `useReducer` + Context API with custom hooks and selectors.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## ✨ Features

- Product catalog loaded asynchronously, with loading and error states
- Search by name, filter by category and price range, and sort
- Product details page (`/products/:id`) and a 404 page
- Cart: add items, change quantity, remove items, clear the cart
- Stock-aware — you can't add more than what's available
- Order checkout updates product stock
- Live totals (item count and price)
- Cart persisted in **LocalStorage** across reloads
- Responsive layout

---

## 🧠 What this project demonstrates

| Concept | Where |
|---------|-------|
| Global state with `useReducer` + Context | `src/app/` |
| Action creators as a custom hook | `src/hooks/useActions.js` |
| Selectors for derived state (totals, filtered list) | `src/hooks/use*Selectors.js` |
| Side effects isolated in hooks | `useLoadProducts`, `usePersistCart` |
| Data access separated from UI | `src/services/` |
| Nested routing with a shared layout | `src/router/Router.jsx` |

---

## 📁 Project Structure

```
src/
├── app/            # store: context, provider, reducer, initial state
├── components/
│   ├── cart/       # CartItem, CartList, CartSummary
│   ├── layout/     # Header, Footer, MainLayout
│   └── products/   # ProductCard, ProductGrid, ProductFilters
├── hooks/          # actions, selectors, data loading, cart persistence
├── pages/          # ProductList, ProductDetails, Cart, NotFound
├── router/         # React Router config
├── services/       # product + cart storage services
└── styles/         # CSS per feature
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/wessam-khaled/freshcart.git
cd freshcart
npm install
npm run dev
```

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

---

Built by [@wessam-khaled](https://github.com/wessam-khaled)
