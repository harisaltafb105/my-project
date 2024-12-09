import Image from "next/image";
import { Navbar } from "./Components/Navbar";
import { Feather } from "lucide-react";
import { Featured } from "./Components/Featured";

import { Featured02 } from "./Components/Featured02";
import { NewArrivals } from "./Components/NewArrivals";
import { Blogs } from "./Components/Blogs";
import { Footer1 } from "./Components/Footer1";
import { Footer2 } from "./Components/Footer2";
import { Featured01 } from "./Components/Featured01";


export default function Home() {
  return (<div>
<Navbar />
<Featured />
<Featured01 />
<Featured02 />
<NewArrivals />
<Blogs />
<Footer1 />
<Footer2 />
    
  </div>)
}