import React from 'react'
import './Login.scss'
// import { AiFillAccountBook } from "react-icons/ai";
// import Button from 'react-bootstrap/Button';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Login() {
  return (
    <>
    {/* 
    Quy tắc BEM:Block Element modifier
    
    
    
    
    
    */}
    <div className="login">
        <div className="login__name">
            
            {/* <AiFillAccountBook className='icon'></AiFillAccountBook> */}
            <input className='login--input' type="text" />
        </div>
        <div className="login__email">
            <input className='login--input' type="text" />
        </div>
        <div className="login__password">
            <input className='login--input' type="text" />
        </div>
        <div className="login__login">
            <Button variant='contained'>Login</Button>
            <Button>Login</Button>
            <Button>Login</Button>
            <Button variant='outlined' endIcon= {<DeleteIcon color='success'></DeleteIcon>} >Delete</Button>
            
        </div>
    </div>
    </>
  )
}
