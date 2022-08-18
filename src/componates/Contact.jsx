import React from 'react'
import SecHeading from './SecHeading'

function Contact() {
  return (
    <div id="contact" className="contact py-5">
      <SecHeading/>
      <div className="container">
        <from className="from w-[700px] max-w-[100%] mx-auto flex flex-col items-center justify-center  gap-y-[5px]">
          <div className='w-full flex items-center flex-col justify-between sm:flex-row gap-y-3 sm:gap-x-2'>
            <input type="email"  className='bg-white w-[85%] sm:w-[220px] h-[45px] pl-2' name="email" id="email"  placeholder='Email' />
            <input type="mobile" className='bg-white w-[85%] sm:w-[220px] h-[45px] pl-2'  name="mobile" id="mobile"  placeholder='Phone'/>
            <button type="submit" className='bg-orange w-[85%] sm:w-[220px] h-[45px] pl-2'>Send</button>
          </div>
          <div className="send flex flex-row justify-center  sm:justify-end w-[85%] sm:w-full sm:pr-[40px]">
            <input type="checkbox" name="offers" id="offers" className='mr-2'/>
            <label for="offers"   id="offersLabel" >send me offers</label>
          </div>
        </from>
      </div>
    </div>
  )
}

export default Contact