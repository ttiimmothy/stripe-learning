import React from 'react'

const RatingStars = ({ rating, className }: { rating: number, className?: string }) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    stars.push(<span key={i} className={`ri-star-${i <= rating ? 'fill' : 'line'}`}></span>)
  }
  return (
    <div className={`product__rating ${className}`}>
      {stars}
    </div>
  )
}

export default RatingStars
