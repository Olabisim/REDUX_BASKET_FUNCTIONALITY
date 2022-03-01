import React from 'react'
import { useDispatch } from 'react-redux';
import { removeProductFromBasket, quantityHandler } from './basketSlice';

const BasketItem = ({id, name, quantity, price}) => {

        const dispatch = useDispatch()

        const handleQuantity = () => {
                quantity++;
        }

        const handleIncrementQuantity = () => {
                
                dispatch(quantityHandler({quantity}));
                console.log(quantity)
                
        }

        return (
                <div key={id}>
                                                
                        <p>NAME: {name}</p>
                        <p onClick={handleQuantity} >QUANTITY: {quantity}</p>
                        <button onClick={handleIncrementQuantity}>+</button>
                        <button onClick={handleIncrementQuantity}>-</button>
                        <p>PRICE: {price}</p>

                        <button onClick={()=> dispatch(removeProductFromBasket({id}))}>REMOVE {name}</button>
                        <hr />
                        <hr />
                </div>

        )

}

export default BasketItem;