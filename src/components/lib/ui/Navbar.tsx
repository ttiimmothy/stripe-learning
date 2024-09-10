"use client";
import CartModal from "@/components/shop/CartModal";
import {RootState} from "@/lib/store";
import Link from "next/link";
import React, {useEffect, useRef, useState} from 'react'
import {useSelector} from "react-redux";

export const Navbar = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  }
 
  return (
    <header className="fixed-nav-bar w-nav mb-8">
      <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center">
        <ul className="nav__links">
          <li className="link"><Link href={"/"}>Home</Link></li>
          <li className="link"><Link href={"/shop"}>Shop</Link></li>
          <li className="link"><Link href={"/"}>Pages</Link></li>
          <li className="link"><Link href="/contact">Contact</Link></li>
        </ul>
        <div className="nav__logo">
          <Link href={"/"}>Hibyebye<span>.</span></Link>
        </div>
        <div className="nav__icons relative">
          <span>
            <Link href={"/search"}>
              <i className="ri-search-line"></i>
            </Link>
          </span>
          <span>
            <button className="hover:text-primary" onClick={(e) => {
              e.stopPropagation();
              handleCartToggle()
            }}>
              <i className="ri-shopping-bag-line"></i>
              <sup className="size-4 text-sm inline-block text-white rounded-full bg-primary text-center">
                <div className="flex justify-center items-center size-full text-xs">
                  {products.length}
                </div>
              </sup>
            </button>
          </span>
          <span><Link href={"/login"}><i className="ri-user-line"></i></Link></span>
        </div>
      </nav>
      <CartModal products={products} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}/>
    </header>
  )
}