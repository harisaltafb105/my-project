// import React from "react";
// import Image from "next/image";
// import client from "../../../sanityClient";
// import Link from "next/link";

// export default async function product() {
//   // Fetching product data with image asset resolution
//   const products = await client.fetch(`
//     *[_type == 'product']{
//       _id,
//       name,
//       imagePath,
//       description,
//       price,
//       category,
//       stockLevel,
//       isFeaturedProduct
//     }
//   `);

//   return (
//     <div className="max-w-screen-xl mx-auto px-4">
//       <h1 className="text-3xl font-bold text-center mb-8">Products</h1>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-8">
//         {products.map((product: any) => (
//                     <Link key={product._id} href={`/product/${product._id}`}>

//           <div  className="w-full max-w-[240px] mx-auto">
//             {/* Check if the imagePath exists */}
//             {!product.imagePath ? (
//               <p className="text-red-500 text-center">No Image Found</p>
//             ) : (
//               <div className="overflow-hidden rounded-lg border border-gray-200 aspect-square">
//                 <Image
//                   src={product.imagePath} // Use resolved imagePath
//                   alt={product.name || "Product Image"}
//                   width={240}
//                   height={240}
//                   layout="responsive" // Ensures the aspect ratio is maintained
//                   objectFit="cover" // Makes the image fill the container without distortion
//                   placeholder="blur"
//                   blurDataURL="/placeholder.png" // Optional placeholder for loading
//                 />
//               </div>
            
//             )}

//             <p className="mt-4 text-center font-medium">{product.name}</p>
//             <p className="text-center text-[20px] font-medium mt-1">
//               Rs. {product.price}
//             </p>
//             <p className="text-center text-gray-500 text-sm mt-1">
//               {product.category}
//             </p>
//           </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
// app/product/page.tsx
import React from "react";
import ProductList from "../Components/NewProductList";
import client from "../../../sanityClient";
import { Navbar2 } from "../Components/Navbar2";
import { ShopHeader } from "../Components/ShopHeader";
import { ShopNav2 } from "../Components/ShopNav2";
import { RouteFooter } from "../Components/RouteFooter";
import { Footer2 } from "../Components/Footer2";

export default async function product() {
  // Fetch data server-side
  const products = await client.fetch(`
    *[_type == 'product']{
      _id,
      name,
      imagePath,
      description,
      price,
      category,
      stockLevel,
      isFeaturedProduct
    }
  `);

  return (
    <div>
    <Navbar2 />
    <ShopHeader />
    <ShopNav2 />
    <ProductList products={products} />;
    <RouteFooter />
    <Footer2 />
    

</div>
  )}

