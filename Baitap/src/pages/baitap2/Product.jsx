import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Product.scss'
export default function Product({products, add}) {
    console.log(add);
  return (
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={products.img} />
            <Card.Body>
                <Card.Title>{products.name}</Card.Title>
                <Card.Text>
                {products.infor}
                </Card.Text>
                <Button variant="primary" onClick={()=>add(products.id)}>Thêm vào giỏ hàng</Button>
            </Card.Body>
        </Card>
    </>
  )
}
