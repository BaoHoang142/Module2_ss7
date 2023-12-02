import React from 'react'
import './HomePage.scss'
import ashe from '../../assets/images/Ashe_17.jpg'
export default function HomePage() {
  return (
    <div>
        HomePage
        <div className="img">
            <img src={ashe} alt="" />
        </div>
    </div>
  )
}
