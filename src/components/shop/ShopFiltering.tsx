import React from 'react'
import {ShopFilteringProps} from "./ShopFilteringProps.interface";

const ShopFiltering = ({filters, filterState, setFilterState, clearFilters}:ShopFilteringProps) => {
  return (
    <div className="flex-shrink-0 relative">
      <div className="sticky top-28 pt-8 space-y-5">
      <h3>Filters</h3>
      {/* categories */}
      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">Category</h4>
        <hr />
        {filters.categories.map((category) => (
          <label key={category} className="capitalize cursor-pointer">
            <input 
            type="radio" 
            id={"category"}
            name={"category"}
            value={category} 
            onChange={(e) => setFilterState({...filterState, category: e.target.value})} 
            checked={filterState.category === category} 
            className="mr-2"
            />
            <span className="ml-1">{category}</span>
          </label>
        ))}
      </div>
      {/* colors */}
      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">Colors</h4>
        <hr />
        {filters.colors.map((color) => (
          <label key={color} className="capitalize cursor-pointer">
            <input 
            type="radio" 
            id={"color"}
            name={"color"}
            value={color} 
            onChange={(e) => setFilterState({...filterState, color: e.target.value})} 
            checked={filterState.color === color} 
            className="mr-2"
            />
            <span className="ml-1">{color}</span>
          </label>
        ))}
      </div>
      {/* price range */}
      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">Price Range</h4>
        <hr />
        {filters.priceRanges.map((priceRange) => (
          <label key={priceRange.label} className="capitalize cursor-pointer">
            <input 
            type="radio" 
            id={"priceRange"}
            name={"priceRange"}
            value={priceRange.label} 
            onChange={(e) => setFilterState({...filterState, priceRange: {label: e.target.value, min: priceRange.min, max: priceRange.max}})} 
            checked={filterState.priceRange.label === priceRange.label} 
            className="mr-2"
            />
            <span className="ml-1">{priceRange.label}</span>
          </label>
        ))}
      </div>
      <button onClick={clearFilters} className="w-full py-1 px-4 bg-primary text-white rounded">Clear All Filters</button>
      </div>
    </div>
  )
}

export default ShopFiltering