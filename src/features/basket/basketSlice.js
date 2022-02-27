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
                                state.products.push(action.payload)
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

                removeProductFromBasket : (state, action) => {
                        const { id } = action.payload;
                        console.log("id", id)
                        let filtered = state.products.filter(product => product.id === id);
                        console.log(filtered)
                }

        }

})

export const {addProductToBasket, removeProductFromBasket} = basketSlice.actions;

export default basketSlice.reducer;
