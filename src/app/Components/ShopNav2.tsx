import React from 'react'
import Image from 'next/image'

export const ShopNav2 = () => {
  return (
    
<div className=' h-[100px]  bg-[#FAF4F4] flex justify-around items-center mt-7 max-md:flex-col max-md:gap-3 max-md:items-center  max-md:w-[700px] max-sm:w-[450px]'>

<div className='flex gap-4 '>
<div className='w-[100px] h-[20px]  max-md:w-[60px] max-md:h-[12px]'><Image src="/Group57.png" alt="img" width={100} height={20}></Image></div>
<div className='w-[28px] h-[28px] mt-1 max-md:w-[15px] max-md:h-[12px]'><Image src="/Vector4.png" alt="img" width={28} height={28}></Image></div>
<div className='w-[28px] h-[28px] mt-1 max-md:w-[15px] max-md:h-[12px]'><Image src="/Vector3.png" alt="img" width={28} height={28}></Image></div>
{/* <div className='w-[5px] h-[3px] flex items-center'><Image src="/line5.png" alt="img" width={5} height={2}></Image></div> */}
<div className=' max-sm:text-sm mt-1'><p > showing 1-16 of 32 results</p></div>
 </div>  
   
   <div className='flex gap-4'>
<div className='flex items-center h-[50px]'><p>show</p></div>
<div className='w-[50px] h-[50px] max-md:w-[35px] max-md:h-[30px]'><Image src="/Group58.png" alt="img" width={50} height={50}></Image></div>
<div className='flex items-center'><p>sort by</p></div>
<div className='w-[170px] h-[50px] max-md:w-[110px] max-md:h-[30px]'><Image src="/Group59.png" alt="img" width={170} height={50}></Image></div>

   </div>
   


   </div>
   
   
    
    

  )
}
