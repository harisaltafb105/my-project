import React from 'react'
import Image from 'next/image'
import { Clock } from 'lucide-react'
import { Calendar } from 'lucide-react'

export const Blogs = () => {
  return (
    <div className=''>
        <div className='flex flex-col justify-center items-center mt-11'> {/*upper section*/}
            <div className='w-[174px] h-[64px]'><h1 className='text-4xl font-medium'>Our Blogs</h1></div>
            <p>Find a bright ideal to suit your taste with our great selection </p>
        </div> 
            
        



<div className='flex max-md:flex-col max-md:items-center max-md:justify-center items-center justify-center gap-8  mt-11   '> {/*second main div*/}



<div className='max-md:h-[330px]'>
<div className='w-[270px]  max-sm:w-[220px] max-sm:h-[220px] h-[270px]'><Image src="/Rectangle1.png" alt="img" height={393} width={393}></Image>{/*individual div 1*/}

<div className='flex flex-col gap-3 justify-center items-center mt-4 max-sm:w-[250px] w-[280px]'>
<p className='text-lg font-normal max-sm:text-base'>Going all-in with millenial design</p>
<button className='text-xl max-sm:text-lg font-medium'>Read More</button>
<div className='flex gap-2'>
   <div className='flex'> <Clock /><p > 5 min</p></div>
    <div className='flex'><Calendar /><p>12th Oct 2022</p></div>
</div>
</div>
    </div>
</div>



<div className='max-md:h-[330px]'>
<div className='w-[270px] h-[270px] max-sm:w-[220px] max-sm:h-[220px]'><Image src="/Rectangle2.png" alt="img" height={393} width={393}></Image>
<div className='flex flex-col gap-3 justify-center items-center mt-4 w-[280px] max-sm:w-[250px]'>
<p className='text-lg font-normal max-sm:text-base'>Going all-in with millenial design</p>
<button className='text-xl font-medium max-sm:text-lg'>Read More</button>
<div className='flex gap-2'>
   <div className='flex'> <Clock /><p > 5 min</p></div>
    <div className='flex'><Calendar /><p>12th Oct 2022</p></div>
</div>
</div>
</div>

</div>



<div className='w-[270px] h-[270px] max-sm:w-[220px] max-sm:h-[220px]'><Image src="/Rectangle3.png" alt="img" height={393} width={393}></Image>
<div className='flex flex-col gap-3 justify-center items-center mt-4 w-[280px] max-sm:w-[250px]'>
<p className='text-lg font-normal max-sm:text-base'>Going all-in with millenial design</p>
<button className='text-xl font-medium max-sm:text-lg'>Read More</button>
<div className='flex gap-2'>
   <div className='flex'> <Clock /><p > 5 min</p></div>
    <div className='flex'><Calendar /><p>12th Oct 2022</p></div>
</div>
</div>


</div>


</div>









        



    
    
    </div>
  )
}
