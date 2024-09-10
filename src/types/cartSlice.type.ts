export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  color: string;
  rating: number;
  quantity: number;
}

export type CartState = {
  products: Product[];
  selectedItems: number;
  totalPrice: number;
  tax: number;
  taxRate: number; 
  grandTotal: number;
}