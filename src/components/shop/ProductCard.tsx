import React from 'react'
import { Product } from "@/types/product.type"
import Image from "next/image"
import Link from "next/link";
import RatingStars from "../lib/RatingStars";
import {useDispatch} from "react-redux";
import { AppDispatch } from "@/lib/store";
import { addToCart } from "@/lib/features/cartSlice";

const ProductCard = ({ products }: { products: Product[] }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="product__card">
          <div className="relative">
            <Link href={`/shop/${product.id}`}>
              <Image src={product.image} alt={product.name} width={300} height={300} className="max-h-96 md:h-64 w-full object-cover opacity-80 hover:opacity-100 transition-all duration-300"/>
            </Link>
            <div className="hover:block absolute top-3 right-3">
              <button onClick={() => handleAddToCart(product)}>
                 <i className="ri-shopping-cart-2-line bg-primary p-1.5 text-white hover:bg-primary-dark"></i>
              </button>
            </div>
          </div>
          {/* product description */}
          <div className="product__card__content">
            <h4>{product.name}</h4>
            <p>${product.price} {product.oldPrice ? <s>${product?.oldPrice}</s> : null}</p>
            <RatingStars rating={product.rating} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductCard
