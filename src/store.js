import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restaurantListReducer } from "./reducers/restaurantListReducer";

const reducers = combineReducers({
restListReducer:restaurantListReducer
})
const middleware = [thunk]
const store = createStore(reducers,applyMiddleware(...middleware))
export default store