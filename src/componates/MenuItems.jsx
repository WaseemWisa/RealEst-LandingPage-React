import React, { useState } from 'react'
import items from './data';

function MenuItems() {

  const [menuItem, setMenuItem] = useState(items);
  const [categoreis, setCategories] = useState([])

  return (
    <div id="sales" className="sales">
      <div className="headings w-[500px] max-w-[100%]">
        <h1 className="main-title text-slate-50 font-bold	text-5xl capitalize">Real estate professional team</h1>
        <p className=" text-gray-300	my-4 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum velit expedita sit hic impedit. Nobis quisquam debitis sint dignissimos ad!</p>
      </div>
      <div className="container">
        <ul className="menuTabs">
          <li className="tab">All</li>
          <li className="tab">Plots</li>
          <li className="tab">Privte Sectore</li>
          <li className="tab">Commercial</li>
        </ul>
        <div className="content grid">
          {
            items.map((card) => {
              const {id , title , category , price , img , desc} = card;
              <div className="card">
                <div className="img-holder">
                  <img  className='w-full' src={img} alt={title} />
                </div>
                <div className="desc">
                  <h3>{title}</h3>
                  <span>Author</span>
                  <div>
                    <span>{price}</span>
                    <a href="">Learn More</a>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default MenuItems