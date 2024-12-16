import React from 'react';
import Image from 'next/image';

export const Featured = () => {
  return (
    <div>
<div className='flex max-md:flex-col bg-[#FBEBB5] '>

<div className='sm:mt-[200px] md:mt-[260px] lg:mt-[330px] sm:ml-[100px] ml-[202px] max-sm:ml-[30px]'>{/*left side*/}
<h3 className='text-[35px] max-sm:text-[25px] md:text-[40px] xl:text-[54px] lg:text-[42px]  font-medium'>Rocket Single Seater</h3>
<button className='mt-7 lg:mt-11 max-sm:text-[18px] sm:text-base lg:text-[25px] text-2xl font-medium'> Shop Now </button>
<Image className="max-sm:w-[100px]" src="/Line110.png" alt="img" height={0} width={121}></Image>
</div>


<div className='mr-6 max-sm:w-[400px] '>{/*right side */}
    <Image src="/Rocketseat.png" alt="Img" width={853} height={1000}></Image>
</div>


</div>


    </div>
  )
}