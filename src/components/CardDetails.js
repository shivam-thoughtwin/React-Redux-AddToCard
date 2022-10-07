import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import { DLT, ADD, REMOVE } from '../redux/actions/action';


const CardDetails = () => {

  const [itemData, setItemData] = useState([]);

  const { id } = useParams();
  console.log(id, "urlId")

  const getdata = useSelector((state) => state.cartreducer.carts);

  const compare = () => {
    let compareData = getdata.filter((itemData) => {
      return itemData.id == id;
    });
    setItemData(compareData, "compareData")
  }

  const dispatch = useDispatch();
  const navigate = useNavigate()

  // Add Data
  const incrementData = (elm) =>{
    dispatch(ADD(elm))
  }

  const decrimentData = (item) =>{
    dispatch(REMOVE(item))
  }

  const deleteData = (id) => {
    dispatch(DLT(id))
    navigate('/');
  }

  useEffect(() => {
    compare();
  }, [id])


  return (
    <>

      <div style={{ marginTop: '8rem' }} className='container'>
        <h2 className='text-center'>Item Dtails Page</h2>

        <section className='cardDetailPage container mt-3'>
          <div className='itemsdetails d-flex justify-content-center'>

            {
              itemData.map((data) => {
                return (
                  <>
                    <div className='item_img'>
                      <img style={{ width: '25rem', height: '20rem' }} src={data.imgdata} alt='itemimg' />
                    </div>
                    <div style={{ marginLeft: '60px' }} className='details'>
                      <Table>
                        <tr>
                          <td>
                            <p><strong> Restaurant : </strong> {data.rname}</p>
                            <p><strong> Price : </strong> ₹{data.price}</p>
                            <p><strong> Dishes : </strong> {data.rname}</p>
                            <p><strong> Total : </strong> ₹{data.price * data.qunt}</p>
                            <div className='increBtn mt-5 d-flex justify-content-between align-item-center'>
                              <span onClick={ data.qunt <= 1 ? ()=> deleteData(data.id) : ()=> decrimentData(data)} style={{ fontSize: 24 }}>-</span>
                              <span style={{ fontSize: 22 }}>{data.qunt}</span>
                              <span onClick={()=> incrementData(data)} style={{ fontSize: 24 }}>+</span>
                            </div>
                          </td>
                          <td></td>
                          <td>
                            <p className='pTagStyle'><strong>Rating : </strong> <span style={{ background: 'green', color: '#fff', padding: '2px 5px', borderRadius: '5px' }}>{data.rating}★</span></p>
                            <p className='pTagStyle'><strong>Order Rating : </strong> <span>{data.domedata}</span></p>
                            <p onClick={() => deleteData(data.id)} className='pTagStyle d-flex'><strong>Remove : </strong> <i class="fa-solid fa-trash mr-5 ml-5"></i></p>
                          </td>
                        </tr>
                      </Table>
                    </div>
                  </>
                )
              })
            }


          </div>
        </section>

      </div>
    </>
  )
}

export default CardDetails