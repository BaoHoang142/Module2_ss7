import React from 'react'
import './Header.scss'
import { AiFillCaretDown } from "react-icons/ai";
export default function Header() {
  return (
    <>
    <div className="header">
        <p className='header__intro'><strong>Example Site</strong></p>
        <p>Home</p>
        <p>Link</p>
        <p>Drop-down <AiFillCaretDown color='white'></AiFillCaretDown></p>
    </div>
    
    </>
  )
}
