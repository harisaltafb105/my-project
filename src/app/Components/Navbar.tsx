import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';


export const Navbar = () => {
  return (
   
<div>
<div className='bg-[#FBEBB5]  h-[100px] flex gap-28 max-lg:gap-3 '>
  <div className='ml-6 mt-7 max-md:block md:hidden absolute right-3'> <Sheet>
  <SheetTrigger><Menu /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
      <SheetDescription>
      <ul className='flex flex-col gap-11 mt-5 '>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/Shop">Shop</Link></li>
        <li>About</li>
        <li><Link href="/Contact">Contact</Link></li>
      </ul> 
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>
    <div className='ml-[505px] w-[430px] h-[24px] text-base font-medium max-md:hidden lg:ml-[450px] max-lg:ml-[350px]'>{/*center part*/}
      
      <ul className='flex gap-11 mt-[38px]'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/Shop">Shop</Link></li>
        <li>About</li>
        <li><Link href="/Contact">Contact</Link></li>
      </ul>
      
      </div> 
      <div className='flex mt-[38px] gap-10 max-lg:gap-7 max-md:ml-8 max-lg:mr-7'> {/*left part*/}
        <div className='w-[23] h-[18]'><Image src="/Vector4.png" alt="img" width={23} height={18}></Image></div>
        <div><Search /></div>
        <div><Heart /></div>
        <div><ShoppingCart /></div>
        
        
        
        
        </div>       
              
               
            </div>   
                </div>
  )}
