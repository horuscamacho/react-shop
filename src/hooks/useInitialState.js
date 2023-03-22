import {useState} from "react";

const initialState = {
    cart: []
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFromCart = (payload, index) => {
        setState({
            ...state,
            cart: state.cart.filter((item, indexValue) => item.id !== payload && index !== indexValue)
        })
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}


export default useInitialState;