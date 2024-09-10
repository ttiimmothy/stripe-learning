import Link from "next/link";
import React from 'react'
import bannerImg from "@/assets/header.png"
import Image from "next/image";

const Banner = () => {
  return (
    <div className="section__container header__container">
      <div className="header__content z-30">
        <h4 className="uppercase">Up to 20% Discount on</h4>
        <h1>Girl's Fashion</h1>
        <p>
          Discover the latest trends and express your unique style with our chic collection of girl's fashion. Explore our exclusive range of clothing, accessories, and footwear that will make 
          you stand out from the crowd.
        </p>
        <button className="btn"><Link href="/shop">EXPLORE NOW</Link></button>
      </div>
      <div className="header__image">
        <Image src={bannerImg} alt="banner image" />
      </div>
    </div>
  )
}

export default Banner
