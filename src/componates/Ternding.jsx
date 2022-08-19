import React, { useState  , useEffect} from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import myData from './data'; // gala
import SecHeading from './SecHeading'

function Trending() {

  const [menuItem, setMenuItem] = useState(myData); //data
  const [categoreis, setCategories] = useState([]); // cole
  const [activeLink, setActiveLink] = useState('All');

  useEffect(() => {
    setMenuItem(myData)
    setCategories([... new Set(myData.map((item) => item.title))]);
  },[])

  const filterCards = (itemData) => {
    const newData = myData.filter((item) => item.title === itemData);
    setMenuItem(newData)
  }

  return (
    <div id="ternding" className="ternding">
      <SecHeading/>
      <div className="container flex flex-col items-center">
        <ul className="menuTabs my-10 flex justify-center w-fit gap-x-[0.90rem] sm:gap-x-7 cursor-pointer">
          <li className={`tab ${activeLink == 'All' ? 'active' : ''}`} onClick={() => {setMenuItem(myData)
            setActiveLink('All')
          }}>All</li>
          {
            categoreis.map((item) => <li className={`tab ${activeLink == item ? 'active' : ''}`} onClick={() => {
              filterCards(item) 
              setActiveLink(item)}}
              >{item}</li> )
          }
        </ul>
        <div className="content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {
            menuItem.map((card) => {
              const { id, title, img, desc, price } = card;
              return (
                <div className="card border-solid border border-[#f4f4f4]	shadow-xl" key={id}>
                  <div className="img-holder">
                    <img src={img} />
                  </div>
                  <div className="desc p-5">
                    <h3 className="mb-2 text-xl font-medium">{title}</h3>
                    <p className="mb-2 text-slate-700">{desc}</p>
                    <span className="mb-2 inline-block">Author</span>
                    <div className='flex justify-between'>
                      <span className='text-2xl font-bold'>{price}</span>
                      <a href="" className='text-orange flex items-center'>Learn More <AiOutlineArrowRight className='ml-2'/> </a>
                    </div>
                  </div>
              </div>
              )
            })
          }
        </div>
        <button className="text-white bg-orange-500 px-[30px] py-[15px] my-10">learn More</button>
      </div>
   </div>
  )
}

export default Trending