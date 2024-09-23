"use client"

import Link from "next/link";
import React from 'react'
import Image from "next/image";
import RatingStars from "@/components/lib/RatingStars";
import {AppDispatch} from "@/lib/store";
import {useDispatch} from "react-redux";
import {useFetchProduct} from "@/lib/services/product/useFetchProducts";
import {ProductType} from "@/generated/graphql/graphql";
import {addToCart} from "@/lib/features/cartSlice";
import ReviewCard from "@/components/ReviewCard";
import {useParams} from "next/dist/client/components/navigation";
const SingleProduct = () => {
  const {productId} = useParams<{productId: string}>();
  const dispatch = useDispatch<AppDispatch>();
  const {data:product, loading, error} = useFetchProduct(productId)
  const productData: ProductType | null = product?.productById?.product || null
  const productReviews = product?.productById?.reviews || []
  const handleAddToCart = (product: ProductType) => {
    dispatch(addToCart(product))
  }
  return (
    <>
    <section className="section__container bg-primary-light">
      <h2 className="section__header capitalize">{productData?.name}</h2>
    <div className="section__subheader space-x-2">
      <span className="hover:text-primary"><Link href="/">home</Link></span>
      <i className="ri-arrow-right-s-line"></i>
      <span className="hover:text-primary"><Link href="/shop">shop</Link></span>
      {!loading && !error && 
      <i className="ri-arrow-right-s-line"></i>}
      {!loading && !error && <span className="hover:text-primary">{productData?.name}</span>}
    </div>
    </section>
    <section className="section__container mt-8">
      {loading ? <div>Loading...</div> : error ? <div>Error loading product</div> :
      <div className="flex flex-col items-center md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <Image 
          src={productData?.image || ""} 
          alt={productData?.name || "product image"}
          width={300} 
          height={300} 
          className="w-full h-auto rounded-md"
          priority
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">{productData?.name}</h2>
          <p className="text-xl text-primary mb-4">${productData?.price} {productData?.oldPrice && <s>${productData?.oldPrice}</s>}</p>
          <p className="text-gray-400 mb-4">{productData?.description}</p>
          <div className="flex flex-col space-y-2">
            <div className="space-x-2"><strong>Category:</strong><span>{productData?.category}</span></div>
            <div className="space-x-2"><strong>Color:</strong><span>{productData?.color}</span></div>
            <div className="flex items-center gap-2"><strong>Rating:</strong> <RatingStars rating={productData?.rating || 0} className="text-lg" /></div>
          </div>
          <button className="mt-6 px-6 py-3 bg-primary text-white rounded-md" onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(productData)
          }}>Add to Cart</button>
        </div>
      </div>}
    </section>
    {/* display reviews */}
    <section className="section__container mt-8">
      <ReviewCard productReviews={productReviews} />
    </section>
    </>
  )
}

export default SingleProduct
