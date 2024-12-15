import React from 'react';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Search } from 'lucide-react';

export const Blogpage = () => {
  return (
    <div className='mt-20 mb-9'>
      <div className='flex justify-around lg:flex-row max-md:flex-col max-md:items-center'>
        {/* Left side (Main blog posts) */}
        <div className='w-[690px] flex flex-col gap-8 max-md:w-full'>
          {/* First post */}
          <div className='flex flex-col gap-6'>
            <div>
              <Image src="/Rectangle070.png" alt="img" width={817} height={500}></Image>
            </div>
            <div className='flex gap-3 text-[#9F9F9F] text-[15px] font-normal'>
              <div className='text-base font-normal flex'>
                <Image src="/dashicons.png" alt="img" width={24} height={24}></Image>
                <p> Admin</p>
              </div>
              <div className='text-base font-normal flex'>
                <Image src="/calender.png" alt="img" width={24} height={24}></Image>
                <p>14th Oct 2022</p>
              </div>
              <div className='text-base font-normal flex'>
                <Image src="/tag.png" alt="img" width={24} height={24}></Image>
                <p>Wood</p>
              </div>
            </div>

            <h2 className='text-xl font-medium'>Going all-in with millennial design</h2>

            <p className='text-start text-xs font-normal'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel libero obcaecati dolorem suscipit, doloribus inventore non totam dolore facere dolor nam, reprehenderit ipsum alias earum voluptatibus quasi beatae tempora itaque.
              Et deleniti molestias repellendus facilis maxime alias eum aperiam. Libero quia rerum quidem recusandae id voluptatem ullam maxime nostrum minima error, dicta est saepe quos repudiandae odio ipsam, sequi corrupti. quidem recusandae id voluptatem ullam maxime nostrum minima error, dicta est saepe quos repudiandae odio ipsam, sequi corrupti.
            </p>
            <button className='text-xl font-medium max-md:text-lg text-start'>Read More</button>
          <Image src="/Line110.png" alt="img" height={0} width={115} />
          </div>

          {/* Second post */}
          <div className='flex flex-col gap-6 mt-7'>
            <div>
              <Image src="/Rectangle069.png" alt="img" width={817} height={500}></Image>
            </div>
            <div className='flex gap-3 text-[#9F9F9F] text-[15px] font-normal'>
              <div className='text-base font-normal flex'>
                <Image src="/dashicons.png" alt="img" width={24} height={24}></Image>
                <p> Admin</p>
              </div>
              <div className='text-base font-normal flex'>
                <Image src="/calender.png" alt="img" width={24} height={24}></Image>
                <p>14th Oct 2022</p>
              </div>
              <div className='text-base font-normal flex'>
                <Image src="/tag.png" alt="img" width={24} height={24}></Image>
                <p>Handmade</p>
              </div>
            </div>

            <h2 className='text-xl font-medium'>Exploring new ways of decorating</h2>
            <p className='text-start text-xs font-normal'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quidem eveniet ratione mollitia maxime, modi sed ex placeat a. Illum voluptatibus, autem quidem eius voluptas deserunt nam dolor hic accusantium.
              Nesciunt quia id dolor consectetur dolorem cumque quisquam eius, magnam deserunt odit nam dolore officia sapiente iure voluptas explicabo, error perspiciatis voluptates, facere animi optio enim? Consequuntur quod quis nemo? quidem recusandae id voluptatem ullam maxime nostrum minima error, dicta est saepe quos repudiandae odio ipsam, sequi corrupti.
            </p>
            <button className='text-xl font-medium max-md:text-lg text-start'>Read More</button>
            <Image src="/Line110.png" alt="img" height={0} width={115} />
          </div>

          {/* Third post */}
          <div className='flex flex-col gap-6 mt-7'>
            <div>
              <Image src="/Rectangle068.png" alt="img" width={817} height={500}></Image>
            </div>
            <div className='flex gap-3 text-[#9F9F9F] text-[15px] font-normal'>
              <div className='text-base font-normal flex'>
                <Image src="/dashicons.png" alt="img" width={24} height={24}></Image>
                <p> Admin</p>
              </div>
              <div className='text-base font-normal flex'>
                <Image src="/calender.png" alt="img" width={24} height={24}></Image>
                <p>14th Oct 2022</p>
              </div>
              <div className='text-base font-normal flex'>
                <Image src="/tag.png" alt="img" width={24} height={24}></Image>
                <p>Wood</p>
              </div>
            </div>

            <h2 className='text-xl font-medium'>Handmade pieces that took time to make</h2>
            <p className='text-start text-xs font-normal'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima corporis vero suscipit laudantium itaque quam, voluptatem, nulla dolor aliquam fugiat ullam totam aperiam voluptate iusto dolore, incidunt sint nemo atque?
              Corrupti quo unde, molestias expedita quisquam, a blanditiis voluptate placeat repellat, dolore doloremque adipisci laboriosam dolores iure nihil. Sint, debitis? Dolor odio repellat qui? Quod molestiae voluptas consequuntur nobis nemo! quidem recusandae id voluptatem ullam maxime nostrum minima error, dicta est saepe quos repudiandae odio ipsam, sequi corrupti.
            </p>
            <button className='text-xl font-medium max-md:text-lg text-start'>Read More</button>
          <Image src="/Line110.png" alt="img" height={0} width={115} />
          </div>
        </div>

        {/* Right sidebar */}
        <div className='w-[330px] max-md:w-full max-md:mt-10'>
          {/* Search Bar */}
          <div className='relative'>
            <input className="border-2 rounded-lg h-[50px] w-[280px] max-md:w-full" type="input" id="username" name="search"  />
            <Search className='right-16 top-3 absolute '/>
          </div><br /><br />
          
          {/* Categories */}
          <div className='flex gap-36 max-md:gap-8'>
            <div className='flex flex-col gap-[30px]'>
              <h4 className='text-2xl font-medium'>Categories</h4>
              <p className='text-base font-normal text-[#9F9F9F]'>Crafts</p>
              <p className='text-base font-normal text-[#9F9F9F]'>Design</p>
              <p className='text-base font-normal text-[#9F9F9F]'>Handmade</p>
              <p className='text-base font-normal text-[#9F9F9F]'>Interior</p>
              <p className='text-base font-normal text-[#9F9F9F]'>Wood</p>
            </div>

            {/* Category Counts */}
            <div className='flex flex-col gap-[30px] text-[#9F9F9F]'>
              <p className='mt-[65px]'>2</p>
              <p>8</p>
              <p>7</p>
              <p>1</p>
              <p>6</p>
            </div>
          </div>

          {/* Recent Posts */}
          <div className='flex flex-col gap-6 mt-[70px] w-[220px]'>
            <h2 className='text-2xl font-medium'>Recent Posts</h2>

            <div className='flex gap-2 h-[80px]'>
              <Image src="/Rectangle691.png" alt="img" height={80} width={80}></Image>
              <div>
                <p className='text-[14px] font-normal'>Going all-in with millennial design</p>
                <p className='text-[12px] font-normal text-[#9F9F9F]'>03 Aug 2022</p>
              </div>
            </div>

            <div className='flex gap-[7px] h-[80px]'>
              <Image src="/Rectangle692.png" alt='img' width={80} height={80}></Image>
              <div>
                <p className='text-[14px] font-normal'>Exploring new ways of decorating</p>
                <p className='text-[12px] font-normal text-[#9F9F9F]'>03 Aug 2022</p>
              </div>
            </div>

            <div className='flex gap-2'>
              <Image src="/Rectangle693.png" alt="img" height={80} width={80}></Image>
              <div>
                <p className='text-[14px] font-normal'>Handmade pieces that took time to make</p>
                <p className='text-[12px] font-normal text-[#9F9F9F]'>03 Aug 2022</p>
              </div>
            </div>

            <div className='flex gap-2'>
              <Image src="/Rectangle694.png" alt="img" height={80} width={80}></Image>
              <div>
                <p className='text-[14px] font-normal'>Modern home in Milan</p>
                <p className='text-[12px] font-normal text-[#9F9F9F]'>03 Aug 2022</p>
              </div>
            </div>

            <div className='flex gap-2'>
              <Image src="/Rectangle695.png" alt="img" height={80} width={80}></Image>
              <div>
                <p className='text-[14px] font-normal'>Colorful office redesign</p>
                <p className='text-[12px] font-normal text-[#9F9F9F]'>03 Aug 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' h-[60px] flex justify-center items-center gap-6 mt-11 mb-3 '> 
<button className='bg-[#FBEBB5] w-[60px] h-[55px] rounded-lg'> 1</button>
<button className='bg-[#FBEBB5] w-[60px] h-[55px] rounded-lg'>2</button>
<button className='bg-[#FBEBB5] w-[60px] h-[55px] rounded-lg'>3</button>
<button className='bg-[#FBEBB5] w-[98px] h-[55px] rounded-lg'>Next</button>
</div>
    
    
    </div>
  );
};
