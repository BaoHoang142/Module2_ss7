import React from 'react';
import Button from 'react-bootstrap/Button';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BsCurrencyDollar } from "react-icons/bs";
import './Cart.scss'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Cart({cart,dre,cre,reset}) {
    let sumMoney = cart.reduce((a,b)=>{
        return a+b.price*b.quantity
    },0)
    // console.log(cart);
    // console.log(dre);
  return (
    <section className="vh-80" style={{ backgroundColor: "#fdccbc"}}>
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-80">
          <MDBCol>
            <p>
              <span className="h2">Danh sách người yêu thích </span>
              <span className="h4">(1 item in your choose)</span>
            </p>
            {cart?.map((e,i) => <MDBCard style={{backgroundColor:"#fff"}} className="mb-4" key={i}>
              <MDBCardBody className="p-4">
                <MDBRow className="align-items-center">
                  <MDBCol md="2">
                    <MDBCardImage
                      fluid
                      src={e.img}
                      alt="Generic placeholder image"
                    />
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Tên</p>
                      <p className="lead fw-normal mb-0">{e.name}</p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Năm sinh</p>
                      <p className="lead fw-normal mb-0">
                        {e.date}
                      </p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Số lượng</p>
                      <div className="count">
                        <Button variant="primary" className='btnn cre' onClick={()=>cre(e.id)}>-</Button>
                        <span>{e.quantity}</span>
                        <Button variant="primary" className='btnn cre' onClick={()=>dre(e.id)}>+</Button>
                    </div>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Số đo cơ thể</p>
                      <p className="lead fw-normal mb-0">{e.body}</p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Giá</p>
                      <p className="lead fw-normal mb-0"><BsCurrencyDollar style={{marginTop:'-2px'}}></BsCurrencyDollar>{e.price}</p>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>)}
            <MDBCard className="mb-5">
              <MDBCardBody className="p-4">
                <div className="float-end">
                  <p className="mb-0 me-5 d-flex align-items-center">
                    <span className="small text-muted me-2"><strong>Tổng số tiền:</strong></span>
                    <span className="lead fw-normal"><BsCurrencyDollar style={{marginTop:'-2px'}}></BsCurrencyDollar>{sumMoney}</span>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>
            <div className="d-flex justify-content-end">
              <MDBBtn size="lg" onClick={()=>reset()}>Làm mới</MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
