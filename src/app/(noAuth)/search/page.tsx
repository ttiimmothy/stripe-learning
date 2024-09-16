"use client"
// import {Product} from "@/types/product.type";
import React, {useCallback, useState} from 'react'
// import productsData from "@/data/products.json";
import ProductCard from "@/components/shop/ProductCard";
import Banner from "@/components/lib/ui/Banner";
import {useSearchProducts} from "@/lib/services/product/useSearchProducts";
import Pagination from "@/components/Pagination";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1)
  // const [productsPerPage, setProductsPerPage] = useState(16)
  const productsPerPage = 16
  const [searchTerm, setSearchTerm] = useState<string>("");
  // const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData);
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  const {data:products, loading, error} = useSearchProducts({input: {searchQuery: searchTerm, page: currentPage.toString(), limit: productsPerPage.toString()}})
  const handleSearch = useCallback(() => {
    setSearchTerm(searchQuery.toLowerCase()); // Update searchTerm when search is triggered
    setCurrentPage(1); // Reset to first page on new search
  }, [searchQuery]);
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= (products?.productsSearch.totalPages || 1)) {
      setCurrentPage(pageNumber)
    }
  }
  const totalFetchedProducts = products?.productsSearch.products
  const startProduct = (currentPage - 1) * productsPerPage + 1
  const endProduct = startProduct + totalFetchedProducts?.length - 1
  return (
    <>
    <Banner title="Search Products" />
    <section className="section__container">
      <div className="w-full mb-12 flex flex-col md:flex-row gap-4 items-center justify-center">
        <input 
        type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        placeholder="Search for products..." 
        className="search-bar w-full max-w-4xl p-2 border rounded" 
        onKeyDown={handleKeyPress}
        />
        <button onClick={handleSearch} className="search-button w-full md:w-auto px-8 py-2 rounded bg-primary text-white">Search</button>
      </div>
      {loading ? <div>Loading...</div> : error ? <div>Error loading products</div> :
      totalFetchedProducts?.length > 0 ? <>
      <h3 className="text-xl font-medium mb-4">Showing {startProduct} to {endProduct} of {products?.productsSearch.totalProducts} products</h3>
      <ProductCard products={products?.productsSearch.products} />
      <Pagination totalPages={products?.productsSearch.totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
      </> : <div>No products found</div>}
    </section>
    </>
  )
}

export default SearchPage
