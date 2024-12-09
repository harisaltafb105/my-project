import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Cartinfo = () => {
  return (
    <div className='mt-32 max-md:w-[2/4] max-sm:w-[1/4] flex justify-around items-center max-md:flex max-md:flex-col max-md:justify-center max-md:items-center ' >

<div className=' '> {/*div1*/}
<div className='w-[750px] max-sm:w-[600px] h-[55px] bg-[#FFF9E5] flex items-center  '>
    <ul className='flex gap-20 max-sm:gap-11 max-sm:ml-36 ml-36 max-sm:justify-center max-sm:items-center  text-base  font-medium'>
        <li>Product</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Subtotal</li>
    </ul>
    </div>


<div className='flex gap-10 max-sm:gap-1 max-sm:ml-32 max-md:ml-28 max-lg:ml-24 max-sm:w-[500px] w-[750px] '>{/*div2*/}
  <div className='mt-14 max-sm:mt-10 max-sm:w-[60px] max-sm:h-[80px]'>  <Image src="/Group137.png" alt="img" height={106} width={106}></Image></div>


<p className='mt-24 max-sm:mt-14 text-base max-sm:text-sm font-normal text-[#9F9F9F]'>Asgaard Sofa</p>
<p className='mt-24 max-sm:mt-14 text-base max-sm:text-sm font-normal text-[#9F9F9F]'>Rs. 250,000.00</p>
<p className='mt-24 max-sm:mt-14 max-sm:text-sm border-2 h-[32px] w-[32px] text-center'>1</p>
<p className='mt-24 max-sm:mt-14 max-sm:text-sm'>Rs. 250,000.00</p>

</div>

</div>


<div className='flex flex-col  gap-11 bg-[#FFF9E5] h-[320px] w-[390px] p-8'>
<h4 className='text-3xl  font-semibold text-center'>Cart Totals</h4>
<div className='flex justify-around'><p className='font-medium'> Subtotal</p>  <p>Rs.250,000.00 </p></div>
<div className='flex justify-around' ><p className='font-medium'>  Total </p>        <p>Rs.250,000.00  </p></div>
<Link href="/Checkout"><button className='rounded-2xl border border-black py-2 px-4 '>Check out</button></Link>

</div>

    
    
    
    
    </div>
  )
}
