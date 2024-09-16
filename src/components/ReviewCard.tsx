import {Review, ReviewsType} from "@/generated/graphql/graphql";
import React, { useEffect, useState } from 'react'
import CommentorImg from "@/assets/avatar.png"
import Image from "next/image"
import {formatDate} from "@/utils/formatDate";
import RatingStars from "./lib/RatingStars";
import ReviewModal from "@/components/ReviewModal";
import {useParams} from "next/navigation";

const ReviewCard = ({productReviews}: {productReviews: ReviewsType[]}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [reviews, setReviews] = useState(productReviews || []);
  const reviews = productReviews || [];
  const handleOpenReviewModal = () => {
    setIsModalOpen(true);
  }
  const handleCloseReviewModal = () => {
    setIsModalOpen(false);
  }
  const {productId} = useParams<{productId: string}>()

  return (
    <div className="my-6 bg-white p-8">
      <div>
        {reviews.length > 0 ? <div><h3 className="font-medium">All comments...</h3><div>{reviews.map((review) => (
          <div key={review._id} className="mt-4">
            <div className="flex items-center gap-4">
            <div className="shrink-0 flex items-center gap-4">
            <Image src={CommentorImg} alt="commentor" width={50} height={50} className="size-14" />
            <div className="space-y-1">
              <p className="text-lg font-medium underline capitalize underline-offset-4 text-blue-400">{review.userId.username}</p>
              <p className="text-[12px] italic text-gray-400">{formatDate(review.createdAt)}</p>
              <RatingStars rating={review.rating} />
            </div>
            </div>
            <div className="text-gray-600 border p-8 w-full">
              <p className="md:w-4/5">{review.comment}</p>
            </div>
            </div>
          </div>
        ))}</div></div> : <div>No reviews yet</div>}
      </div>
      <div className="mt-8"><button onClick={handleOpenReviewModal} className="bg-primary text-white px-6 py-3 rounded-md">Add a Review</button></div>
      {isModalOpen && <ReviewModal modalOpen={isModalOpen} handleClose={handleCloseReviewModal} />}
    </div>
  )
}

export default ReviewCard
