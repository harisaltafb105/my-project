// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// export const AsgaardCart = () => {
//   return (
//     <div className='w-[400px] h-[725px] absolute bg-[#FFFFFF] top-0 right-0 flex flex-col justify-between '>

//         <div className='flex flex-col justify-between'> {/*upper div*/}
//         <h3 className='font-semibold text-2xl mb-7 mt-[28px] ml-6'>Shopping Cart</h3>
//        <Image className='ml-6' src="/Line11.png" alt="img" width={287} height={0}></Image>
//         <div className='flex gap-7 mt-9'>
//             <Image className="ml-6" src="/Group146.png" alt="img" width={108} height={105} ></Image>
//             <div className='flex flex-col gap-2 items-start justify-start mt-9'>
//            <p className='text-start'>Asgaard sofa</p>
//            <div className='flex gap-3'> <p> 1 X </p> <p className='text-[#B88E2F]'>Rs. 250,000.00</p></div>
//             </div>
//         </div>
//          </div>
// <div className='flex flex-col gap-5 mb-5'> {/*lower div*/}
// <div className='flex justify-around'>
//     <p>Subtotal</p> <p className='text-[#B88E2F]'>Rs. 250,000.00</p>
// </div>
// <Image src="/Line12.png" alt="img" width={417} height={0}></Image>
// <div className='flex justify-around'>
//     <Link href="/Cart"><button className='w-[130px] h-[30px] border rounded-xl'> View Cart</button> </Link><Link href="/Checkout"><button className='w-[130px] h-[30px] border rounded-xl'>Checkout</button></Link>
// </div>
// </div>
//     </div>
//   )
// }
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const AsgaardCart = () => {
  return (
    <div className='w-full max-w-[400px] h-auto min-h-[725px] absolute bg-[#FFFFFF] top-0 right-0 flex flex-col justify-between p-4 md:h-[725px]'>
      
      <div className='flex flex-col justify-between'> {/*upper div*/}
        <h3 className='font-semibold text-2xl mb-7 mt-[28px] ml-6'>Shopping Cart</h3>
        <Image className='ml-6' src="/Line11.png" alt="img" width={287} height={0}></Image>
        <div className='flex gap-7 mt-9'>
            <Image className="ml-6" src="/Group146.png" alt="img" width={108} height={105} ></Image>
            <div className='flex flex-col gap-2 items-start justify-start mt-9'>
              <p className='text-start'>Asgaard sofa</p>
              <div className='flex gap-3'> <p> 1 X </p> <p className='text-[#B88E2F]'>Rs. 250,000.00</p></div>
            </div>
        </div>
      </div>
      
      <div className='flex flex-col gap-5 mb-5'> {/*lower div*/}
        <div className='flex justify-around'>
          <p>Subtotal</p> <p className='text-[#B88E2F]'>Rs. 250,000.00</p>
        </div>
        <Image src="/Line12.png" alt="img" width={417} height={0}></Image>
        <div className='flex flex-col sm:flex-row justify-around gap-3'>
          <Link href="/Cart"><button className='w-full sm:w-[130px] h-[30px] border rounded-xl'>View Cart</button></Link>
          <Link href="/Checkout"><button className='w-full sm:w-[130px] h-[30px] border rounded-xl'>Checkout</button></Link>
        </div>
      </div>
    </div>
  )
}
