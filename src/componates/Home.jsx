import React, { useState, useEffect, useRef } from "react";
import { FiMenu } from "react-icons/fi";

function Home() {
  const navLinks = ["home", "features", " articales", "sales", " contact"];

  const [activeLink, setActiveLink] = useState("");
  const [activeLinkMobile, setActiveLinkMobile] = useState("");
  const [showMobile, setShowMobile] = useState(false);

  const [scrollNavBar , setScrollNavBar] = useState(false);


  const scrollNav = () => {
    if(window.scrollY >= 66) {
      setScrollNavBar(true)
    } else {
      setScrollNavBar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollNav)
    console.log(scrollNavBar);
  })

  return (
    <>
    <header>
      {/* jj */}
    <nav className={`nav ${scrollNavBar ? 'fixed	 top-0	left-0' : 'absolute'}   flex justify-between items-center flex-nowrap  h-20 px-7 w-full border-b	 border-b-silver border-solid	z-50	`}>
        <div className={scrollNavBar ? 'blur1' : 'hidden'}></div>
        <a href="#" className="logo capitalize font-medium">
          elbrus
        </a>
        <ul className="links hidden sm:flex justify-center items-center h-full gap-x-5 ">
          {navLinks.map((link) => {
            return (
              <li
                className={`link flex items-center h-full`}
                data-active={activeLink == link ? "active" : ""}
              >
                <a
                  href={`#${link} `}
                  className="capitalize text-white"
                  onClick={() => setActiveLink(link)}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="info">
          <span className="number hidden sm:flex text-white">+7(495) 764-26-14</span>
        </div>
        <button
          className="btn-menu cursor-pointer text-white text-2xl  flex sm:hidden"
          onClick={() => {
            setShowMobile(!showMobile);
          }}
        >
          {" "}
          <FiMenu/>{" "}
        </button>
      </nav>
    </header>
    <div
        className={`mobile-nav fixed w-full top-[81px] h-fit z-50 bg-[#06000099] border-b	 border-b-silver border-solid	${
          showMobile ? "block" : "hidden"
        }`}
      >
        <ul className="links">
          {navLinks.map((link) => {
            return (
              <li
                className={`link flex items-center h-full p-3 `}
                data-active={activeLink == link ? "active" : ""}
              >
                <a
                  href={`#${link}`}
                  className="capitalize  flex-1 text-white"
                  onClick={() => setActiveLinkMobile(link)}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    <div id="home" className="home flex flex-col">
      <div className="home-content">
        <div className="container md:container  absolute top-2/4 left-2/4 flex flex-col justify-start px-3 sm:px-9 gap-y-10	">
          <div className="headings w-[500px] max-w-[100%]">
          <h1 className="main-title text-slate-50 font-bold	text-5xl capitalize">Real estate professional team</h1>
          <p className=" text-gray-300	my-4 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum velit expedita sit hic impedit. Nobis quisquam debitis sint dignissimos ad!</p>
          </div>
           <button className="main-btn w-[190px] h-[45px] cursor-pointer capitalize bg-amber-600 text-white	font-normal	break-normal p-2 ">To get the consultation</button>
            <div className="boxs flex">
              <div className="box w-4/12 sm:w-[15%] flex flex-col items-start text-slate-50	">
                <span className="nubmer mb-2"><b className="text-2xl">20</b></span>
                <span>Lorem ipsum</span>
              </div>
              <div className="box w-4/12 sm:w-[15%] pl-4 flex flex-col items-start border-x-2 border-x-solid border-x-[#f4f4f4] text-slate-50	">
                <span className="nubmer mb-2"><b className="text-2xl">15</b></span>
                <span>Lorem ipsum</span>
              </div>
              <div className="box w-4/12 sm:w-[15%] pl-4 flex flex-col items-start text-slate-50">
                <span className="nubmer mb-2"><b className="text-2xl">30</b></span>
                <span>Lorem ipsum</span>
              </div>
            </div>
        </div>
      </div>
    </div>
      <div className="overlay"></div>
    </>
  );
}

export default Home;
