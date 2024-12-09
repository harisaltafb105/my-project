import React from 'react'
import { Navbar2 } from '../Components/Navbar2'
import { CheckoutHeader } from '../Components/CheckoutHeader'
import { RouteFooter } from '../Components/RouteFooter'
import { Footer2 } from '../Components/Footer2'
import { Checkoutinfo } from '../Components/Checkoutinfo'

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