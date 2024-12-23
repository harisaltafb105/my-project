import React from 'react'
import Image from 'next/image'

export const RelatedProd = () => {
  return (
    <div className='mt-8'>
        
            <h1 className='text-4xl font-medium text-center'>Related Products </h1>
        

<div className='flex justify-center max-lg:flex-wrap max-lg:gap-20 gap-3 mt-6 max-md:flex-col max-md:items-center '>
<div className='w-[287px] h-[397px]'>
<Image src="/Table4.png" alt="img" width={287} height={287}></Image>
<p className='ml-7'> Trenton modular sofa_3 </p>
<p className='ml-7 text-[20px] font-medium'> Rs. 25,000.00</p>

</div>
<div className='w-[287px] h-[397px]  mt-11'>
<Image src="/Table1.png" alt="img" width={287} height={287}></Image>
<p className='mt-9'> Granite dining table with dining chair </p>
<p className='text-[20px] font-medium'> Rs. 25,000.00</p>
</div>

<div className='w-[287px] h-[397px]'>
<Image src="/Table2.png" alt="img" width={287} height={287}></Image>
<p> Outdoor bar table and stool </p>
<p className='text-[20px] font-medium'> Rs. 25,000.00</p>

</div>
<div className='w-[287px] h-[397px]'>
<Image src="/Table3.png" alt="img" width={287} height={287}></Image>
<p> Plain console with teak mirror </p>
<p className='text-[20px] font-medium'> Rs. 25,000.00</p>

</div>
</div>

<div className='flex flex-col gap-4 justify-center items-center text-xl h- font-medium'>
<button> View More</button>
<Image src="/Line110.png" alt="img" height={0} width={115} />
    
    </div>
    </div>
    
    
  )
}
