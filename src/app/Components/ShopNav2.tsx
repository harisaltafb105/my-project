import Image from 'next/image';

export const ShopNav2 = () => {
  return (
    <div className="h-[100px] bg-[#FAF4F4] flex justify-around items-center mt-7 max-md:flex-col max-md:gap-3 max-md:w-full max-sm:w-full max-sm:gap-2">
      {/* Left Section */}
      <div className="flex gap-4 items-center">
        {/* Logo */}
        <div className="w-[80px] h-[24px] max-md:w-[60px] max-md:h-[12px] max-md:mb-1">
          <Image src="/Group57.png" alt="logo" width={100} height={20} />
        </div>
        {/* Icons */}
        <div className="w-[18px] h-[18px] mt-1 max-md:w-[16px] max-md:h-[16px]">
          <Image src="/abc.png" alt="icon1" width={28} height={28} />
        </div>
        <div className="w-[22px] h-[22px] mt-1 max-md:w-[16px] max-md:h-[16px]">
          <Image src="/Vector3.png" alt="icon2" width={28} height={28} />
        </div>
        {/* Results Text */}
        <div className="max-sm:text-xs text-[16px] font-normal mt-1">
          <p>Showing 1-16 of 32 results</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex gap-4 items-center">
        {/* Show Text */}
        <div className="flex items-center h-[50px] max-sm:text-sm text-[19px] font-normal">
          <p >Show</p>
        </div>
        {/* Group58 Image */}
        <div className="w-[50px] h-[50px] max-md:w-[35px] max-md:h-[30px]">
          <Image src="/Group58.png" alt="show-icon" width={50} height={50} />
        </div>
        {/* Sort By Text */}
        <div className="flex items-center max-sm:text-sm text-[19px] font-normal">
          <p>Sort by</p>
        </div>
        {/* Group59 Dropdown */}
        <div className="w-[170px] h-[50px] max-md:w-[110px] max-md:h-[30px]">
          <Image src="/Group59.png" alt="dropdown" width={170} height={50} />
        </div>
      </div>
    </div>
  );
};
