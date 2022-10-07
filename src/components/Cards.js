import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Cardsdata } from './CardsData';
import {ADD} from '../redux/actions/action';

const Cards = () => {

  const [data, setData] = useState(Cardsdata);

  const dispatch = useDispatch();

  const sendData = (elm) =>{
    console.log(elm,"elementData");
    dispatch(ADD(elm))
  }

  return (
    <div className='container mt-3 '>
      <h2 className='text-center'>Add To Card</h2>

      <div className='row mt-5'>
        {data.map((element) => (
          <Card className='mx-3 mt-4' style={{ width: '25rem' }}>
            <Card.Img variant="top" src={element.imgdata} style={{ height: '20rem' }} className="mt-3" />
            <Card.Body>
              <Card.Title>{element.rname}</Card.Title>
              <Card.Text>
                <p>Price:  <b className='ml-2'>₹{element.price}</b></p>
                {element.addrss}
              </Card.Text>
              <div className='button_div d-flex justify-content-center'>
                <Button onClick={()=>sendData(element)} className='col-lg-12' variant="primary">Add to Cart</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Cards