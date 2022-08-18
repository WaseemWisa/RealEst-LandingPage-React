import React from 'react'
/* hidden md:flex
 */
function navBar() {
  return (
    <div id="home" className="home">
      <nav className='nav  justify-between items-center flex-nowrap  h-20 px-7 w-full border-b	 border-b-silver	 border-solid	'>
        <a href="#" className="logo text-sky-400 capitalize">elbrus</a>
        <ul className="links flex justify-center items-center h-full gap-x-5">
          <li className="link flex items-center h-full"><a href="#Home" className="capitalize bg-color-green">home</a></li>
          <li className="link flex items-center h-full"><a href="#features" className="capitalize">features</a></li>
          <li className="link flex items-center h-full"><a href="#articales" className="capitalize">articales</a></li>
          <li className="link flex items-center h-full"><a href="#clients" className="capitalize">clients</a></li>
          <li className="link flex items-center h-full"><a href="#sales" className="capitalize">sales</a></li>
          <li className="link flex items-center h-full"><a href="#contact" className="capitalize">contact</a></li>
        </ul>
        <div className="info">
          <span>+7(495) 764-26-14</span>
        </div>
      </nav>
    </div>
  )
}

export default navBar