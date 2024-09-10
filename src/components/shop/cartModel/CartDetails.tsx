import React from 'react'
import {Product} from "@/types/cartSlice.type";
import Image from "next/image";
import {AppDispatch} from "@/lib/store";
import {useDispatch} from "react-redux";
import {removeFromCart, updateQuantity} from "@/lib/features/cartSlice";
const CartDetails = ({products}: {products: Product[]}) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleQuantity = (id: number, type: string) => {
    dispatch(updateQuantity({id, type}));
  }
  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    dispatch(removeFromCart(id));
  }
  return (
    <div>
    {products.length === 0 ? <div>Your cart is empty</div> : 
    <div>
      {products.map((product, index) => (
        <div key={product.id} className="flex flex-col md:flex-row md:items-center md:justify-between shadow-md md:p-5 p-2 mb-4">
          <div className="flex items-center">
            <span className="size-6 mr-4 bg-primary text-white rounded-full text-sm flex items-center justify-center">0{index + 1}</span>
            <Image src={product.image} alt={product.name} width={100} height={100} className="size-12 object-cover mr-4"/>
          <div>
            <h5 className="text-lg font-medium">{product.name}</h5>
            <p className="text-gray-600 text-sm">${Number(product.price).toFixed(2)}</p>
          </div>
          <div className="flex flex-row md:justify-start justify-end items-center mt-2">
            <button 
            onClick={() => handleQuantity(product.id, "decrement")} 
            className="size-6 flex items-center justify-center px-1.5 bg-gray-200 text-gray-700 hover:bg-primary hover:text-white ml-8 rounded-full">-</button>
            <p className="px-2 mx-1 text-center">{product.quantity}</p>
            <button 
            onClick={() => handleQuantity(product.id, "increment")} 
            className="size-6 flex items-center justify-center px-1.5 bg-gray-200 text-gray-700 hover:bg-primary hover:text-white rounded-full">+</button>
          </div>
          <div className="ml-5"><button className="text-red-500 hover:text-red-800 mr-4" onClick={(e) => handleRemove(e, product.id)}>Remove</button></div>
          </div>
        </div>
      ))}
    </div>
    }
    </div>
  )
}

export default CartDetails
