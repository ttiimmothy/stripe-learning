"use client"
import {clearCart} from "@/lib/features/cartSlice";
import {useCheckout} from "@/lib/services/order/useCheckout";
import {AppDispatch, RootState} from "@/lib/store";
import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Product} from "@/types/cartSlice.type";
import {loadStripe} from "@stripe/stripe-js";
import {useRouter} from "next/navigation";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const OrderSummary = ({products}: {products: Product[]}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {selectedItems, totalPrice, tax, taxRate, grandTotal} = useSelector((state:RootState) => state.cart);
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  const router = useRouter();
  const [checkout] = useCheckout();
  const handleCheckout = async (checkoutProducts: Product[]) => {
    const {data:order} = await checkout({variables:{input:{products:checkoutProducts}}});
    if (order.checkout) {
      router.push(order.checkout.url)
    }
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
          <button className="px-3 py-1.5 bg-green-600 text-white rounded-md mt-2 mb-4 flex justify-center items-center" onClick={() => handleCheckout(products)}>
            <span className="mr-2">Checkout</span><i className="ri-bank-card-line"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
