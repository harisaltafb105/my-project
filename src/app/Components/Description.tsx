import React from 'react'
import Image from 'next/image'

export const Description = () => {
  return (
    <div className='mt-10'>
<div className='flex justify-center items-center gap-10 max-md:flex max-md:flex-col max-sm:w[500px] '>
<p className='text-2xl font-normal'>Description</p>
<p className='text-2xl font-normal text-[#9F9F9F]'>Additional Information</p>
<p className='text-2xl font-normal text-[#9F9F9F]'> Reviews [5]</p>

</div>

<div className=' flex flex-col justify-center flex-wrap mt-8 '>
<div className='text-center ml-32 text-[#9F9F9F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore reprehenderit quas necessitatibus ducimus alias commodi sit atque, neque ratione ad maio.</div>
<br/>
<br/>
<div className='text-center ml-11 text-[#9F9F9F]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sunt velit sint aperiam ut pariatur, optio corrupti necessitatibus cupiditate fugit vero et reprehenderit voluptatem nihil quam amet eaque quaerat facere.
Placeat recusandae veniam nobis vitae distinctio ducimus nihil praesentium, sapiente possimus dolore voluptates sed quae nisi eaque at illo optio nulla reiciendis! Iure a esse qui consectetur. Officia, vel quia!</div>
</div>
<div className='flex justify-around mt-11 max-sm:flex max-md:flex-col max-md:justify-center   max-sm:w-[450px] '>
    <div className='w-[600px] max-sm:w-[500px] h-[330px]'>
        <Image src="/Group300.png" alt="img" width={600} height={348} ></Image></div>
    
<div  className='w-[600px] h-[330px] max-sm:w-[500px]'>
<Image src="/Group301.png" alt="img" width={605} height={348}></Image>
</div>

</div>

    </div>
  )
}
