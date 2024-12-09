import React from 'react'
import { Navbar2 } from '../Components/Navbar2'
import { Footer2 } from '../Components/Footer2'
import { RelatedProd } from '../Components/RelatedProd'
import { Description } from '../Components/Description'
import { Asgaard } from '../Components/Asgaard'
import { Asgaardhead } from '../Components/Asgaardhead'

 const SingleProduct = () => {
  return (
    <div>
<Navbar2 />
<Asgaardhead />
<Asgaard />
<RelatedProd />
<Description />
<Footer2 />

    </div>
  )
}
export default SingleProduct