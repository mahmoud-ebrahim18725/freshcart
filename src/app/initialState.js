export const initialState = {
  products: [],
  cart: [],
  filters: {
    category: "all",
    searchInput: "",
    sort: "default",
    priceRange: {
      min: 0,
      max: Number.MAX_SAFE_INTEGER,
    },
  },
  ui: {
    status: "idle",
    error: null,
  },
};
