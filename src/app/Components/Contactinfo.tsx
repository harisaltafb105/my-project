import React from 'react'
import Image from 'next/image'

export const Contactinfo = () => {
  return (
    <div className='mt-16'>
        <div className='flex justify-around items-center max-med:flex max-md:flex-col '> {/*main div*/}
<div> {/*left div*/}
<div>
    <Image src="/Vector02.png" alt="img" width={22} height={28}></Image>
    <h5 className='text-2xl max-md:text-xl font-medium'>Address</h5>
    <p>236 5th SE Avenue NewYork, United States</p>
</div>
<div>
<Image src="/Vector03.png" alt="img" width={22} height={28}></Image>
<h5 className='text-2xl max-md:text-xl font-medium'>Phone</h5>
<p>Mobile +(84)546-6789</p>
<p>Hotline +(84)546-6789</p>

</div>
<div>
    <Image src="/Vector04.png" alt="img" width={22} height={28}></Image>
    <h5 className='text-2xl max-md:text-xl font-medium'>Working Time</h5>
    <p>Monday-Friday: 9:00 - 22:00</p>
    <p>Saturday-Sunday: 9:00 - 22:00</p>
</div>

</div>


<div className='mt-11'>{/*right div*/}

<h5 className='text-base font-medium'> Your Name</h5>
<input className="border-2 h-[50px] w-[500px] max-sm:h-[30px] max-sm:w-[250px]"type="text" id="username" name="username" placeholder='Abc'/><br/><br/>
<h5 className='text-base max-sm:text-sm font-medium'> Email Address</h5>
<input className="border-2 h-[50px] w-[500px] max-sm:h-[30px] max-sm:w-[250px]"type="text" id="EmailAddress" name="EmailAddr" placeholder='abc@dec.com'/><br/><br/>
<h5 className='text-base max-sm:text-sm font-medium'> Subject</h5>
<input className="border-2 h-[50px] w-[500px] max-sm:h-[30px] max-sm:w-[250px]"type="text" id="Subject" name="Subject" placeholder='This is an optional'/><br/><br/>
<h5 className='text-base max-sm:text-sm font-medium'> Message</h5>
<input className="border-2 h-[100px] w-[500px] max-sm:h-[30px] max-sm:w-[250px]"type="text" id="Message" name="Message" placeholder='Hi I would like to ask about'/><br/><br/>
<button className='rounded-2xl border-2 py-2 px-8 max-sm:py-1 max-sm:px-6'>Submit</button>






</div>



















        </div>
    </div>
  )
}
