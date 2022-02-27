import React from 'react'
import { useDispatch } from 'react-redux';
import { removeProductFromBasket } from './basketSlice';

const BasketItem = ({id, name, quantity, price}) => {

        const dispatch = useDispatch()


        return (
                <div key={id}>
                                                
                        <p>NAME: {name}</p>
                        <p>QUANTITY: {quantity}</p>
                        <p>PRICE: {price}</p>

                        <button onClick={()=> dispatch(removeProductFromBasket({id}))}>REMOVE {name}</button>
                        <hr />
                        <hr />
                </div>

        )

}

export default BasketItem;