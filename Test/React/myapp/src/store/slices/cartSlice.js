import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    allProducts: JSON.parse(localStorage.getItem("all-products")) || [],
    cartProducts: [],
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.allProducts.push(action.payload);
    },

    updateCart: (state, action) => {
      state.cartProducts.push(action.payload);
    },

    removeProduct: () => {},
    updateQuantity: () => {},
    calculateTotal: () => {},
  },
});

export const {
  addProduct,
  removeProduct,
  updateQuantity,
  updateCart,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
