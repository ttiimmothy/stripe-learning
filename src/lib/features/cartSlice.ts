import { createSlice } from "@reduxjs/toolkit";
import { Product, CartState } from "@/types/cartSlice.type";
import {ProductCardType} from "@/types/productCard.type";
import {toast} from "react-toastify";
import {setGrandTotal, setSelectedItems, setTax, setTotalPrice, updateState} from "../cart/cartUpdateState";

const defaultProduct = {products:[],selectedItems: 0,totalPrice: 0,tax: 0,taxRate: 0.13,grandTotal: 0}
const loadProductFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("product")
    if (serializedState == null) return defaultProduct
    const parsedProducts = JSON.parse(serializedState)
    const taxRate = 0.13
    return {products:parsedProducts,selectedItems:setSelectedItems(parsedProducts),totalPrice:setTotalPrice(parsedProducts),tax:setTax(parsedProducts, taxRate),taxRate,grandTotal:setGrandTotal(parsedProducts, taxRate)}
  } catch (error) {
    return defaultProduct
  }
}

const initialState: CartState = loadProductFromLocalStorage()
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
        toast.dismiss()
        toast.warn("Item already added",{autoClose: 1000});
      }
      localStorage.setItem("product",JSON.stringify(state.products));
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
      localStorage.setItem("product",JSON.stringify(state.products));
      updateState(state);
    },
    removeFromCart: (state, action: { payload: string }) => {
      state.products = state.products.filter(product => product._id !== action.payload);
      localStorage.setItem("product",JSON.stringify(state.products));
      updateState(state);
    },
    clearCart: (state) => {
      state.products = [];
      state.selectedItems = 0;
      state.totalPrice = 0;
      state.tax = 0;
      state.grandTotal = 0;
      localStorage.removeItem("product");
    }
  },
})

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;