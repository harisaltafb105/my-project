// import React from 'react'

// export const Footer1 = () => {
//   return (
//     <div className=' h-[202] flex flex-col gap-11 justify-center items-center mt-60' >

// <div className='flex flex-col gap-6 justify-center items-center'><h4 className='font-bold max-sm:text-3xl max-md:text-4xl text-5xl'> Our Instagram</h4>
// <p className='text-xl max-md:text-lg font-normal'> Follow our store on Instagram</p></div>

// <button className='rounded-full px-8 box shadow-[#FAF4F4] py-2 bg-[#FAF4F4] border-2 text-xl max-md:text-lg font-normal'> Follow us </button>


//     </div>
//   )
// }
import React from 'react'

export const Footer1 = () => {
  return (
    <div 
      className='flex flex-col gap-11 justify-center items-center h-[450px] mt-20 bg-cover bg-center'
      style={{ backgroundImage: "url('/Rectangle177.png')" }}
    >
      <div className='flex flex-col gap-6 justify-center items-center'>
        <h4 className='font-bold max-sm:text-3xl max-md:text-4xl text-5xl '>Our Instagram</h4>
        <p className='text-xl max-md:text-lg font-normal'>Follow our store on Instagram</p>
      </div>

      <button className='rounded-full px-8 shadow-lg py-2 bg-[#FAF4F4] border-2 text-xl max-md:text-lg font-normal '>
        Follow Us
      </button>
    </div>
  )
}
