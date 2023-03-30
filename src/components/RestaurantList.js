import React from 'react'
import { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { listofrestaurant } from '../actions/restaurantListAction';
import { useDispatch,useSelector } from 'react-redux';


function RestaurantList() {
    //create state for holding restaurantlist
      // const [restaurantlist, setRestaurantList] = useState([])
    //apicall
    // const fetchdata = async () => {
    //     await fetch('/restaurants.json')
    //         .then((data) => data.json()
    //             .then(res => setRestaurantList(res.restaurants))
    //         )

    // }
    //to use dispatch hooks
    const dispatch =  useDispatch()
    
    //to get updated state from store
    const {restaurantlist} = useSelector((state)=>state.restListReducer)
    console.log(restaurantlist);
    

   //to load items or values when a component is created
    useEffect(() => {
    //   fetchdata()
    //dispatch action
    dispatch(listofrestaurant())
    }, [])

    //  console.log(restaurantlist);
    return (
        <Row>
        {
           restaurantlist.map(restaurant=>(
            <Col md={6} lg={4} xl={3}>
            {/* child */}
             <RestaurantCard item={restaurant}/>
            </Col>
           
           )) 
        }
        </Row>

    )
}

export default RestaurantList