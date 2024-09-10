import React from 'react'
import blogData from "@/data/blogs.json"
import Image from 'next/image'

const Blogs = () => {
  return (
    <section className="section__container blogs__container">
      <h2 className="section__header">Latest from Blog</h2>
      <p className="section__subheader mb-12">Elevate your wardrobe with our freshest style tips, trends, and insprirations on our blog</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {blogData.map((blog) => (
          <div key={blog.id} className="blog__card cursor-pointer hover:scale-105 transition-all duration-300">
            <Image src={blog.imageUrl} alt={blog.title} width={300} height={300}></Image>
            <div className="blog__card__content">
              <h6>{blog.subtitle}</h6>
              <h4>{blog.title}</h4>
              <p>{blog.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blogs
