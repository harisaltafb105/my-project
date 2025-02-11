import React from 'react'
import { Navbar2 } from '../Components/Navbar2'
import { CheckoutHeader } from '../Components/CheckoutHeader'
import { RouteFooter } from '../Components/RouteFooter'
import { Checkoutinfo } from '../Components/Checkoutinfo'
import { Footer2 } from '../Components/Footer2'

 const Checkout = () => {
  return (
    <div>
      <Navbar2 />
      <CheckoutHeader />
      <Checkoutinfo />
      <RouteFooter />
      <Footer2 />
      
    </div>
  )
}
export default Checkout