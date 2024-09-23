import {Product} from "@/types/cartSlice.type";
import React, {useCallback, useEffect, useRef, useState} from 'react'
import OrderSummary from "./cartModel/OrderSummary";
import CartDetails from "./cartModel/CartDetails";
import useOnClickOutside from "@/lib/hooks/useOnClickOutside";
const CartModal = ({products, isOpen, onClose}: {products: Product[], isOpen: boolean, onClose: () => void}) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, onClose);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        handleClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose]);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className={`fixed z-50 inset-0 bg-black bg-opacity-80 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} 
    onClick={(e) => e.stopPropagation()}
    style={{transition: "opacity 500ms"}}>
      <div ref={ref} className={`fixed right-0 top-0 md:w-1/3 w-full bg-white h-full overflow-y-auto transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`} 
      style={{transition: "transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)"}}>
        <div className="p-4 mt-4">
          <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold">Your Cart</h4>
          <button 
          onClick={onClose}
          className="text-gray-600 hover:text-gray-900">
          {/* <i className="ri-xrp-fill bg-black p-1 text-white"></i> */}
          <i className="ri-close-line bg-black p-1 text-white"></i>
          </button>
          </div>
          {isMounted && <>{/* cart details */}
          <CartDetails products={products} />
          {/* calculations */}
          {products.length > 0 && <OrderSummary products={products}/>}</>}
        </div>
      </div>
    </div>
  )
}

export default CartModal
