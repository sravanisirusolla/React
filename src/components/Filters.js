import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Rating from './Rating';
import { useState } from 'react';

const Filters = () => {
    const [rate, setrate] = useState(3)
  return (
    <div className='filters'>
        <span className='title'>Filter Products</span>
        <span>
        <Form.Check
            inline
            label="Ascending"
            name="group1"
            type="radio"
            id="ascending"
        />    
        </span>
        <span>
        <Form.Check
            inline
            label="Descending"
            name="group1"
            type="radio"
            id="descending"
        />    
        </span>
        <span>
        <Form.Check
            inline
            label="Include Out of stock"
            name="group1"
            type="checkbox"
            id="outofstock"
        />    
        </span>
        <span>
        <Form.Check
            inline
            label="Only fast Delivery"
            name="group1"
            type="checkbox"
            id="fastdelivery"
        />    
        </span>
        <span>
            <label style={{paddingRight:10}}>Rating:</label>
            <Rating rating={rate} onClick={(i)=>setrate(i+1)} style={{cursor:"pointer"}}/>
        </span>
        <Button variant="light">Clear Filters</Button>
    </div>

  )
}

export default Filters