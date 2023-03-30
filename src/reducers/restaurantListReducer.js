import {R_SUCCESS,R_FAIL} from '../constants/restaurantConstant'
export const restaurantListReducer = (state={restaurantlist:[]},action)=>{
    switch(action.type){
        case R_SUCCESS:
            return{restaurantlist:action.payload}
        case R_FAIL:
            return {restaurantlist:action.error}
         default:
            return state
    }
}