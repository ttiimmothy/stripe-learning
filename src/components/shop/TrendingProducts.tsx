import React, {useState} from 'react'
import ProductCard from "./ProductCard";
import {useFetchProducts} from "@/lib/services/product/useFetchProducts";

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const loadingMoreProducts = () => {
    setVisibleProducts(products?.products.totalProducts || (prevCount => prevCount + 4));
  }
  const {data:products, loading, error} = useFetchProducts({input: {category: "", color: "", minPrice: "", maxPrice: "", limit: "30"}})
  return (
    <section className="section__container product__container">
      <h2 className="section__header">Trending Products</h2>
      <p className="section__subheader mb-12">Disover the Hottest Picks: Elevate Your Style with Our Curated Collection of Trending Women&apos;s Fashion Products</p>
      {loading ? <div>Loading...</div> : error ? <div>Error loading products</div> :
      <ProductCard products={products?.products.products.slice(0, visibleProducts)} />}
      <div className="product__btn">
        {visibleProducts < products?.products.totalProducts && <button className="btn" onClick={loadingMoreProducts}>Load More</button>}
      </div>
    </section>
  )
}

export default TrendingProducts
