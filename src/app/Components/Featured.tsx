import React from 'react';
import Image from 'next/image';

export const Featured = () => {
  return (
    <div>
<div className='flex max-md:flex-col bg-[#FBEBB5] '>

<div className='sm:mt-[200px] md:mt-[260px] lg:mt-[320px] sm:ml-[100px] ml-[202px] max-sm:ml-[30px]'>{/*left side*/}
<h3 className='text-[35px] max-sm:text-[25px] md:text-[40px] xl:text-[60px] lg:text-[50px]  font-medium'>Rocket Single Seater</h3>
<button className='mt-7 lg:mt-11 max-sm:text-[18px] sm:text-base lg:text-4xl text-2xl font-medium'> Shop Now </button>
</div>


<div className='mr-6'>{/*right side */}
    <Image src="/Rocketseat.png" alt="Img" width={853} height={1000}></Image>
</div>


</div>


    </div>
  )
}
