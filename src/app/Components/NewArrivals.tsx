import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const NewArrivals = () => {
  return (
    <div className="bg-[#FFF9E5] xl:w-4/4 lg:3/4 md:2/4 max-md:1/4 mt-14 max-sm:mt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 max-md:flex-col">
        <div className="p-3 max-sm:w-[400px]">
          <Image src="/NArrSofa.png" alt="img" width={750} height={799}></Image>
        </div>
        <div className="lg:w-[310px] h-[200px] flex justify-center items-center flex-col gap-3 text-center">
          <h2 className="text-xl md:text-[18px] max-lg:text-[20px] font-medium">
            New Arrivals
          </h2>
          <h3 className="text-[40px] md:text-[30px] max-lg:mr-3 max-md:text-[28px] font-bold">
            Asgaard sofa
          </h3>
          <div className="w-[200px] h-[64px] border-[1px] border-black flex items-center justify-center">
            <Link href="/SingleProduct">
              <button className="text-lg md:text-[16px] font-normal">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};