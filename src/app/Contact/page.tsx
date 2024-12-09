import React from 'react'
import { Navbar2 } from '../Components/Navbar2'
import { RouteFooter } from '../Components/RouteFooter'
import { Footer2 } from '../Components/Footer2'
import { ContactHeader } from '../Components/ContactHeader'
import { Getintouch } from '../Components/Getintouch'
import { Contactinfo } from '../Components/Contactinfo'


 const Contact = () => {
  return (
    <div>
<Navbar2 />
<ContactHeader />
<Getintouch />
<Contactinfo />
<RouteFooter />
<Footer2 />
    </div>
  )
}
export default Contact