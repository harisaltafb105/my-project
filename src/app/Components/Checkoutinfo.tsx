import React from 'react'
import { Navbar2 } from './Navbar2'
import Link from 'next/link'
import Image from 'next/image'

export const Checkoutinfo = () => {
  return (
    <div className='mt-36'>
      <h2 className='mb-14 ml-[140px] max-lg:hidden text-4xl font-semibold'> Billing details</h2>
    
    
    <div className='flex justify-center gap-24 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center  '> {/*parent div */}
     
      <div className='w-[450px] max-sm:w-[400px]'> {/*first div */}
     
      <h2 className=' lg:hidden font-semibold mb-12 text-3xl'> Billing details</h2>  

<div className='flex gap-9'>

      <div className='flex flex-col'><h5 className='text-base  font-medium'>  First Name</h5><br/>
      <input className="border-2 rounded-lg h-[50px] p-2 w-[200px] max-sm:h-[40px] max-sm:w-[120px]"type="text" id="First Name" name="First Name" /><br/><br/> </div>
    
      <div className='flex flex-col'><h5 className='text-base  font-medium'>  Last Name</h5><br/>
      <input className="border-2 rounded-lg h-[50px] p-2 w-[200px] max-sm:h-[40px] max-sm:w-[120px]"type="text" id="Last Name" name="Last Name" /><br/><br/></div>
</div>
 <br/>     
<h5 className='text-base  font-medium'>  Company Name (Optional) </h5><br/>
<input className="border-2 rounded-lg h-[50px] p-2 w-[450px] max-sm:h-[40px] max-sm:w-[300px]"type="text" id="CoName " name="CoName" /><br/><br/>

      <h5 className='text-base  font-medium'>  Country / Region </h5><br/>
<input className="border-2 rounded-lg h-[50px] p-2 w-[450px] max-sm:h-[40px] max-sm:w-[300px]"type="text" id="Country " name="Country"  placeholder='Srilanka '/><br/><br/>

<h5 className='text-base  font-medium'> Street address</h5><br/>
<input className="border-2 rounded-lg h-[50px] p-2 w-[450px] max-sm:h-[40px] max-sm:w-[300px]"type="text" id="Staddress" name="Staddress" /><br/><br/>

<h5 className='text-base  font-medium'> Town / City </h5><br/>
<input className="border-2 rounded-lg h-[50px] p-2 w-[440px] max-sm:h-[40px] max-sm:w-[300px]"type="text" id="Town" name="Town" /><br/><br/>

<h5 className='text-base  font-medium'>  Province</h5><br/>
<input className="border-2 rounded-lg h-[50px] p-2 w-[440px] max-sm:h-[40px] max-sm:w-[300px]"type="text" id="Province" name="Province" placeholder='Western Province' /><br/><br/>

<h5 className='text-base  font-medium'>  Zip Code</h5><br/>
<input className="border-2 rounded-lg h-[50px] p-2 w-[440px] max-sm:h-[40px] max-sm:w-[300px]"type="text" id="Zip" name="Zip" /><br/><br/>

<h5 className='text-base  font-medium'> Phone</h5><br/>
<input className="border-2 rounded-lg h-[50px] w-[440px] max-sm:h-[40px] max-sm:w-[300px]"type="text" id="Phone" name="Phone" /><br/><br/>

<h5 className='text-base  font-medium'>  Email address</h5><br/>
<input className="border-2 rounded-lg p-2 h-[50px] w-[450px] max-sm:h-[40px] max-sm:w-[300px]"type="text" id="Email" name="Email" /><br/><br/>


<br/>
<input className="border-2 rounded-lg p-2 h-[50px] w-[440px] max-sm:h-[40px] max-sm:w-[300px]"type="text" id="Addinfo" name="Addinfo" placeholder='Additional Information'/><br/><br/>


      </div>


<div className='[w-530px] max-md:mt-9 max-sm:w-[400px]'> {/*second div*/}

<div className='flex justify-between'>
<div className='flex flex-col gap-4'>
  <p className='text-2xl font-medium'>Product</p>
  <p className='text-[#9F9F9F]'>Asgaard sofa</p>
  <p className='text-base font-normal'>Subtotal</p>
</div>
<div className='flex flex-col gap-4'>
<p className='text-2xl font-medium'>Subtotal</p>
<p>Rs.250,000.00</p>
<p>Rs.250,000.00</p>
</div>
</div>

<div className='flex gap-[315px] max-sm:gap-[220px] mt-[16px]'>
<p className='text-base font-normal'>Total</p>
<p className='text-[#B88E2F] text-2xl font-bold max-sm:text-xl'>Rs.250,000.00</p>
</div>
<Image className="mt-5 mb-4 "src="/Line010.png" alt="img" width={527} height={771}></Image>

<div>
<div className='flex gap-2'> <div className='rounded-full bg-black h-[14px] w-[14px] mt-[25px]'></div><p className='mt-5 font-medium'>Direct Bank Transfer</p></div>
<div className='w-[530px] max-sm:w-[440px] max-sm:h-[70px]  mt-4'><p className='text-[#9F9F9F] max-sm:text-sm'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure veniam dicta accusamus nesciunt harum sapiente nam error sequi. nesciunt harum sapiente nam error sequi. nesciunt harum sapiente nam error sequi.</p></div>
<div className='text-[#9F9F9F]'><input className="border-2 p-2 *:h-[10px] mt-6 max-sm:mt-9 w-[10px] max-sm:h-[10px] max-sm:w-[10px]"type="radio" id="Transfer" name="Transfer" /> Direct Bank Transfer</div><br/>
<div className='text-[#9F9F9F]'><input className="border-2 p-2 h-[10px] w-[10px] max-sm:h-[10px] max-sm:w-[10px]"type="radio" id="Transfer" name="Transfer" /> Cash on Delivery</div><br/>
<div className='w-[530px] max-sm:w-[440px] max-sm:h-[70px]  mt-4 font-medium'><p className='max-sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aspernatur impedit consequatur illo natus nam tempore esse iusto maiores distinctio. nesciunt harum sapiente nam error sequi. nesciunt harum sapiente nam error sequi.</p></div>
<div className='flex justify-center items-center font-medium'><Link href="/Account"><button className='rounded-2xl mt-9 border-2 py-3 px-16 max-sm:py-1 max-sm:px-6'>Place Order</button></Link></div>
</div>

</div>



    </div>
    </div>
  )
}
