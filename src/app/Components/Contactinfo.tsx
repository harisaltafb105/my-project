import React from 'react'
import Image from 'next/image'

export const Contactinfo = () => {
  return (
    <div className='mt-[110px]'>
        <div className='flex justify-around items-center max-med:flex max-md:flex-col '> {/*main div*/}
<div className='flex flex-col gap-14 h-[510px]'> {/*left div*/}
<div>
    <div className='flex gap-4 h-[26px]'><Image src="/Vector02.png" alt="img" width={22} height={28}></Image>
    <h5 className='text-2xl max-md:text-xl font-medium'>Address</h5></div>
    <p className='mt-2 ml-10'>236 5th SE Avenue NewYork, United States</p>
</div>
<div>
<div className='flex gap-4 h-[26px]'><Image src="/Vector03.png" alt="img" width={22} height={28}></Image>
<h5 className='text-2xl max-md:text-xl font-medium'>Phone</h5></div>
<p className='mt-2 ml-10'>Mobile +(84)546-6789</p>
<p className='ml-10'>Hotline +(84)546-6789</p>

</div>
<div>
    <div className='flex gap-4 h-[26px]'><Image src="/Vector04.png" alt="img" width={22} height={28}></Image>
    <h5 className='text-2xl max-md:text-xl font-medium'>Working Time</h5></div>
    <p className='mt-2 ml-10'>Monday-Friday: 9:00 - 22:00</p>
    <p className='ml-10'>Saturday-Sunday: 9:00 - 22:00</p>
</div>

</div>


<div>{/*right div*/}

<h5 className='text-base font-medium mb-2'> Your Name</h5>
<input className="border-2 h-[40px] p-7  w-[500px] max-sm:h-[30px] max-sm:w-[250px] rounded-lg"type="text" id="username" name="username" placeholder='Abc'/><br/><br/>
<h5 className='text-base max-sm:text-sm font-medium mb-2'> Email Address</h5>
<input className="border-2 h-[40px] p-7 w-[500px] max-sm:h-[30px] max-sm:w-[250px] rounded-lg"type="text" id="EmailAddress" name="EmailAddr" placeholder='abc@dec.com'/><br/><br/>
<h5 className='text-base max-sm:text-sm font-medium mb-2'> Subject</h5>
<input className="border-2 h-[40px] p-7 w-[500px] max-sm:h-[30px] max-sm:w-[250px] rounded-lg"type="text" id="Subject" name="Subject" placeholder='This is an optional'/><br/><br/>
<h5 className='text-base max-sm:text-sm font-medium mb-2'> Message</h5>
<input className="border-2 h-[100px] p-7 w-[500px] max-sm:h-[30px] mb-2 max-sm:w-[250px] rounded-lg"type="text" id="Message" name="Message" placeholder='Hi I would like to ask about'/><br/><br/>
<button className='rounded-2xl border-2 py-1 px-14 max-sm:py-1 max-sm:px-6'>Submit</button>






</div>



















        </div>
    </div>
  )
}
