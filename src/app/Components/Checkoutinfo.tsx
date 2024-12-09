import React from 'react'
import { Navbar2 } from './Navbar2'
import Link from 'next/link'

export const Checkoutinfo = () => {
  return (
    <div className='mt-36'>
      <h2 className='mb-14  ml-11 text-4xl font-semibold'> Billing Details</h2>
    <div className='flex justify-around max-md:flex max-md:flex-col max-md:justify-center max-md:items-center  '>
     
      <div className='w-[650px] max-sm:w-[400px]'>
     
      

<div className='flex gap-2'>

      <h5 className='text-base  font-medium'>  First Name</h5><br/>
      <input className="border-2 h-[50px] w-[140px] max-sm:h-[40px] max-sm:w-[120px]"type="text" id="First Name" name="First Name" /><br/><br/> 
    
      <h5 className='text-base  font-medium'>  Last Name</h5><br/>
      <input className="border-2 h-[50px] w-[140px] max-sm:h-[40px] max-sm:w-[120px]"type="text" id="Last Name" name="Last Name" /><br/><br/>
</div>
 <br/>     
<h5 className='text-base  font-medium'>  Company Name (Optional) </h5><br/>
<input className="border-2 h-[50px] w-[500px] max-sm:h-[40px] max-sm:w-[300px]"type="text" id="CoName " name="CoName" /><br/><br/>

      <h5 className='text-base  font-medium'>  Country / Region </h5><br/>
<input className="border-2 h-[50px] w-[500px] max-sm:h-[40px] max-sm:w-[300px]"type="text" id="Country " name="Country"  placeholder='Srilanka '/><br/><br/>

<h5 className='text-base  font-medium'> Street address</h5><br/>
<input className="border-2 h-[50px] w-[500px] max-sm:h-[40px] max-sm:w-[300px]"type="text" id="Staddress" name="Staddress" /><br/><br/>

<h5 className='text-base  font-medium'> Town / City </h5><br/>
<input className="border-2 h-[50px] w-[500px] max-sm:h-[40px] max-sm:w-[300px]"type="text" id="Town" name="Town" /><br/><br/>

<h5 className='text-base  font-medium'>  Province</h5><br/>
<input className="border-2 h-[50px] w-[500px] max-sm:h-[40px] max-sm:w-[300px]"type="text" id="Province" name="Province" placeholder='Western Province' /><br/><br/>

<h5 className='text-base  font-medium'>  Zip Code</h5><br/>
<input className="border-2 h-[50px] w-[500px] max-sm:h-[40px] max-sm:w-[300px]"type="text" id="Zip" name="Zip" /><br/><br/>

<h5 className='text-base  font-medium'> Phone</h5><br/>
<input className="border-2 h-[50px] w-[500px] max-sm:h-[40px] max-sm:w-[300px]"type="text" id="Phone" name="Phone" /><br/><br/>

<h5 className='text-base  font-medium'>  Email address</h5><br/>
<input className="border-2 h-[50px] w-[500px] max-sm:h-[40px] max-sm:w-[300px]"type="text" id="Email" name="Email" /><br/><br/>


<br/>
<input className="border-2 h-[50px] w-[500px] max-sm:h-[40px] max-sm:w-[300px]"type="text" id="Addinfo" name="Addinfo" placeholder='Additional Information'/><br/><br/>


      </div>


<div className='[w-500px] max-md:mt-9 max-sm:w-[400px]'>

<div className='flex justify-between'>
<div className='flex flex-col gap-4'>
  <p className='text-2xl font-medium'>Product</p>
  <p>Asgaard sofa</p>
  <p>Subtotal</p>
  <p>Total</p>
</div>
<div className='flex flex-col gap-4'>
<p className='text-2xl font-medium'>Subtotal</p>
<p>Rs.250,000</p>
<p>Rs.250,000</p>
<p>Rs.250,000</p>
</div>
</div>

<div>
<p className='mt-5 font-medium'>Direct Bank Transfer</p>
<div className='w-[500px] mt-4'><p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure veniam dicta accusamus nesciunt harum sapiente nam error sequi.</p></div>
<input className="border-2 h-[10px] mt-6 w-[10px] max-sm:h-[10px] max-sm:w-[10px]"type="radio" id="Transfer" name="Transfer" /> Direct Bank Transfer<br/><br/>
<input className="border-2 h-[10px] w-[10px] max-sm:h-[10px] max-sm:w-[10px]"type="radio" id="Transfer" name="Transfer" /> Cash on Delivery<br/><br/>
<div className='w-[500px] mt-4 font-medium'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aspernatur impedit consequatur illo natus nam tempore esse iusto maiores distinctio.</p></div>
<div className='flex justify-center items-center font-medium'><Link href="/Account"><button className='rounded-2xl mt-9 border-2 py-3 px-16 max-sm:py-1 max-sm:px-6'>Place Order</button></Link></div>
</div>

</div>



    </div>
    </div>
  )
}
