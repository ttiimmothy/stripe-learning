import { createSlice } from "@reduxjs/toolkit";
import { Product, CartState } from "@/types/cartSlice.type";
// import {ProductType} from "@/generated/graphql/graphql";
import {ProductCardType} from "@/types/productCard.type";

const initialState: CartState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.05,
  grandTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: { payload: ProductCardType }) => {
      const isExist = state.products.find(
        (product: Product) => product._id === action.payload._id
      );
      if (!isExist) {
        state.products.push({...action.payload, quantity: 1})
      } else {
        alert("Item already added");
        // console.log("Item already added");
      }
      updateState(state);
    },
    updateQuantity: (state, action: { payload: { id: string, type: string } }) => {
      state.products.map(product => {
        if (product._id === action.payload.id) {
          if (action.payload.type === "increment") {
            product.quantity += 1;
          } else if (action.payload.type === "decrement") {
            if (product.quantity > 1) {
              product.quantity -= 1;
            }
          }
        }
      });
      updateState(state);
    },
    removeFromCart: (state, action: { payload: string }) => {
      state.products = state.products.filter(product => product._id !== action.payload);
      updateState(state);
    },
    clearCart: (state) => {
      state.products = [];
      state.selectedItems = 0;
      state.totalPrice = 0;
      state.tax = 0;
      state.grandTotal = 0;
    }
  },
});

export const setSelectedItems = (state: CartState) => state.products.reduce((total: number, product: Product) => {
  return Number(total + product.quantity)
}, 0)

export const setTotalPrice = (state: CartState) => state.products.reduce((total: number, product: Product) => {
  return Number(total + product.price * product.quantity)
}, 0)

export const setTax = (state: CartState) => setTotalPrice(state) * state.taxRate;

export const setGrandTotal = (state: CartState) => setTotalPrice(state) + setTotalPrice(state) * state.taxRate;
const updateState = (state: CartState) => {
  state.selectedItems = setSelectedItems(state);
  state.totalPrice = setTotalPrice(state);
  state.tax = setTax(state);
  state.grandTotal = setGrandTotal(state);
}

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;