import React from 'react'

export const MyAccount = () => {
  return (
    <div className='flex justify-around mt-24 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center'>
<div>
<h4 className='text-4xl font-semibold max-sm:text-2xl max-md:text-2xl'>Log In</h4><br/>
<h5 className='text-base font-medium  '> Username or email address</h5><br/>
<input className="border-2 h-[50px] w-[500px] max-sm:h-[40px] max-sm:w-[300px]"type="text" id="username" name="username" /><br/><br/>
<h5 className='text-base font-medium max-sm:text-sm'> Your Name</h5><br/>
<input className="border-2 h-[50px] w-[500px] max-sm:h-[40px] max-sm:w-[300px]"type="password" id="password" name="password" /><br/><br/>
<input className="border-2 h-[20px] w-[20px] max-sm:h-[15px] max-sm:w-[15px]"type="checkbox" id="checkbox" name="checkbox" /> Remember me<br/><br/>


<button className='rounded-2xl border-2 py-2 px-8 max-sm:py-1 max-sm:px-6'>Log In</button>

</div>

<div className='w-[500px] max-sm:w-[300px] max-sm:mt-20'>
<h4 className='text-4xl max-sm:text-2xl font-semibold'>Register</h4><br/>
<h5 className='text-base  font-medium'>  Email address</h5><br/>
<input className="border-2 h-[50px] w-[500px] max-sm:h-[40px] max-sm:w-[300px]"type="text" id="username" name="username" /><br/><br/>
<div className='mt-12 max-sm:w-[300px]' >
    <p>A link to set a new password will be sent to your email address</p>
    <p> Your personal data will be used to support your experience throghout the website to manage access to your account.</p>
</div>

<button className='rounded-2xl mt-9 border-2 py-2 px-8 max-sm:py-1 max-sm:px-6'>Register</button>




</div>




    </div>
  )
}
