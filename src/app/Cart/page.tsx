import React from 'react'
import { Navbar2 } from '../Components/Navbar2'
import { Cartinfo } from '../Components/Cartinfo'
import { RouteFooter } from '../Components/RouteFooter'
import { CartHeader } from '../Components/CartHeader'
import { Footer2 } from '../Components/Footer2'
 const Cart = () => {
  return (
    <div>
<Navbar2 />
<CartHeader />
<Cartinfo />
<RouteFooter />
<Footer2 />


    </div>
  )
}
export default Cart