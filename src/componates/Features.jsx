import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import ShowTexFun from "./ShowTexFun";
import SecHeading from './SecHeading'



function Features() {
  
 return (
    <>
      <div id="features" className="features">
          <SecHeading/>
        <div className="container   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="box min-w-[80px]  flex flex-col flex-1 items-center p-2">
              <span className="icon mb-2 text-[#f48c06] text-[3.4rem]">
                <AiFillHome />
              </span>
              <div className="desc text-center">
                <h4 className="box-title capitalize text-xl	 font-medium mb-1">
                  title name
                </h4>
                <ShowTexFun childern='Lorem ipsum dolor sit amet consectetur adipisicing elit.voluptatum Praesentium hic delectus voluptas, itaque veritati  totam explicabo'/>
              </div>
            </div>
            <div className="box min-w-[80px]  flex flex-col flex-1 items-center p-2">
              <span className="icon mb-2 text-[#f48c06] text-[3.4rem]">
                <AiFillHome />
              </span>
              <div className="desc text-center">
                <h4 className="box-title capitalize text-xl	 font-medium mb-1">
                  title name
                </h4>
                <ShowTexFun childern='Lorem ipsum dolor sit amet consectetur adipisicing elit.voluptatum Praesentium hic delectus voluptas, itaque veritati  totam explicabo'/>
              </div>
            </div>
            <div className="box min-w-[80px]  flex flex-col flex-1 items-center p-2">
              <span className="icon mb-2 text-[#f48c06] text-[3.4rem]">
                <AiFillHome />
              </span>
              <div className="desc text-center">
                <h4 className="box-title capitalize text-xl	 font-medium mb-1">
                  title name
                </h4>
                <ShowTexFun childern='Lorem ipsum dolor sit amet consectetur adipisicing elit.voluptatum Praesentium hic delectus voluptas, itaque veritati  totam explicabo'/>
              </div>
            </div>
            <div className="box min-w-[80px]  flex flex-col flex-1 items-center p-2">
              <span className="icon mb-2 text-[#f48c06] text-[3.4rem]">
                <AiFillHome />
              </span>
              <div className="desc text-center">
                <h4 className="box-title capitalize text-xl	 font-medium mb-1">
                  title name
                </h4>
                <ShowTexFun childern='Lorem ipsum dolor sit amet consectetur adipisicing elit.voluptatum Praesentium hic delectus voluptas, itaque veritati  totam explicabo'/>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Features;
