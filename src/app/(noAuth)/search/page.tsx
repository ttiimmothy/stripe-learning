"use client"
import {Product} from "@/types/product.type";
import React, {useState} from 'react'
import productsData from "@/data/products.json";
import ProductCard from "@/components/shop/ProductCard";
import Banner from "@/components/lib/ui/Banner";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData);
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = productsData.filter((product) => product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query));
    setFilteredProducts(filtered);
  }

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
      <ProductCard products={filteredProducts} />
    </section>
    </>
  )
}

export default SearchPage
