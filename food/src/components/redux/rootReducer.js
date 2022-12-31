import cartReducer from './cart/cartReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    cartState: cartReducer
})

export default rootReducer;