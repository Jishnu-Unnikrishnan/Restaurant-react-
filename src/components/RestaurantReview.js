import React from 'react'
import { useState } from 'react';
import { Card } from 'react-bootstrap'
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

function RestaurantReview({data}) {
  console.log(data);
  const [open, setOpen] = useState(false);
  return (
  <>
  <p>
    Client Reviews
  </p>
  {
    
    data.map((Client)=>(
      <Card className='border  m-2' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{Client.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{Client.date}</Card.Subtitle>
        <Card.Text>
        {Client.rating}
        </Card.Text>
        <Card.Text>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant='dark'
      >
        Comments
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        {Client.comments}
         
        </div>
      </Collapse>
      
          
        </Card.Text>
        
      </Card.Body>
    </Card>
    ))
  }
  </>
  )
}

export default RestaurantReview