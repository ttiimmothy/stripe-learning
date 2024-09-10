"use client"

import Link from "next/link";
import {useParams} from "next/navigation";
import React from 'react'
import Image from "next/image";
import RatingStars from "@/components/lib/RatingStars";
const SingleProduct = () => {
  const {productId} = useParams();
  return (
    <>
    <section className="section__container bg-primary-light">
      <h2 className="section__header capitalize">Single Product Page</h2>
    <div className="section__subheader space-x-2">
      <span className="hover:text-primary"><Link href="/">home</Link></span>
      <i className="ri-arrow-right-s-line"></i>
      <span className="hover:text-primary"><Link href="/shop">shop</Link></span>
      <i className="ri-arrow-right-s-line"></i>
      <span className="hover:text-primary">product name</span>
    </div>
    </section>
    <section className="section__container mt-8">
      <div className="flex flex-col items-center md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <Image 
          src={"https://images.unsplash.com/photo-1485527691629-8e370684924c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
          alt={"product image"} 
          width={300} 
          height={300} 
          className="w-full h-auto rounded-md"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Product Name</h2>
          <p className="text-xl text-primary mb-4">$100 <s>$130</s></p>
          <p className="text-gray-400 mb-4">Product Description</p>

          <div>
            <p><strong>Category:</strong> accessories</p>
            <p><strong>Color:</strong> beige</p>
            <div className="flex items-center gap-1"><strong>Rating:</strong> <RatingStars rating={4.5} /></div>
          </div>
          <button className="mt-6 px-6 py-3 bg-primary text-white rounded-md">Add to Cart</button>
        </div>
      </div>
    </section>
    {/* display reviews */}
    <section className="section__container mt-8">
      <h2 className="section__header capitalize">Product Reviews</h2>
    </section>
    </>
  )
}

export default SingleProduct
