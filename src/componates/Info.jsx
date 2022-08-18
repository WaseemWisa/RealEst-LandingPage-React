import React from 'react'
import {GoLocation} from 'react-icons/go'
import {BsTelephone} from 'react-icons/bs'


function Info() {
  return (
    <div id='info' className='info relative'>
      <div className="container flex items-center justify-end py-10">
        <div className="info-text absolute top-[25px] md:top-[145px] left-[50px] md:left-[150px] w-[270px] bg-white flex flex-col gap-y-5 shadow-xl p-4">
          <h2>Logo</h2>
          <div className="content">
            <span className='flex items-center  mb-3'> <GoLocation className='text-xl	mr-2'/> 1600 amphitheatre parkway mountain view california 94043 usa</span>
            <span className='flex items-center '> <BsTelephone className='text-xl	mr-2'/>  +7(495) 764-26-14</span>
          </div>
          <button className='py-[9px] px-[30px] bg-orange w-fit mx-auto'>Contact us</button>
        </div>
        <div className="map w-full md:w-9/12	h-[500px] md:mr-14">
          <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6337.286856205277!2d-122.08239598237637!3d37.42190210421487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba027f087f8f%3A0xd86b06710e8fcc35!2zR29vZ2xlIEJ1aWxkaW5nIDQwLCAxNjAwIEFtcGhpdGhlYXRyZSBQa3d5LCBNb3VudGFpbiBWaWV3LCBDQSA5NDA0M9iMINin2YTZiNmE2KfZitin2Kog2KfZhNmF2KrYrdiv2Kk!5e0!3m2!1sar!2seg!4v1660642914484!5m2!1sar!2seg" 
           allowfullscreen="" 
          loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Info