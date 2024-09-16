import React from 'react'

const Pagination = ({currentPage, totalPages, handlePageChange}: {currentPage: number, totalPages: number, handlePageChange: (pageNumber: number) => void}) => {
  return (
    <div className="mt-6 flex justify-center">
      <button className={"bg-gray-300 text-gray-700 px-4 py-2 mr-2 rounded-md"} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
      {
        [...Array(totalPages)].map((_, index) => (
          <button key={index} className={`size-10 flex justify-center items-center mx-1 rounded-md ${index + 1 === currentPage ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
          onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
        ))
      }
      <button className={"bg-gray-300 text-gray-700 px-4 py-2 ml-2 rounded-md"} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
    </div>
  )
}

export default Pagination
