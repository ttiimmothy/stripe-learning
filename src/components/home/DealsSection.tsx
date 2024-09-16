import React from 'react'
import dealsImg from "@/assets/deals.png"
import Image from "next/image"

const DealsSection = () => {
  return (
    <section className="section__container deals__container">
      <div className="deals__image"><Image src={dealsImg} alt="deals"></Image></div>
      <div className="deals__content">
        <h5>Get Up To 20% Discount</h5>
        <h4>Deals of This Month</h4>
        <p>Our Women&apos;s Fashion Deals of the Month are here to make your styles dreams a reality without breaking the bank. Discover a curated collection of exquisite clothing,
          accessories, and footwear, all designed to elevate your wardrobe and make you stand out in the crowd.
        </p>
        <div className="deals__countdown flex-wrap">
          <div className="deals__countdown__card">
            <h4>14</h4>
            <p>Days</p>
          </div>
          <div className="deals__countdown__card">
            <h4>20</h4>
            <p>Hours</p>
          </div>
          <div className="deals__countdown__card">
            <h4>15</h4>
            <p>Mins</p>
          </div>
          <div className="deals__countdown__card">
            <h4>05</h4>
            <p>Secs</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DealsSection
