import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToBasket, removeProductFromBasket } from "./basketSlice";
import BasketItem from "./BasketItem";



const Basket = () => {

        const [name, setName] = useState("")
        const [price, setPrice] = useState(0)

        const dispatch = useDispatch();
        
        const products = useSelector(state => state.basket.products)

        const basket = useSelector(state => state.basket)

        // console.log(products)
        
        console.log(basket)
 
        const addProductHandler = () => {
                
                dispatch(
                        addProductToBasket( name, price )
                )
                // console.log("name", name, "price", price)
                setName("")
                setPrice("")
        }

        const onNameChange = (e) => {
                setName(e.target.value)
        }

        const onPriceChange = (e) => {
                setPrice(e.target.value)
        }


        return (
                <>
                        <h2 style={{textTransform: "uppercase", textAlign: "center"}}>basket reducer</h2>

                        <form>
                                <label>NAME</label>
                                <input 
                                        type="text" 
                                        value={name}
                                        onChange={onNameChange} 
                                />
                                <label>PRICE</label>
                                <input 
                                        type="text" 
                                        value={price}
                                        onChange={onPriceChange} 
                                />
                        </form>
                        
                        <button onClick={addProductHandler}>
                                ADD PRODUCT
                        </button>

                        <div>
                        {
                                products
                                &&
                                products.map((product) => (

                                        <BasketItem 
                                                id={product.id} 
                                                name={product.name} 
                                                quantity={product.quantity} 
                                                price={product.price} 
                                                key={product.id} 
                                        />
                                ))
                                

                        }
                        {       
                                // basket 
                                
                                // &&
                                
                                // basket.map((product) => (

                                //         <BasketItem 
                                //                 id={product.id} 
                                //                 name={product.name} 
                                //                 quantity={product.quantity} 
                                //                 price={product.price} 
                                //                 key={product.id} 
                                //         />
                                // ))
                        }
                                
                        </div>

                        
                </>
        )
}

export default Basket;
