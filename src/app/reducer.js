export function reducer(state, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART": {
      const existingItem = state.cart.find(
        (item) => item.productId === action.payload,
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.productId === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { productId: action.payload, quantity: 1 }],
        };
      }
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.productId !== action.payload),
      };
    case "UPDATE_CART_QUANTITY": {
      const updatedCart = state.cart
        .map((item) =>
          item.productId === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.amount }
            : item,
        )
        .filter((item) => item.quantity > 0);
      return {
        ...state,
        cart: updatedCart,
      };
    }
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "SET_CATEGORY_FILTER":
      return {
        ...state,
        filters: { ...state.filters, category: action.payload },
      };
    case "SET_SEARCH_FILTER":
      return {
        ...state,
        filters: { ...state.filters, searchInput: action.payload },
      };
    case "SET_SORT":
      return {
        ...state,
        filters: { ...state.filters, sort: action.payload },
      };
    case "SET_PRICE_RANGE":
      return {
        ...state,
        filters: { ...state.filters, priceRange: action.payload },
      };
    case "SET_UI_STATUS":
      return {
        ...state,
        ui: {
          ...state.ui,
          status: action.payload,
          error: "null",
        },
      };
    case "SET_ERROR":
      return {
        ...state,
        ui: {
          ...state.ui,
          status: "error",
          error: action.payload,
        },
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        ui: {
          ...state.ui,
          status: "idle",
          error: null,
        },
      };
    case "SUBMIT_ORDER":
      return {
        ...state,
        products: state.products.map((product) => {
          const cartItem = state.cart.find(
            (item) => item.productId === product.id,
          );
          if (cartItem)
            return { ...product, stock: product.stock - cartItem.quantity };
          return product;
        }),
        cart: [],
      };

    default:
      return state;
  }
}
