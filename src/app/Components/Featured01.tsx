import React from 'react';
import Image from 'next/image';

export const Featured01 = () => {
  return (
    <div className=' bg-[#FAF4F4] '>
        
        <div className='flex p-9 gap-56 max-md:flex-col max-md:flex min-w-full '> {/*main div*/}
        
        <div >
<div className='max-md:w-[400px] max-md:h-[400px] '>
<Image src="/Desk.png" alt="Img" width={580} height={550}></Image>
</div>
<div className=' ml-[150px] '>
<p className='text-4xl max-md:text-3xl font-medium '>Side table</p>
<button className='text-xl  font-medium  mt-9'> View More</button>
</div>
        </div>

<div>
<div className='max-md:w-[400px] max-md:h-[400px]'>
<Image src="/Sofa.png" alt="img" width={605} height={562}></Image>
</div>
    <div className=''>
    <p className='text-4xl max-md:text-3xl font-medium  ml-[160px] '>Side table</p>
<button className='text-xl  font-medium  ml-[160px]  mt-9'> View More</button>
</div>
</div>




</div>
    </div>
  )
}
