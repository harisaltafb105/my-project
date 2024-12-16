import React from 'react';
import Image from 'next/image';

export const Description = () => {
  return (
    <div className='mt-32 mb-32'>
      {/* Tabs Section */}
      <div className='flex justify-center items-center gap-10 flex-wrap max-md:flex-col'>
        <p className='text-2xl font-normal'>Description</p>
        <p className='text-2xl font-normal text-[#9F9F9F]'>Additional Information</p>
        <p className='text-2xl font-normal text-[#9F9F9F]'>Reviews [5]</p>
      </div>

      {/* Text Content */}
      <div className='flex flex-col justify-center mt-8'>
        <div className='text-center mx-auto text-[#9F9F9F] max-w-screen-md px-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore reprehenderit quas
          necessitatibus ducimus alias commodi sit atque, neque ratione ad maio.
        </div>
        <br />
        <div className='text-center mx-auto text-[#9F9F9F] max-w-screen-lg px-4'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sunt velit sint aperiam
          ut pariatur, optio corrupti necessitatibus cupiditate fugit vero et reprehenderit
          voluptatem nihil quam amet eaque quaerat facere. Placeat recusandae veniam nobis
          vitae distinctio ducimus nihil praesentium, sapiente possimus dolore voluptates sed
          quae nisi eaque at illo optio nulla reiciendis! Iure a esse qui consectetur. Officia,
          vel quia!
        </div>
      </div>

      {/* Images Section */}
      <div className='flex justify-center gap-6 mt-11 flex-wrap max-md:flex-col items-center'>
        <div className='w-[600px] h-[330px] max-w-full'>
          <Image src="/Group300.png" alt="img" width={600} height={330} layout="responsive" />
        </div>
        <div className='w-[600px] h-[330px] max-w-full'>
          <Image src="/Group301.png" alt="img" width={600} height={330} layout="responsive" />
        </div>
      </div>
    </div>
  );
};
