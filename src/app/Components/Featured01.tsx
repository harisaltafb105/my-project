import React from 'react';
import Image from 'next/image';

export const Featured01 = () => {
  return (
    <div className="bg-[#FAF4F4]">
      <div className="flex flex-col md:flex-row p-11 gap-16 md:gap-56 min-w-full ">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start p-10 lg:relative">
          <div className="max-md:w-[300px] max-md:h-[300px] md:w-auto md:h-auto">
            <Image src="/Desk.png" alt="Img" width={580} height={550} />
          </div>
          <div className="mt-6 text-center md:text-left lg:absolute lg:bottom-16">
            <p className="text-4xl max-lg:text-2xl font-medium">Side table</p>
            <button className="text-xl max-lg:text-lg font-medium mt-4">View More</button>
            <div className="mt-3 flex justify-center md:justify-start">
              <Image src="/Line110.png" alt="img" height={0} width={118} />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-start p-10 lg:relative">
          <div className="max-md:w-[300px] max-md:h-[300px] md:w-auto md:h-auto">
            <Image src="/Sofa.png" alt="img" width={605} height={562} />
          </div>
          <div className="mt-6 text-center md:text-left lg:absolute lg:bottom-16">
            <p className="text-4xl max-lg:text-2xl font-medium">Side table</p>
            <button className="text-xl max-lg:text-lg font-medium mt-4">View More</button>
            <div className="mt-3 flex justify-center md:justify-start">
              <Image src="/Line110.png" alt="img" height={0} width={118} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};