import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Cartinfo = () => {
  return (
    <div className='mt-32 max-md:w-[2/4] max-sm:w-[1/4] flex justify-around items-center max-md:flex max-md:flex-col max-md:justify-center max-md:items-center ' > {/*Main Parent div*/}

{/*left div for mobiles and tablets*/}

<div className='w-[400px] flex flex-col justify-around  items-center md:hidden max-md:block '> {/*left div*/}

<div className='flex justify-center items-center mb-6'>
<Image src="/Group0137.png" alt="img" width={106} height={106}></Image>
</div>
<div >
<h3 className='bg-[#FFF9E5] text-base font-medium text-center leading-[55px]'> Product </h3>
<p className='text-center text-base leading-[55px] text-[#9F9F9F]'> Asgaard sofa</p>
</div>
<div>
<h3 className='bg-[#FFF9E5] text-base font-medium text-center leading-[55px]'> Price </h3>
<p className='text-center text-base leading-[55px] text-[#9F9F9F]'> Rs. 250,000.00</p> 
</div>
<div>
<h3 className='bg-[#FFF9E5] text-base font-medium text-center leading-[55px]'> Quantity </h3>
<p className='text-center text-base leading-[55px]'> 1 </p>
</div>
<div>
  <h3 className='bg-[#FFF9E5] text-base font-medium text-center leading-[55px]'> Subtotal</h3>
  <p className='text-center text-base leading-[55px]'> Rs. 250,000.00</p>
</div>

</div>

{/*left div for full screen*/}
<div className='md:block max-md:hidden '> {/*div left*/}
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






<div className='flex flex-col max-md:mt-14 gap-11 bg-[#FFF9E5] h-[320px] w-[380px] p-8'> {/*div right*/}
<h4 className='text-3xl  font-semibold text-center'>Cart Totals</h4>
<div className='flex justify-around'><p className='text-[16px] font-medium '> Subtotal</p>  <p className='text-[#9F9F9F] font-normal text-[16px]'>Rs.250,000.00 </p></div>
<div className='flex justify-around' ><p className='text-[16px] font-medium'>  Total </p>        <p className='text-[#B88E2F] font-medium text-xl leading-[30px]'>Rs.250,000.00  </p></div>
<div className='flex justify-center'><Link href="/Checkout"><button className='rounded-2xl border border-black py-2 px-4 '>Check out</button></Link></div>

</div>

    
    
    
    
    </div>
  )
}
