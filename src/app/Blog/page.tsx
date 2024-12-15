import React from 'react'
import { Blogpage } from '../Components/Blogpage'
import { Navbar2 } from '../Components/Navbar2'
import { BlogHeader } from '../Components/BlogHeader'
import { Footer2 } from '../Components/Footer2'
import { RouteFooter } from '../Components/RouteFooter'

const Blog = () => {
  return (
    <div>
        <Navbar2 />
        <BlogHeader />
        <Blogpage />
        <RouteFooter />
        <Footer2 />
    </div>
  )
}
export default Blog