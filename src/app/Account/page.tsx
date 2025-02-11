import React from 'react'
import Image from 'next/image'
import { Navbar2 } from '../Components/Navbar2'
import { RouteFooter } from '../Components/RouteFooter'
import { MyAccount } from '../Components/MyAccount'
import { AccountHeader } from '../Components/AccountHeader'

const Account = () => {
  return (
    <div>
<Navbar2 />
<AccountHeader />
<MyAccount />
<RouteFooter /> 


    </div>
  )
}
export default Account