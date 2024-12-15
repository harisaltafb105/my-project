// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// export const Shops2 = () => {
//   // Use of Array of objects for furniture data //
//   interface Products {
// src:string,
// name:string,
// price:string
//   }
  
  
  
//   const products: Products[]= [
//     { src: "/001.png", name: "Trenton modular sofa_3", price: "Rs. 25,000.00" },
//     { src: "/002.png", name: "Granite dining table with dining chair", price: "Rs. 25,000.00" },
//     { src: "/003.png", name: "Outdoor bar table and stool", price: "Rs. 25,000.00" },
//     { src: "/004.png", name: "Plain console with teak mirror", price: "Rs. 25,000.00" },
//     { src: "/005.png", name: "Grain coffee table", price: "Rs. 15,000.00" },
//     { src: "/006.png", name: "Kent coffee table", price: "Rs. 225,000.00" },
//     { src: "/007.png", name: "Round coffee table_color 2", price: "Rs. 251,000.00" },
//     { src: "/008.png", name: "Reclining wooden chair", price: "Rs. 25,200.00" },
//     { src: "/009.png", name: "Plain console", price: "Rs. 258,200.00" },
//     { src: "/010.png", name: "Reclined teak side ", price: "Rs. 20,000.00" },
//     { src: "/011.png", name: "SJP_825", price: "Rs. 100,000.00" },
//     { src: "/012.png", name: "Bella chair and table", price: "Rs. 100,000.00" },
//     { src: "/013.png", name: "Granite square side table", price: "Rs. 258,000.00" },
//     { src:"/014.png", name: "Asgaard sofa", price: "Rs. 250,000.00" },
//     { src: "/015.png", name: "Maya safe three seater", price: "Rs. 115,000.00" },
//     { src: "/016.png", name: "Outdoor sofa set", price: "Rs. 244,000.00" },
//   ];

//   return (
//     <div className="max-w-screen-xl mx-auto px-4">
//       {/* Product Grid */}
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14 mt-10">
//         {products.map((product, index) => (
//           <div key={index} className="w-[240px] mx-auto">
//             <Image
//               src={product.src}
//               alt={product.name}
//               width={287}
//               height={287}
//               layout="responsive"
//               objectFit="contain"
//             />
//             <p className="mt-5 text-gray-800 text-center font-medium">{product.name}</p>
//             <p className="text-center font-bold mt-1">{product.price}</p>
//           </div>
//         ))}
//       </div>

    
//       <div className="flex justify-center gap-4 mt-14 mb-10">
//         <button className="bg-[#FBEBB5] w-[50px] h-[50px] rounded-lg text-gray-800 font-medium">
//           1
//         </button>
//         <button className="bg-[#FBEBB5] w-[50px] h-[50px] rounded-lg text-gray-800 font-medium">
//           2
//         </button>
//         <button className="bg-[#FBEBB5] w-[50px] h-[50px] rounded-lg text-gray-800 font-medium">
//           3
//         </button>
//         <button className="bg-[#FBEBB5] w-[80px] h-[50px] rounded-lg text-gray-800 font-medium">
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Shops2 = () => {
  // Interface for product details
  interface Product {
    src: string;
    name: string;
    price: string;
    link?: string; // Optional link for certain products
  }

  // Product data
  const products: Product[] = [
    { src: "/001.png", name: "Trenton modular sofa_3", price: "Rs. 25,000.00" },
    { src: "/002.png", name: "Granite dining table with dining chair", price: "Rs. 25,000.00" },
    { src: "/003.png", name: "Outdoor bar table and stool", price: "Rs. 25,000.00" },
    { src: "/004.png", name: "Plain console with teak mirror", price: "Rs. 25,000.00" },
    { src: "/005.png", name: "Grain coffee table", price: "Rs. 15,000.00" },
    { src: "/006.png", name: "Kent coffee table", price: "Rs. 225,000.00" },
    { src: "/007.png", name: "Round coffee table_color 2", price: "Rs. 251,000.00" },
    { src: "/008.png", name: "Reclining wooden chair", price: "Rs. 25,200.00" },
    { src: "/009.png", name: "Plain console", price: "Rs. 258,200.00" },
    { src: "/010.png", name: "Reclined teak side ", price: "Rs. 20,000.00" },
    { src: "/011.png", name: "SJP_825", price: "Rs. 100,000.00" },
    { src: "/012.png", name: "Bella chair and table", price: "Rs. 100,000.00" },
    { src: "/013.png", name: "Granite square side table", price: "Rs. 258,000.00" },
    { src: "/014.png", name: "Asgaard sofa", price: "Rs. 250,000.00", link: "/SingleProduct" }, // Link added here
    { src: "/015.png", name: "Maya safe three seater", price: "Rs. 115,000.00" },
    { src: "/016.png", name: "Outdoor sofa set", price: "Rs. 244,000.00" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      {/* Product Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-8">
        {products.map((product, index) => (
          <div key={index} className="w-[240px] mx-auto">
            {/* Conditional rendering for Link */}
            {product.link ? (
              <Link href={product.link}>
                
                  <div className="overflow-hidden">
                    <Image
                      src={product.src}
                      alt={product.name}
                      width={240}
                      height={240}
                      layout="responsive"
                      objectFit="contain"
                    />
                  </div>
                  <p className="mt-4 text-gray-800 text-center font-medium">{product.name}</p>
                  <p className="text-center font-bold mt-1 text-gray-900">{product.price}</p>
              
              </Link>
            ) : (
              <div className="block w-[240px] mx-auto">
                <div className="overflow-hidden">
                  <Image
                    src={product.src}
                    alt={product.name}
                    width={240}
                    height={240}
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
                <p className="mt-4 text-gray-800 text-center font-medium">{product.name}</p>
                <p className="text-center font-bold mt-1 text-gray-900">{product.price}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      
      <div className="flex justify-center gap-4 mt-10 mb-8">
        <button
          aria-label="Page 1"
          className="bg-[#FBEBB5] w-[50px] h-[50px] rounded-lg text-gray-800 font-medium "
        >
          1
        </button>
        <button
          aria-label="Page 2"
          className="bg-[#FBEBB5] w-[50px] h-[50px] rounded-lg text-gray-800 font-medium "
        >
          2
        </button>
        <button
          aria-label="Page 3"
          className="bg-[#FBEBB5] w-[50px] h-[50px] rounded-lg text-gray-800 font-medium "
        >
          3
        </button>
        <button
          aria-label="Next Page"
          className="bg-[#FBEBB5] w-[80px] h-[50px] rounded-lg text-gray-800 font-medium hover:bg-[#f9db90] transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};
