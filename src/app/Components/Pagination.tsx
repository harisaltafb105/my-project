import React from 'react'
import client from '../../../sanityClient'

export const Pagination = async() => {
 
    const featuredProducts = await client.fetch(`*[_type == 'product' && isFeaturedProduct == true] {
  _id,
      name,
      imagePath,
      description,
      price,
      category,
      stockLevel,
      isFeaturedProduct
}`)
        
     
 
 
 
    return (
    <div>
        
        
        </div>

  )
}
