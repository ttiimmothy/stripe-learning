import {CartState, Product} from "@/types/cartSlice.type";

export const setSelectedItems = (products:Product[]) => products.reduce((total: number, product: Product) => {
  return Number(total + product.quantity)
}, 0)

export const setTotalPrice = (products:Product[]) => products.reduce((total: number, product: Product) => {
  return Number(total + product.price * product.quantity)
}, 0)

export const setTax = (products: Product[], taxRate: number) => setTotalPrice(products) * taxRate;

export const setGrandTotal = (products:Product[], taxRate: number) => setTotalPrice(products) + setTotalPrice(products) * taxRate;

export const updateState = (state: CartState) => {
  state.selectedItems = setSelectedItems(state.products);
  state.totalPrice = setTotalPrice(state.products);
  state.tax = setTax(state.products, state.taxRate);
  state.grandTotal = setGrandTotal(state.products, state.taxRate);
}