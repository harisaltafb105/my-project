import React from 'react'
import Image from 'next/image'
import { Facebook } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { Twitter } from 'lucide-react'
import Link from 'next/link'

export const Asgaard = () => {
  return (
    <div className='flex  justify-around max-md:flex max-md:flex-col max-md:justify-center max-md:justify-items-center'>

<div>
<Image src="/Group001.png" alt="img" height={553} width={500}></Image>
</div>


<div className='w-[650px] flex flex-col gap-5'>
<h2 className='text-[40px] font-normal'>Asgaard Sofa</h2>
<p className='text-[#9F9F9F] text-2xl font-medium'>Rs.250,000.00</p>
<Image src="/Group002.png" alt="img" width={124} height={20}></Image>
<p> 5 Customer review</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eius in autem fuga cum ipsum corrupti aliquid quae aliquam molestiae molestias tempore alias placeat soluta, aperiam ab doloribus consequatur reprehenderit!</p>
<Image src="/Group003.png" alt="img" width={123} height={63}></Image>
<p className='text-[#9F9F9F]'>color</p>
<div className='flex gap-4'>
<div className='w-[30px] h-[30px] rounded-full bg-[#816DFA]'></div>
<div className='w-[30px] h-[30px] rounded-full bg-black'></div>
<div className='w-[30px] h-[30px] rounded-full bg-[#CDBA7B]'></div>
</div>
<div className='flex'>
<button className='rounded-2xl border-2 py-2 px-8 max-sm:py-1 max-sm:px-6'>+ 1 -</button>
<Link href="/Cart"><button className='rounded-2xl border-2 py-2 px-8 max-sm:py-1 max-sm:px-6'>Add to Cart</button></Link>
</div>
<div className='flex flex-col gap-4 text-[#9F9F9F]'>
    <p> SKU: SS001</p>
    <p>Category: Sofas</p>
    <p>Tags: Sofa, Chair, Home, Shops</p>
    <div className='flex'>
    <p>share:</p>
    <div className='flex gap-2'> <Facebook /> <Linkedin /> <Twitter /></div></div>
</div>


</div>
    </div>
  )
}
