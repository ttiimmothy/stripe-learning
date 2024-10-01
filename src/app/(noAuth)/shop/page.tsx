"use client"
import Banner from "@/components/lib/ui/Banner";
import React, {useState} from 'react'
import ProductCard from "@/components/shop/ProductCard";
import ShopFiltering from "@/components/shop/ShopFiltering";
import {Filters, FilterState} from "@/types/filter.type";
import {useFetchProducts} from "@/lib/services/product/useFetchProducts";
import Pagination from "@/components/Pagination";

const ShopPage = () => {
  const filters:Filters = {
    categories: ["all", "accessories", "dress", "jewellery", "cosmetics"],
    colors: ["all", "black", "red", "gold", "blue", "silver", "beige", "green"],
    priceRanges: [{label: "Under $50", min: 0, max: 50}, {label: "$50 - $100", min: 50, max: 100}, {label: "$100 - $200", min: 100, max: 200}, {label: "$200 and above", min: 200, max: Infinity}],
  }
  const [filterState, setFilterState] = useState<FilterState>({
    category: "all",
    color: "all",
    priceRange: {label: "", min: 0, max: Infinity},
  })
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 16
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
            <Pagination currentPage={currentPage} totalPages={products?.products.totalPages || 1} handlePageChange={handlePageChange} />
            </>
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default ShopPage
