import React, { useState } from 'react'
import Product from './Product'
import './Body.scss'
export default function Body() {
    const [products,setProducts] = useState([
        {
            img: 'https://th.bing.com/th/id/R.f746df7ea00962d55f4816940acd63ab?rik=BJMNNB28HUg3lA&pid=ImgRaw&r=0',
            name: "Thùy Tiên",
            infor:"Missgrand 2021",
            check: "Xem thông tin"
        },
        {
            img: 'https://th.bing.com/th/id/R.6c908793a5c3797a24ff85df2a9425c3?rik=nnmi9jMfY%2bgnvQ&pid=ImgRaw&r=0',
            name: "Thiên Ân",
            infor:"Missgrand 2020",
            check: "Xem thông tin"
        },
        {
            img: 'https://images2.thanhnien.vn/528068263637045248/2023/10/24/phuong-nhi-trong-thiet-ke-thanh-van-6-16981165946541042026404.jpg',
            name: "Phương Nhi",
            infor:"Á hậu 2021",
            check: "Xem thông tin"
        },
        {
            img: 'https://th.bing.com/th/id/R.96092b7c6202208b96f64154132305b1?rik=oiRhyfJcdswgxA&pid=ImgRaw&r=0',
            name: "Nancy",
            infor:"Idol KPop",
            check: "Xem thông tin"
        },
        {
            img: 'https://image-us.24h.com.vn/upload/3-2019/images/2019-07-19/1563469467-782-13-1563434427-width650height852.jpg',
            name: "Suzy",
            infor:"Idol KPop",
            check: "Xem thông tin"
        },
    ])
  return (
    <>  
    <div className='body'>
        <div className="listProduct">
            {products.map((e, i) => <div key={i}><Product products={e} /></div>)}
        </div>
    </div>
       
    </>
  )
}
