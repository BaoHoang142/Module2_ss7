import React from 'react'
import './Footer.scss'
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
export default function Footer() {
  return (
    <>
    <div className="footer">
        <p>Top những người nổi tiếng trên thế giới</p>
        <p>Follow chúng tôi để biết nhiều hơn</p>
        <div className="navbar">
            <span><AiOutlineFacebook className='icon'></AiOutlineFacebook>  <a href="">Facebook</a></span>
            <span><AiOutlineInstagram className='icon'></AiOutlineInstagram>  <a href="">Instagram</a></span>
            <span><AiFillTwitterSquare className='icon'></AiFillTwitterSquare>  <a href="">Twitter</a></span>
        </div>
    </div>



    </>
  )
}
