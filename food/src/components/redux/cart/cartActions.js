const addItem = (products) => {
    return{
        type: 'ADD_ITEM',
        payload: products
    }
}

const removeItem = (products) => {
    return{
        type: 'REMOVE_ITEM',
        payload: products
    }
}

const increase = (products) => {
    return{
        type: 'INCREASE',
        payload: products
    }
}

const decrease = (products) => {
    return{
        type: 'DECREASE',
        payload: products
    }
}

const checkout = () => {
    return{
        type: 'CHECKOUT'
    }
}

const clear = () => {
    return{
        type: 'CLEAR'
    }
}

export {addItem, removeItem, increase, decrease, checkout, clear};