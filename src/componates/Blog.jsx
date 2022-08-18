import React from 'react'
import img1 from '../imgs/img-4.jpg'
import img2 from '../imgs/img-5.jpg'
import img3 from '../imgs/img-6.jpg'
import SecHeading from './SecHeading'


function Blog() {
  return (
   <div id="blog" className="blog">
    <SecHeading/>
    <div className="container md:container  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
      <div className="box flex flex-col border-solid	border-2 border-[#f4f4f4]">
        <div className="img-holder max-h-[250px]">
          <img className="img h-full w-full" src={img1} alt="" />
        </div>
        <div className="desc p-3">
          <h4 className="desc-title text-lg text-black mb-2">Title Name</h4>
          <p className="deatils text-sm text-slate-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Laboriosam vel porro
          </p>

        </div>
      </div>
      <div className="box flex flex-col border-solid	border-2 border-[#f4f4f4]">
        <div className="img-holder max-h-[250px]">
          <img className="img h-full w-full" src={img2} alt="" />
        </div>
        <div className="desc p-3">
          <h4 className="desc-title text-lg text-black mb-2">Title Name</h4>
          <p className="deatils text-sm text-slate-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Laboriosam vel porro
          </p>
        </div>
      </div>
      <div className="box flex flex-col border-solid	border-2 border-[#f4f4f4]">
        <div className="img-holder max-h-[250px]">
          <img className="img h-full w-full" src={img3} alt="" />
        </div>
        <div className="desc p-3">
          <h4 className="desc-title text-lg text-black mb-2">Title Name</h4>
          <p className="deatils text-sm text-slate-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Laboriosam vel porro
          </p>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Blog