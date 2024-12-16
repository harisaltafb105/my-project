import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Shops2 = () => {
  interface Product {
    src: string;
    name: string;
    price: string;
    link?: string;
  }

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
    { src: "/014.png", name: "Asgaard sofa", price: "Rs. 250,000.00", link: "/SingleProduct" },
    { src: "/015.png", name: "Maya safe three seater", price: "Rs. 115,000.00" },
    { src: "/016.png", name: "Outdoor sofa set", price: "Rs. 244,000.00" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-8">
        {products.map((product, index) => (
          <div key={index} className="w-[240px] mx-auto">
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
                <p className="mt-4  text-center font-medium">{product.name}</p>
                <p className="text-center text-[20px] font-medium mt-1 ">{product.price}</p>
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
                <p className="mt-4 text-center font-medium">{product.name}</p>
                <p className="text-center text-[20px] font-medium  mt-1 ">{product.price}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-16 mb-8">
        <button
          aria-label="Page 1"
          className="bg-[#FBEBB5] w-[50px] h-[50px] rounded-lg font-medium "
        >
          1
        </button>
        <button
          aria-label="Page 2"
          className="bg-[#FBEBB5] w-[50px] h-[50px] rounded-lg  font-medium "
        >
          2
        </button>
        <button
          aria-label="Page 3"
          className="bg-[#FBEBB5] w-[50px] h-[50px] rounded-lg  font-medium "
        >
          3
        </button>
        <button
          aria-label="Next Page"
          className="bg-[#FBEBB5] w-[80px] h-[50px] rounded-lg  font-medium "
        >
          Next
        </button>
      </div>
    </div>
  );
};
