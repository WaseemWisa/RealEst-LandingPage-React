import React from 'react'
import {FaTelegramPlane} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'


function Footer() {

  const linksStyle = 'text-slate-200 text-lg capitalize';
  const linksStyle2 = "col flex flex-col  basis-full 	md:basis-1/4 gap-3"

  return (
    <div id="footer" className="footer relative">
      <div className="container relative flex flex-col md:flex-row items-start  gap-3	py-7">
        <div className={linksStyle2}>
          <a href='' className='logo text-lg'>Elbrus</a>
        </div>
        <div className={linksStyle2}>
          <a href='' className={linksStyle}>about componay</a>
          <a href='' className={linksStyle}>directions</a>
        </div>
        <div className={linksStyle2}>
          <a href='' className={linksStyle}>karanor</a>
          <a href='' className={linksStyle}>parquet</a>
        </div>
        <div className={linksStyle2}>
          <a href=''  className='border border-solid border-slate-300 px-[25px] py-[7px] text-white capitalize w-fit'>request a call</a>
          <span className='text-white'>+7(495) 764-26-14</span>
          <div className="icons flex">
            <FaTelegramPlane className='text-[#f4f4f4] mr-2'/>
            <IoLogoWhatsapp className='text-[#f4f4f4]'/>
          </div>
        </div>
      </div>
      <div className="text-center text-white relative py-4 border-t-solid border-t-neutral-400	border-t"> 
        <span>Disgned by: <a href="https://www.behance.net/gallery/104617791/Landing-Page-for-real-estate-agency">Daria</a></span>
         <span className='mx-3'>|</span>
        <span>Coding by: <a href="https://github.com/WaseemWisa">Waseem</a> </span>
       </div>
    </div>
  )
}

export default Footer