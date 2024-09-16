"use client"
import {useParams} from "next/navigation";
import React, {useState, useEffect} from 'react'
// import products from "@/data/products.json";
import ProductCard from "@/components/shop/ProductCard";
import Banner from "@/components/lib/ui/Banner";
import {useFetchProducts} from "@/lib/services/product/useFetchProducts";
import Pagination from "@/components/Pagination";

const CategoryPage = () => {
  const {categoryName} = useParams<{categoryName: string}>();
  // const [filteredProducts, setFilteredProducts] = useState<ProductCardType[]>([]);
  const [currentPage, setCurrentPage] = useState(1)
  // const [productsPerPage, setProductsPerPage] = useState(16)
  const productsPerPage = 16
  const {data:products, loading, error} = useFetchProducts({input: {category: categoryName, page: currentPage.toString(), limit: productsPerPage.toString()}})
  // setFilteredProducts(products?.products.products);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= products?.products.totalPages) {
      setCurrentPage(pageNumber)
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const totalFetchedProducts = products?.products.products
  const startProduct = (currentPage - 1) * productsPerPage + 1
  const endProduct = startProduct + totalFetchedProducts?.length - 1
  return (
    <>
    <Banner title={categoryName} />
    <div className="section__container">
      {loading ? <div>Loading...</div> : error ? <div>Error loading products</div> : 
      <>
      <h3 className="text-xl font-medium mb-4">Showing {startProduct} to {endProduct} of {products?.products.totalProducts} products</h3>
      <ProductCard products={products?.products.products} />
      <Pagination currentPage={currentPage} totalPages={products?.products.totalPages || 1} handlePageChange={handlePageChange} />
      </>
      }
    </div> 
    </>
  )
}

export default CategoryPage
