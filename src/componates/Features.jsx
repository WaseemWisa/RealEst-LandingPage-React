import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import ShowTexFun from "./ShowTexFun";
import SecHeading from './SecHeading'



function Features() {
  
 return (
    <>
      <div id="features" className="features">
        <div className="container md:container">
          <SecHeading/>
          <div className="boxs flex flex-col sm:flex-row gap-x-10 justify-center items-start mt-9 flex-wrap">
            <div className="box min-w-[80px]  flex flex-col flex-1 items-center sm:items-start p-2">
              <span className="icon mb-2 text-[#f48c06] text-[3.4rem]">
                <AiFillHome />
              </span>
              <div className="desc text-center sm:text-start">
                <h4 className="box-title capitalize text-xl	 font-medium mb-1">
                  title name
                </h4>
                <ShowTexFun childern='Lorem ipsum dolor sit amet consectetur adipisicing elit.voluptatum Praesentium hic delectus voluptas, itaque veritati  totam explicabo'/>

              </div>
            </div>
            <div className="box min-w-[80px] flex flex-col flex-1 items-center sm:items-start p-2">
              <span className="icon mb-2 text-[#f48c06] text-[3.4rem]">
                <AiFillHome />
              </span>
              <div className="desc text-center sm:text-start">
                <h4 className="box-title capitalize text-xl	 font-medium mb-1">
                  title name
                </h4>
                <ShowTexFun childern='Lorem ipsum dolor sit amet consectetur adipisicing elit.voluptatum Praesentium hic delectus voluptas, itaque veritati  totam explicabo'/>
              </div>
            </div>
            <div className="box min-w-[80px] flex flex-col flex-1 items-center sm:items-start p-2">
              <span className="icon mb-2 text-[#f48c06] text-[3.4rem]">
                <AiFillHome />
              </span>
              <div className="desc text-center sm:text-start">
                <h4 className="box-title capitalize text-xl	 font-medium mb-1">
                  title name
                </h4>
                <ShowTexFun childern='Lorem ipsum dolor sit amet consectetur adipisicing elit.voluptatum Praesentium hic delectus voluptas, itaque veritati  totam explicabo'/>
              </div>
            </div>
            <div className="box min-w-[80px] flex flex-col flex-1 items-center sm:items-start p-2">
              <span className="icon mb-2 text-[#f48c06] text-[3.4rem]">
                <AiFillHome />
              </span>
              <div className="desc text-center sm:text-start">
                <h4 className="box-title capitalize text-xl	 font-medium mb-1">
                  title name
                </h4>
                   <ShowTexFun childern='Lorem ipsum dolor sit amet consectetur adipisicing elit.voluptatum Praesentium hic delectus voluptas, itaque veritati  totam explicabo'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
