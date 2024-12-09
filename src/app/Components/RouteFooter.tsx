import React from 'react'

 export const RouteFooter = () => {
  return (
    <div className='flex justify-around items-center w-full max-md:flex-col max-md:gap-7 mt-20 mb-5 bg-[#FAF4F4] max-md:h-[310px] h-[260px] p-4'>
<div className='w-[250px] h-[72px] font-medium'>
    <h3 className='text-3xl max-md:xl font-medium'> Free Delivery </h3>
    <p className='text-[#9F9F9F]'>For all orders over $50, consectetur adiping cicim elit</p>
</div>
<div className='w-[250px] h-[72px] font-medium'>
    <h3 className='text-3xl max-md:xl font-medium'> 90 Days Return </h3>
    <p className='text-[#9F9F9F]'>If goods have problem, consectetur adiping cicim elit</p>
</div>
<div className='w-[250px] h-[72px] font-medium'>
    <h3 className='text-3xl max-md:xl font-medium'> Secure Payment</h3>
    <p className='text-[#9F9F9F]'>100% secure payment, consectetur adiping cicim elit</p>
</div>  
    
    
    </div>
  )
}
