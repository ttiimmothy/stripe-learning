"use client"
import Banner from "@/components/lib/ui/Banner";
import {Product} from "@/types/product.type";
import React, {useEffect, useState} from 'react'
import productsData from "@/data/products.json"
import ProductCard from "@/components/shop/ProductCard";
import ShopFiltering from "@/components/shop/ShopFiltering";
import {Filters, FilterState} from "@/types/filter.type";
import {useFetchProducts} from "@/lib/services/product/useFetchProducts";
import {ProductType} from "@/generated/graphql/graphql";

const ShopPage = () => {
  const filters:Filters = {
    categories: ["all", "accessories", "dress", "jewellery", "cosmetics"],
    colors: ["all", "black", "red", "gold", "blue", "silver", "beige", "green"],
    priceRanges: [{label: "Under $50", min: 0, max: 50}, {label: "$50 - $100", min: 50, max: 100}, {label: "$100 - $200", min: 100, max: 200}, {label: "$200 and above", min: 200, max: Infinity}],
  }
  // const [products, setProducts] = useState<Product[]>(productsData)
  const [filterState, setFilterState] = useState<FilterState>({
    category: "all",
    color: "all",
    priceRange: {label: "", min: 0, max: Infinity},
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(16)
  const {category, color, priceRange} = filterState;
  const [minPrice, maxPrice] = [priceRange.min, priceRange.max]
  const {data:products, loading, error} = useFetchProducts({input: {category: category !== "all" ? category : "", color: color !== "all" ? color : "", minPrice: isNaN(minPrice) ? "0" : minPrice.toString(), 
  maxPrice: isNaN(maxPrice) ? "" : maxPrice.toString(), page: currentPage.toString(), limit: productsPerPage.toString()}})
  const clearFilters = () => {
    setFilterState({
      category: "all",
      color: "all",
      priceRange: {label: "", min: 0, max: Infinity},
    })
  }
  // if (loading) return <div>Loading...</div>
  // if (error) return <div>Error loading products</div>
  const totalFetchedProducts = products?.products.products
  const startProduct = (currentPage - 1) * productsPerPage + 1
  const endProduct = startProduct + totalFetchedProducts?.length - 1
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= products?.products.totalPages) {
      setCurrentPage(pageNumber)
    }
  }
  return (
    <>
      <Banner title={"Shop Page"} />
      <section className="section__container">
        <div className="flex flex-col md:flex-row gap-8 md:gap 12">
          <ShopFiltering filters={filters} filterState={filterState} setFilterState={setFilterState} clearFilters={clearFilters}/>
          <div className="md:min-h-[70vh]">
            {loading ? <div>Loading...</div> : error ? <div>Error loading products</div> :
            <>
            <h3 className="text-xl font-medium mb-4">Showing {startProduct} to {endProduct} of {products?.products.totalProducts} products</h3>
            <div className="min-h-192">{products && <ProductCard products={totalFetchedProducts} />}</div>
            <div className="mt-6 flex justify-center">
              <button className={"bg-gray-300 text-gray-700 px-4 py-2 mr-2 rounded-md"} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
              {
                [...Array(products?.products.totalPages)].map((_, index) => (
                  <button key={index} className={`size-10 flex justify-center items-center mx-1 rounded-md ${index + 1 === currentPage ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
                  onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                ))
              }
              <button className={"bg-gray-300 text-gray-700 px-4 py-2 ml-2 rounded-md"} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === products?.products.totalPages}>Next</button>
            </div>
            </>
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default ShopPage
