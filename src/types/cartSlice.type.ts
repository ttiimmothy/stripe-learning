import {ProductCardType} from "./productCard.type";

export type Product = ProductCardType & { quantity: number };

export type CartState = {
  products: Product[];
  selectedItems: number;
  totalPrice: number;
  tax: number;
  taxRate: number; 
  grandTotal: number;
}