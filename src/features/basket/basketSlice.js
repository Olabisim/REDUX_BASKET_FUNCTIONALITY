import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

// https://flaviocopes.com/how-to-remove-item-from-array/ deep learning

const initialState = {

        products: [

                {   
                        id: '5safdfa',
                        name: "Mariam",
                        price: 4,
                        quantity: 5,
                        
                } 

        ]
        
}

const basketSlice = createSlice({

        name: "basket",

        initialState,

        reducers: {
                
                addProductToBasket: {
                        reducer ( state, action) {
                                state.products ? state.products.push(action.payload) : state.push(action.payload)
                        },
                        prepare (name, price) {
                                return { 
                                        payload: {
                                                id: nanoid(),
                                                name,
                                                price,
                                                quantity: 1,
                                        }

                                }
                        }
                },

                quantityHandler: (state, {payload}) => {
                       return payload.quantity = payload.quantity + 1;
                },

                removeProductFromBasket : ({products}, {payload: {id}}) => {
                        // const { id } = action.payload;
                        // console.log("id", id)


                        let filteredProducts = products.filter(product => product.id !== id);
                        

                        return Object.assign( {products : filteredProducts}, products);

                        
                        // return state.filter(todo => todo.id !== action.payload.id);
                        // console.log("filtered", filtered)
                        // state.products.push(filtered);
                }

        }

})

export const {addProductToBasket, removeProductFromBasket, quantityHandler} = basketSlice.actions;

export default basketSlice.reducer;
