"use client"
import {Product} from "@/types/product.type";
import {useParams} from "next/navigation";
import React, {useState, useEffect} from 'react'
import products from "@/data/products.json";
import ProductCard from "@/components/shop/ProductCard";
import Banner from "@/components/lib/ui/Banner";

const CategoryPage = () => {
  const {categoryName} = useParams<{categoryName: string}>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  useEffect(() => {
    const filtered = products.filter((product) => product.category === categoryName.toLowerCase());
    setFilteredProducts(filtered);
  }, [categoryName]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Banner title={categoryName} />
    <div className="section__container"><ProductCard products={filteredProducts} /></div>
    </>
  )
}

export default CategoryPage
