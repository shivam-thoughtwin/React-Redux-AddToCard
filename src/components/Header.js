import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge'
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { DLT } from '../redux/actions/action';



const Header = () => {

  const [totalPrice, setTotalPrice] = useState(0);
  console.log(totalPrice,"total")
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata, "datafromredux");

  const dispatch = useDispatch();

  const deleteData = (id) =>{
    // console.log(id,"deleteid")
    dispatch(DLT(id))
  }

  const total = () =>{
    let tprice = 0;
    getdata.map((elem,key)=>{
      tprice = elem.price * elem.qunt + tprice
    })
    setTotalPrice(tprice);
  }

  useEffect(()=>{
    total();
  },[total])

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: '60px', position: 'fixed', width: '100%', top: '0', zIndex: '999' }}>
        <Container>

          <NavLink to="/" className="text-decoration-none text-light mx-3">Add to Card</NavLink>
          <Nav className="me-auto">
            <NavLink to="/cart" className="text-decoration-none text-light">cart</NavLink>
          </Nav>

          <div>
            <Dropdown style={{ marginRight: '10rem' }}>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: '25px', cursor: 'pointer' }}></i>
                { (getdata.length) ?  <Badge bg="secondary">{getdata.length}</Badge> : '' }
              </Dropdown.Toggle>
              
              <Dropdown.Menu>

                {
                  getdata.length ?
                    <div className='card_details' style={{ width: '30rem', padding: 10 }}>
                      <Table>
                        <thead>
                          <tr>
                            <th>Photo</th>
                            <th>Restaurant Name</th>
                          </tr>
                        </thead>
                        <tbody>

                          {
                            getdata.map((elem) => {
                              return (
                                <>
                                  <tr>
                                    <td>
                                      <NavLink to={`/cart/${elem.id}`}><img className='modalImg' src={elem.imgdata} alt='imgdata' /></NavLink>
                                    </td>
                                    <td>
                                      <p>{elem.rname}</p>
                                      <p>Price: ₹{elem.price}</p>
                                      <p>Quantity: {elem.qunt}</p>
                                    </td>
                                    <td>
                                      <p onClick={()=> deleteData(elem.id)}>
                                        <i className='fas fa-trash'></i>
                                      </p>
                                    </td>
                                  </tr>
                                </>
                              )
                            })
                          }
                          <p className='text-center mt-3'>Total: <strong> ₹{totalPrice}</strong></p>
                        </tbody>
                      </Table>
                    </div>
                    :
                    <div className='card_details d-flex justify-content-center align-item-center' style={{ width: "22rem", padding: 10, position: 'relative' }}>
                      {/* <i class="fa-solid fa-xmark closeIcon"></i> */}
                      <p style={{ fontSize: 22 }}>Your Card is Empty.</p>
                    </div>
                }

              </Dropdown.Menu>
            </Dropdown>

          </div>


        </Container>

      </Navbar>
    </>
  )
}

export default Header