import React from 'react'
import { Swiper, SwiperSlide , breakpoints} from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img1 from '../../src/imgs/man-1.jpg';
import img2 from '../../src/imgs/man-2.jpg';
import img3 from '../../src/imgs/woman-2.jpg';
import img4 from '../../src/imgs/woman-1.jpg';

import SecHeading from './SecHeading'


function Testimonial() {
  return (
    <div id="testimonial" className="testimonial">
      <SecHeading/>

      <div className="container">
        <Swiper
        modules={[Navigation, Pagination ]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
           slidesPerView: 2,
          },
          991: {
           slidesPerView: 3,
          },
        }}
      >
      
        <SwiperSlide>
          <div className="card border border-solid border-[#f4f4f4] shadow-xl p-4 pb-[1.5rem]">
            <div className="content flex flex-col items-start">
              <div className="profile flex items-center justify-start gap-x-3">
                <img className='w-[50px] rounded-full' src={img2} alt="" />
                <div className='flex flex-col'>
                  <h3>Name</h3>
                  <span className="text-base">join 2020</span>
                </div>
              </div>
              <p className='my-3 text-base	 text-slate-700'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ipsa,  
                eius explicabo, nesciunt labore quos quidem facilis, consequatur 
                laboriosam sequi! Vitae magnam modi blanditiis aspernatur nesciunt.
              </p>
              <a href="" className='text-orange capitalize'>profile</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card border border-solid border-[#f4f4f4] shadow-xl p-4">
            <div className="content flex flex-col items-start">
              <div className="profile flex items-center justify-start gap-x-3">
                <img className='w-[50px] rounded-full' src={img3} alt="" />
                <div className='flex flex-col'>
                  <h3>Name</h3>
                  <span className="text-sm">join 2020</span>
                </div>
              </div>
              <p className='my-3 text-base			 text-slate-700'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ipsa,  
                eius explicabo, nesciunt labore quos quidem facilis, consequatur 
                laboriosam sequi! Vitae magnam modi blanditiis aspernatur nesciunt.
              </p>
              <a href="" className='text-orange capitalize'>profile</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card border border-solid border-[#f4f4f4] shadow-xl p-4">
            <div className="content flex flex-col items-start">
              <div className="profile flex items-center justify-start gap-x-3">
                <img className='w-[50px] rounded-full' src={img4} alt="" />
                <div className='flex flex-col'>
                  <h3>Name</h3>
                  <span className="text-sm">join 2020</span>
                </div>
              </div>
              <p className='my-3 text-base			 text-slate-700'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ipsa,  
                eius explicabo, nesciunt labore quos quidem facilis, consequatur 
                laboriosam sequi! Vitae magnam modi blanditiis aspernatur nesciunt.
              </p>
              <a href="" className='text-orange capitalize'>profile</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card border border-solid border-[#f4f4f4] shadow-xl p-4">
            <div className="content flex flex-col items-start">
              <div className="profile flex items-center justify-start gap-x-3">
                <img className='w-[50px] rounded-full' src={img1} alt="" />
                <div className='flex flex-col'>
                  <h3>Name</h3>
                  <span className="text-sm">join 2020</span>
                </div>
              </div>
              <p className='my-3 text-base			 text-slate-700'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ipsa,  
                eius explicabo, nesciunt labore quos quidem facilis, consequatur 
                laboriosam sequi! Vitae magnam modi blanditiis aspernatur nesciunt.
              </p>
              <a href="" className='text-orange capitalize'>profile</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card border border-solid border-[#f4f4f4] shadow-xl p-4">
            <div className="content flex flex-col items-start">
              <div className="profile flex items-center justify-start gap-x-3">
                <img className='w-[50px] rounded-full' src={img1} alt="" />
                <div className='flex flex-col'>
                  <h3>Name</h3>
                  <span className="text-sm">join 2020</span>
                </div>
              </div>
              <p className='my-3 text-base			 text-slate-700'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ipsa,  
                eius explicabo, nesciunt labore quos quidem facilis, consequatur 
                laboriosam sequi! Vitae magnam modi blanditiis aspernatur nesciunt.
              </p>
              <a href="" className='text-orange capitalize'>profile</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card border border-solid border-[#f4f4f4] shadow-xl p-4">
            <div className="content flex flex-col items-start">
              <div className="profile flex items-center justify-start gap-x-3">
                <img className='w-[50px] rounded-full' src={img1} alt="" />
                <div className='flex flex-col'>
                  <h3>Name</h3>
                  <span className="text-sm">join 2020</span>
                </div>
              </div>
              <p className='my-3 text-base			 text-slate-700'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ipsa,  
                eius explicabo, nesciunt labore quos quidem facilis, consequatur 
                laboriosam sequi! Vitae magnam modi blanditiis aspernatur nesciunt.
              </p>
              <a href="" className='text-orange capitalize'>profile</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Testimonial;