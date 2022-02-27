import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToBasket, removeProductFromBasket } from "./basketSlice";



const Basket = () => {

        const [name, setName] = useState("")
        const [price, setPrice] = useState(0)

        const dispatch = useDispatch();
        
        const products = useSelector(state => state.basket.products)

        // console.log(products)
        
        useEffect(() => {

        }, [products])


        const addProductHandler = () => {
                
                dispatch(
                        addProductToBasket( name, price )
                )
                // console.log("name", name, "price", price)
                setName("")
                setPrice("")
        }

        const removeItem = (id) => (
                dispatch(removeProductFromBasket({id}))
        )

        let productContainer = products.map(product => (

                <div key={product.id}>
                
                        <p>NAME: {product.name}</p>
                        <p>QUANTITY: {product.quantity}</p>
                        <p>PRICE: {product.price}</p>

                        <button onClick={removeItem(product.id)}>REMOVE {product.name}</button>
                        <hr />
                        <hr />
                </div>

        ))

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
                                {products.map(product => (

                                        <div key={product.id}>
                                        
                                                <p>NAME: {product.name}</p>
                                                <p>QUANTITY: {product.quantity}</p>
                                                <p>PRICE: {product.price}</p>
                        
                                                <button onClick={()=> dispatch(removeProductFromBasket({id: product.id}))}>REMOVE {product.name}</button>
                                                <hr />
                                                <hr />
                                        </div>
                        
                                ))}
                                
                        </div>

                        
                </>
        )
}

export default Basket;
