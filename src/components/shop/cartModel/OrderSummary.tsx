import {clearCart} from "@/lib/features/cartSlice";
import {AppDispatch, RootState} from "@/lib/store";
import React from 'react'
import {useDispatch, useSelector} from "react-redux";

const OrderSummary = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {selectedItems, totalPrice, tax, taxRate, grandTotal} = useSelector((state:RootState) => state.cart);
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  return (
    <div className="bg-primary-light mt-5 rounded text-base">
      <div className="px-6 py-4 space-y-5">
        <h2 className="text-xl text-text-dark">Order Summary</h2>
        <p>Selected Items: {selectedItems}</p>
        <p>Total Price: {totalPrice.toFixed(2)}</p>
        <p>Tax ({taxRate * 100}%): ${tax.toFixed(2)}</p>
        <h3 className="font-bold">Grand Total: {grandTotal.toFixed(2)}</h3>
        <div className="px-4 mb-6">
          <button className="px-3 py-1.5 bg-red-500 text-white rounded-md mt-2 mb-4 flex justify-center items-center" onClick={(e) => {e.stopPropagation(); handleClearCart()}}>
            <span className="mr-2">Clear Cart</span><i className="ri-delete-bin-7-line"></i>
          </button>
          <button className="px-3 py-1.5 bg-green-600 text-white rounded-md mt-2 mb-4 flex justify-center items-center">
            <span className="mr-2">Checkout</span><i className="ri-bank-card-line"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
