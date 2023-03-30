import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestaurantCard({item}) {
  return (
    //card design to display restaurant crad
    <Link to={`/restaurantdetails/${item.id}`} style={{textDecoration:'none',color:'white'}}>
    <Card className='my-2 mx-3'>
      <Card.Img className='p-2' variant="top" src={item.photograph} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
            <p>Cusine:{item.cuisine_type}</p>
        </Card.Text>
        <Card.Text>
            <p>Neighborhood:{item.neighborhood}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default RestaurantCard