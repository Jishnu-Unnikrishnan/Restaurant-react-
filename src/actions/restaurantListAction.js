import axios from "axios";
import {R_SUCCESS,R_FAIL} from '../constants/restaurantConstant'

//action filess used define the logic for updating state for a perticular component
 export  const listofrestaurant = ()=>async(dispatch)=>{
   try {
    const {data} =await axios.get('/restaurants.json')
    console.log(data);
    dispatch({
        type:R_SUCCESS,
        payload:data.restaurants

    })
}
catch(error){
    dispatch({
        type:R_FAIL,
        error:error
    })

}
}