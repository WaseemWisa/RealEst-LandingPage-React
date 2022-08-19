import React from 'react'
import { GrLocation } from 'react-icons/gr'
import {BsTelephone} from 'react-icons/bs'


function Info() {
  return (
    <div id='info' className='info relative'>
      <div className="container flex justify-end mt-[6rem] mb-[3rem]">
      <div className="map w-full md:w-4/5 h-[500px]  relative">
          <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6337.286856205277!2d-122.08239598237637!3d37.42190210421487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba027f087f8f%3A0xd86b06710e8fcc35!2zR29vZ2xlIEJ1aWxkaW5nIDQwLCAxNjAwIEFtcGhpdGhlYXRyZSBQa3d5LCBNb3VudGFpbiBWaWV3LCBDQSA5NDA0M9iMINin2YTZiNmE2KfZitin2Kog2KfZhNmF2KrYrdiv2Kk!5e0!3m2!1sar!2seg!4v1660642914484!5m2!1sar!2seg" 
           allowfullscreen="" 
          loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className="info-text absolute top-[-70px] left-[50%] translate-x-[-50%] md:top-[50%] md:left-[-5px] md:translate-y-[-50%]  w-[350px] bg-white flex flex-col gap-y-5 shadow-xl p-4">
            <h2>Logo</h2>
            <div className="content">
              <span className='flex items-center  mb-3 	basis-[15%]'> <GrLocation className='mr-3 text-xl'/> 1600 amphitheatre parkway mountain view california 94043 usa</span>
              <span className='flex items-center 	basis-[15%]'> <BsTelephone className='mr-3 text-xl'/>  +7(495) 764-26-14</span>
            </div>
            <button className='py-[9px] px-[30px] bg-orange-500 w-fit mx-auto'>Contact us</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Info