import React from 'react'
import MenuItems from './MenuItems'

function Menu({ items }) {
  return (
    <div className="sec-cards">
      {
        items.map((MenuItem) => {
          const {id , title , img , desc} = MenuItem;
          
        })
      }
    </div>
  )
}

export default Menu