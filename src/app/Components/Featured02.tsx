import React from 'react';
import Image from 'next/image';

export const Featured02 = () => {
  return (
    <div className='max-md:1/4  lg:h-[777px]  mt-20  '>
<div className='flex flex-col justify-center items-center gap-7 p-4 '>
<div className='w-[773px] h-[24px] ml-[450px]'><h1 className='text-4xl max-md:text-3xl font-medium'> Top Picks For You </h1></div>
<p className='text-base font-medium text-center'> Find a bright ideal to suite your taste with our graet selection of suspension, floor and table lights</p>
</div>


<div className='flex justify-center max-lg:flex-wrap max-lg:gap-20 gap-3 mt-6 max-md:flex-col max-md:items-center '>
<div className='w-[287px] h-[397px]'>
<Image src="/Table4.png" alt="img" width={287} height={287}></Image>
<p className='ml-7'> Trenton modular sofa_3 </p>
<p className='ml-7'> Rs. 25,000.00</p>

</div>
<div className='w-[287px] h-[397px]  mt-11'>
<Image src="/Table1.png" alt="img" width={287} height={287}></Image>
<p className='mt-9'> Granite dining table with dining chair </p>
<p> Rs. 25,000.00</p>
</div>

<div className='w-[287px] h-[397px]'>
<Image src="/Table2.png" alt="img" width={287} height={287}></Image>
<p> Outdoor bar table and stool </p>
<p> Rs. 25,000.00</p>

</div>
<div className='w-[287px] h-[397px]'>
<Image src="/Table3.png" alt="img" width={287} height={287}></Image>
<p> Plain console with teak mirror </p>
<p> Rs. 25,000.00</p>

</div>






</div>
<div className='flex justify-center text-xl font-medium'><button> View More</button></div>
    </div>
  )
}
