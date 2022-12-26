import cartReducer from './cart/cartReducer';
import {combineReducers} from 'redux';
import productsReducer from './products/productsReducer';

const rootReducer = combineReducers({
    cartState: cartReducer,
    productState: productsReducer
})

export default rootReducer;