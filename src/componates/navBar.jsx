import React from 'react'
/* hidden md:flex
 */
function NavBar() {
  return (
    <div id="nav-mob" className="nav-mob">
      <nav className='nav  justify-between items-center flex-nowrap  h-20 px-7 w-full border-b	 border-b-silver	 border-solid	'>
        <a href="#" className="logo text-sky-400 capitalize">elbrus</a>
        <ul className="links flex justify-center items-center h-full gap-x-5">
          <li className="link flex items-center h-full"><a href="#home" className="capitalize bg-color-green">home</a></li>
          <li className="link flex items-center h-full"><a href="#features" className="capitalize">features</a></li>
          <li className="link flex items-center h-full"><a href="#blog" className="capitalize">blog</a></li>
          <li className="link flex items-center h-full"><a href="#testimonial" className="capitalize">testimonial</a></li>
          <li className="link flex items-center h-full"><a href="#ternding" className="capitalize">trending</a></li>
          <li className="link flex items-center h-full"><a href="#info" className="capitalize">info</a></li>
        </ul>
        <div className="info">
          <span>+7(495) 764-26-14</span>
        </div>
      </nav>
    </div>
  )
}

export default NavBar