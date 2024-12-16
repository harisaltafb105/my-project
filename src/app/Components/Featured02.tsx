import React from 'react';
import Image from 'next/image';

export const Featured02 = () => {
  return (
    <div className='max-md:flex max-md:flex-col  max-md:justify-center max-md:items-center '>
      {/* Title Section */}
      <div className='flex flex-col justify-center items-center gap-7 p-4'>
        <div className='w-full max-w-[773px] max-md:w-[300px] text-center'>
          <h1 className='text-4xl max-md:text-3xl max-sm:w-[300px] font-medium'>
            Top Picks For You
          </h1>
        </div>
        <p className='text-base font-medium text-center max-md:w-[400px] max-sm:w-[250px] text-[#9F9F9F]'>
          Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights
        </p>
      </div>

      {/* Product Grid Section */}
      <div className='flex flex-wrap justify-center gap-6 mt-6 max-md:flex-col max-md:items-center'>
        {/* Product 1 */}
        <div className='w-[287px] h-[397px] max-md:w-full max-md:h-auto'>
          <Image src="/Table4.png" alt="img" width={287} height={287} />
          <p className='ml-7'>Trenton modular sofa_3</p>
          <p className='ml-7 text-[16px] font-medium'>Rs. 25,000.00</p>
        </div>
        {/* Product 2 */}
        <div className='w-[287px] h-[397px] mt-11 max-md:w-full max-md:h-auto'>
          <Image src="/Table1.png" alt="img" width={287} height={287} />
          <p className='mt-9'>Granite dining table with dining chair</p>
          <p className='text-[16px] font-medium'>Rs. 25,000.00</p>
        </div>
        {/* Product 3 */}
        <div className='w-[287px] h-[397px] max-md:w-full max-md:h-auto'>
          <Image src="/Table2.png" alt="img" width={287} height={287} />
          <p>Outdoor bar table and stool</p>
          <p className='text-[16px] font-medium'>Rs. 25,000.00</p>
        </div>
        {/* Product 4 */}
        <div className='w-[287px] h-[397px] max-md:w-full max-md:h-auto'>
          <Image src="/Table3.png" alt="img" width={287} height={287} />
          <p>Plain console with teak mirror</p>
          <p className='text-[16px] font-medium'>Rs. 25,000.00</p>
        </div>
      </div>

      {/* View More Section */}
      <div className='flex flex-col gap-3 justify-center items-center text-xl max-md:mt-8 font-medium'>
        <button>View More</button>
        <Image src="/Line110.png" alt="img" height={0} width={115} />
      </div>
    </div>
  );
}