import React from "react";
import ProductListPage from "../Components/NewProductList";
import client from "../../../sanityClient";
import { Navbar2 } from "../Components/Navbar2";
import { ShopHeader } from "../Components/ShopHeader";
import { ShopNav2 } from "../Components/ShopNav2";
import { RouteFooter } from "../Components/RouteFooter";
import { Footer2 } from "../Components/Footer2";

export default async function ProductPage() {
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
      <ProductListPage products={products} />
      <RouteFooter />
      <Footer2 />
    </div>
  );
}
