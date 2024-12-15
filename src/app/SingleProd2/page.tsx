import React from 'react'
import { Navbar2 } from '../Components/Navbar2'
import { Footer2 } from '../Components/Footer2'
import { RelatedProd } from '../Components/RelatedProd'
import { Description } from '../Components/Description'
import { Asgaard } from '../Components/Asgaard'
import { Asgaardhead } from '../Components/Asgaardhead'
import { AsgaardCart } from '../Components/AsgaardCart'

const SingleProd2 = () => {
  return (
    <div className='bg-[rgba(0,0,0,0.2)] '>
<Navbar2 />
<Asgaardhead />
<Asgaard />
<RelatedProd />
<Description />
<Footer2 />
< AsgaardCart />


    </div>
  )
}
export default SingleProd2