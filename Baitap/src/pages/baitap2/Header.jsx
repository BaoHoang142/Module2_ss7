import React from 'react'
import './Header.scss'
import { AiFillCaretDown } from "react-icons/ai";
export default function Header() {
  return (
    <>
    <div className="header">
      <nav ><a href="" className='nav--link'><strong>Example Site</strong></a></nav>
      <nav ><a href="" className='nav--link'>Home</a></nav>
      <nav ><a href="" className='nav--link'>Link</a></nav>
      <select >
          <option value="">Drop-down  <AiFillCaretDown color='white'></AiFillCaretDown></option>
          <option value="">Mẫu 1</option>
          <option value="">Mẫu 2</option>
          <option value="">Mẫu 3</option>

        </select>
    </div>
    
    </>
  )
}
