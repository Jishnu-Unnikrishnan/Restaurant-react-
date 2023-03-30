import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect} from 'react'
import { Row,Col } from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import RestaurantOP from './RestaurantOP'
import RestaurantReview from './RestaurantReview'
import { useSelector } from 'react-redux'
function RestaurantDetails() {
  //1.get restaurant id from url
  const urlParams =  useParams()
  console.log(urlParams);
      //create state for holding restaurantlist
      // const [restaurantlist, setRestaurantList] = useState([])
      //apicall
      // const fetchdata = async () => {
      //     await fetch('/restaurants.json')
      //         .then((data) => data.json()
      //             .then(res => setRestaurantList(res.restaurants))
      //         )
  
      // }
      const{restaurantlist} = useSelector((state)=>state.restListReducer)
      console.log(restaurantlist);
       //to load items or values when a component is created
    useEffect(() => {
     
  }, [ ])

 
  //5.find restaurant whose id is given in urlparams
  const restaurant = restaurantlist.find(item=>(
    item.id==urlParams.id
  ))
  console.log(restaurant);
  return (
    <div>
      {
        restaurant?(
          <Row className='my-3'>
          <Col md={3}>
          <Image className='border rounded mx-3' src={restaurant.photograph}fluid>
          </Image>
          </Col>
          <Col className='mx-3 ' md={8}>
          <ListGroup>
            <ListGroup>
              <h2>{restaurant.name}</h2>
              <p>{restaurant.neighborhood}</p>
            </ListGroup>
      <ListGroup.Item>
        <p>Cusine Type: {restaurant.cuisine_type}</p>
      </ListGroup.Item>
      <ListGroup.Item>
        <p>
          Address: {restaurant.address}
        </p>
      </ListGroup.Item>
      <ListGroup.Item>
        <RestaurantOP op={restaurant.operating_hours}/>
      </ListGroup.Item>
      <ListGroup.Item>
        <Row>
          <RestaurantReview data={restaurant.reviews}/>
        </Row>
      </ListGroup.Item>
    </ListGroup>
    </Col>
  
        </Row>
        ):'no data'
     
}

    </div>
  )
}

export default RestaurantDetails