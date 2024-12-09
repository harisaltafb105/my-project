import React from 'react'
import { Shops2 } from '../Components/Shops2'
import { RouteFooter } from '../Components/RouteFooter'
import { Navbar2 } from '../Components/Navbar2'
import { Footer2 } from '../Components/Footer2'
import { ShopHeader } from '../Components/ShopHeader'
import { ShopNav2 } from '../Components/ShopNav2'

const Shop = () => {
  return (
    <div >

<Navbar2 />
<ShopHeader />
<ShopNav2 />
<Shops2 />
<RouteFooter />
<Footer2 />

    </div>
  )
}
export default Shop