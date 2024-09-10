import React from 'react'

const Banner = ({title}:{title:string}) => {
  return (
    <section className="section__container bg-primary-light">
      <h2 className="section__header capitalize">{title}</h2>
      <p className="section__subheader">
        {title === "Shop Page" ? "Discover the Hottset Picks: Elevate Your Style with Our Curated Collection of Trending Women's Fashion Products." : 
        "Browse a diverse range of categories, from chic dresses to versatile accessories. Elevated your style today!"}
      </p>
    </section>
  )
}

export default Banner
