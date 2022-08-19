import React from 'react'
import img1 from '../imgs/logo-google.png'
import img2 from '../imgs/logo-hp.png'
import img3 from '../imgs/logo-microsoft.png'
import img4 from '../imgs/logo-microsoft.png'
import img5 from '../imgs/logo-vector-graphics.png'
import SecHeading from './SecHeading'

function Companies() {
  return (
    <div id="companies" className="companies">
      <SecHeading/>
      <div className="container md:container grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-12 my-[100px]">
        <div className="img flex justify-center"><img src={img1} className="h-[45px]" alt="/" /></div>
        <div className="img flex justify-center"><img src={img2} className="h-[45px]" alt="/" /></div>
        <div className="img flex justify-center"><img src={img3} className="h-[45px]" alt="/" /></div>
        <div className="img flex justify-center"><img src={img4} className="h-[45px]" alt="/" /></div>
        <div className="img flex justify-center"><img src={img1} className="h-[45px]" alt="/" /></div>
        <div className="img flex justify-center"><img src={img2} className="h-[45px]" alt="/" /></div>
        <div className="img flex justify-center"><img src={img3} className="h-[45px]" alt="/" /></div>
        <div className="img flex justify-center"><img src={img5} className="h-[45px]" alt="/" /></div>
      </div>
    </div>
  )
}

export default Companies