import React, { useState } from 'react'
import './Product.scss'
export default function Product({products}) {
   console.log(products);
  return (
    <>
        <div className="productList">
            <div className="img">
                <img src={products.img} alt="" />
            </div>
            <div className='infor'>  
                <h4>{products.name}</h4>
                <p><i>{products.infor}</i></p>
                <button>{products.check}</button>
            </div>
           
        </div>
    </>
  )
}
