import useOnClickOutside from "@/lib/hooks/useOnClickOutside";
import {useFetchProduct} from "@/lib/services/product/useFetchProducts";
import {usePostReview} from "@/lib/services/review/usePostReview";
import {RootState} from "@/lib/store";
import {useParams} from "next/navigation";
import React, { useRef, useState } from 'react'
import {useSelector} from "react-redux";

const ReviewModal = ({modalOpen, handleClose}: {modalOpen: boolean, handleClose: () => void}) => {
  const [rating, setRating] = useState(0)
  const {productId} = useParams<{productId: string}>()
  const user = useSelector((state: RootState) => state.auth)
  const {refetch} = useFetchProduct(productId, {skip: !productId})
  const {postReview} = usePostReview()
  const [comment, setComment] = useState("")
  const ref = useRef(null)
  useOnClickOutside(ref, handleClose)
  const handleRating = (star: number) => {
    setRating(star)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newComment = {
      comment,
      rating,
      userId: user.user?._id,
      productId
    }
    try {
      await postReview({
        variables: { input: newComment }
      })
      alert("Review posted successfully")
      setComment("")
      setRating(0)
      refetch()
    } catch (error) {
      alert(error.message)
    }
    handleClose()
  }
  return (
    <div className={`fixed z-55 inset-0 bg-black/90 bg-opacity-80 flex items-center justify-center px-2 ${modalOpen ? "block" : "hidden"}`}>
      <div ref={ref} className="bg-white p-6 rounded-md shadow-lg w-96 z-60">
        <h2 className="text-lg font-medium mb-4">Post a Review</h2>
          <div className="flex items-center mb-4">
            {
              [1,2,3,4,5].map((star) => (
                <span className="cursor-pointer text-yellow-500 text-xl" key={star} onClick={() => handleRating(star)}>{rating >= star ? <i className="ri-star-fill"></i> : <i className="ri-star-line"></i>}</span>
              ))
            }
          </div>
          <textarea className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none" placeholder="Write your review here" value={comment} onChange={(e) => setComment(e.target.value)} rows={4}></textarea>
          <div className="flex justify-end gap-2">
            <button className="bg-gray-300 px-4 py-2 rounded-md" onClick={handleClose}>Cancel</button>
            <button className="bg-primary text-white px-4 py-2 rounded-md" onClick={handleSubmit}>Submit</button>
          </div>
      </div>
    </div>
  )
}

export default ReviewModal
