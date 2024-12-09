import React from 'react';
import Link from 'next/link';

export const Footer2 = () => {
  return (
    <div className='mb-9'>
    <div className='flex mt-32 justify-around max-md:flex max-md:flex-col max-md:gap-2 max-md:items-center  '>
<div className='w-[250px] h-[72px] font-medium'>
    <p className='text-[#9F9F9F]'>400 University Drive Suite 200 Coral Gables FL 33134 USA</p>
</div>

<div className='flex flex-col gap-6 w-[68px] h-[312px] text-base font-medium'> 
<h6 className='text-[#9F9F9F]'>Links</h6>
<Link  href="/"> Home</Link>
<Link href="/Shop"> Shop</Link>
<Link href="/About"> About</Link>
<Link href="/Contact"> Contact</Link>
</div>

<div className='w-[120px] h-[242px] max-md:ml-8 font-medium flex flex-col gap-5'>
    <h6 className='text-[#9F9F9F]'>Help</h6>
    <a>Payment Options</a>
    <a>Returns</a>
    <a>Privacy Policies</a>
</div>
<div className='w-[266px] h-[101px] flex font-medium '>
    <div className='flex flex-col gap-6'>
    <h6 className='text-[#9F9F9F]'>Newsletters</h6>
    <p>Enter Your Email Address</p>
    </div>
    <button className='mt-3 mr-5'><u>SUBSCRIBE</u></button>
</div>


    </div>
    
    <p className='text-base ml-[50px] max-md:mt-3 max-md:mb-3'>2022 Meubel House. All rights reverved</p>
    </div>
  )
}
