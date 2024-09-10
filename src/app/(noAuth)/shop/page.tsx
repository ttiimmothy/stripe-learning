"use client"
import Banner from "@/components/lib/ui/Banner";
import {Product} from "@/types/product.type";
import React, {useEffect, useState} from 'react'
import productsData from "@/data/products.json"
import ProductCard from "@/components/shop/ProductCard";
import ShopFiltering from "@/components/shop/ShopFiltering";
import {Filters, FilterState} from "@/types/filter.type";

const ShopPage = () => {
  const filters:Filters = {
    categories: ["all", "accessories", "dress", "jewellery", "cosmetics"],
    colors: ["all", "black", "red", "gold", "blue", "silver", "beige", "green"],
    priceRanges: [{label: "Under $50", min: 0, max: 50}, {label: "$50 - $100", min: 50, max: 100}, {label: "$100 - $200", min: 100, max: 200}, {label: "$200 and above", min: 200, max: Infinity}],
  }
  const [products, setProducts] = useState<Product[]>(productsData)
  const [filterState, setFilterState] = useState<FilterState>({
    category: "all",
    color: "all",
    priceRange: {label: "", min: 0, max: Infinity},
  })
  const handleFilterChange = () => {
    let filteredProducts = productsData

    // filter products based on the selected category
    if (filterState.category && filterState.category !== "all") {
      filteredProducts = filteredProducts.filter((product) => product.category === filterState.category)
    }

    // filter products based on the selected color
    if (filterState.color && filterState.color !== "all") {
      filteredProducts = filteredProducts.filter((product) => product.color === filterState.color)
    }

    // filter products based on the selected price range
    if (filterState.priceRange && filterState.priceRange.label !== "") {
      filteredProducts = filteredProducts.filter((product) => product.price >= filterState.priceRange.min && product.price <= filterState.priceRange.max)
    }
    setProducts(filteredProducts)
  }
  useEffect(() => {
    handleFilterChange()
  }, [filterState])

  const clearFilters = () => {
    setFilterState({
      category: "all",
      color: "all",
      priceRange: {label: "", min: 0, max: Infinity},
    })
  }
  return (
    <>
      <Banner title={"Shop Page"} />
      <section className="section__container">
        <div className="flex flex-col md:flex-row gap-8 md:gap 12">
          <ShopFiltering filters={filters} filterState={filterState} setFilterState={setFilterState} clearFilters={clearFilters}/>
          <div className="md:min-h-[80vh]">
            <h3 className="text-xl font-medium mb-4">Product Available : {products.length}</h3>
            <ProductCard products={products} />
          </div>
        </div>
      </section>
    </>
  )
}

export default ShopPage
