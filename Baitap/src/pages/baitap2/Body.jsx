import React, { useId, useState } from 'react'
import './Body.scss'
import Product from './Product'
import Cart from './Cart'
import { v4 as uuidv4 } from 'uuid';

export default function Body() {
    const [products,setProducts] = useState([
        {
            img: 'https://th.bing.com/th/id/R.f746df7ea00962d55f4816940acd63ab?rik=BJMNNB28HUg3lA&pid=ImgRaw&r=0',
            name: "Thùy Tiên",
            infor:"Missgrand 2021",
            date: "23/9/1998",
            quantity: 0,
            price: 30000,
            body: "90-60-120",
            id:uuidv4()
        },
        {
            img: 'https://th.bing.com/th/id/R.6c908793a5c3797a24ff85df2a9425c3?rik=nnmi9jMfY%2bgnvQ&pid=ImgRaw&r=0',
            name: "Thiên Ân",
            date: "12/2/1999",
            quantity: 0,
            price: 18000,
            body: "80-60-100",
            infor:"Missgrand 2020",
            id:uuidv4()
        },
        {
            img: 'https://images2.thanhnien.vn/528068263637045248/2023/10/24/phuong-nhi-trong-thiet-ke-thanh-van-6-16981165946541042026404.jpg',
            name: "Phương Nhi",
            infor:"Á hậu 2021",
            date: "22/2/2000",
            quantity: 0,
            price: 15000,
            body: "100-60-130",
            id:uuidv4()
        },
        {
            img: 'https://th.bing.com/th/id/R.f746df7ea00962d55f4816940acd63ab?rik=BJMNNB28HUg3lA&pid=ImgRaw&r=0',
            name: "Thùy Tiên",
            infor:"Missgrand 2021",
            date: "23/9/1998",
            quantity: 0,
            price: 30000,
            body: "90-60-120",
            id:uuidv4()
        },
        {
            img: 'https://th.bing.com/th/id/R.6c908793a5c3797a24ff85df2a9425c3?rik=nnmi9jMfY%2bgnvQ&pid=ImgRaw&r=0',
            name: "Thiên Ân",
            date: "12/2/1999",
            quantity: 0,
            price: 18000,
            body: "80-60-100",
            infor:"Missgrand 2020",
            id:uuidv4()
        },
        {
            img: 'https://images2.thanhnien.vn/528068263637045248/2023/10/24/phuong-nhi-trong-thiet-ke-thanh-van-6-16981165946541042026404.jpg',
            name: "Phương Nhi",
            infor:"Á hậu 2021",
            date: "22/2/2000",
            quantity: 0,
            price: 15000,
            body: "100-60-130",
            id:uuidv4()
        },
        {
            img: 'https://th.bing.com/th/id/R.f746df7ea00962d55f4816940acd63ab?rik=BJMNNB28HUg3lA&pid=ImgRaw&r=0',
            name: "Thùy Tiên",
            infor:"Missgrand 2021",
            date: "23/9/1998",
            quantity: 0,
            price: 30000,
            body: "90-60-120",
            id:uuidv4()
        },
        {
            img: 'https://th.bing.com/th/id/R.6c908793a5c3797a24ff85df2a9425c3?rik=nnmi9jMfY%2bgnvQ&pid=ImgRaw&r=0',
            name: "Thiên Ân",
            date: "12/2/1999",
            quantity: 0,
            price: 18000,
            body: "80-60-100",
            infor:"Missgrand 2020",
            id:uuidv4()
        },
        {
            img: 'https://images2.thanhnien.vn/528068263637045248/2023/10/24/phuong-nhi-trong-thiet-ke-thanh-van-6-16981165946541042026404.jpg',
            name: "Phương Nhi",
            infor:"Á hậu 2021",
            date: "22/2/2000",
            quantity: 0,
            price: 15000,
            body: "100-60-130",
            id:uuidv4()
        },
       
    ])
    const [carts,setCarts] = useState([])
    const chooseProduct = (id)=>{
        let index = products.find((e)=>{
            return e.id == id
        })
        index.quantity=1
        let i = carts.indexOf(index)
        if (i == -1) {
            setCarts([...carts,index])
        } else {
            alert("Đã hết hàng")
        }
    }
    // cong tru
    const upCount = (id)=>{
        let item = carts.findIndex((e)=>{
            return e.id==id
        })
        let arr = [...carts]
        arr[item].quantity=arr[item].quantity+1
        setCarts(arr)
    }
    const downCount = (id)=>{
        let item = carts.findIndex((e)=>{
            return e.id==id
        })
        let arr = [...carts]
        if (arr[item].quantity!=0) {
            arr[item].quantity=arr[item].quantity-1  
        } else if (arr[item].quantity==0) {
            arr.splice(item,1)
        }
        setCarts(arr)
    }
    //xoa
    // let count = carts.filter((e)=>{
    //     return e.
    // })
    //làm mới giỏ hàng
    const resetProducts =()=>{
        products.forEach((p)=>(p.quantity=0))
        setProducts([...products])
        setCarts([])
    }
    // console.log(carts);
        
    
  return (
    <>
    <div className="listProduct">
        {products.map((e,i)=> <div key={i}><Product products={e}  add={chooseProduct}></Product></div> )}
    </div>
    <Cart cart={carts} dre ={upCount} cre ={downCount} reset={resetProducts}  ></Cart>
    </>
  )
}
