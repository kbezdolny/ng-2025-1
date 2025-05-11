import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        totalPrice: 0,
        productsQuantity: 0,
        products: {}
    },
    reducers: {
        addProduct: (state, action) => {
            if (!action.payload)
                return

            const {id, quantity, price} = action.payload;

            if (state.products[id]) {
                state.products[id].quantity += quantity;
            } else {
                state.products[id] = {
                    id, quantity, price
                }
            }

            state.productsQuantity += quantity
            state.totalPrice += price * quantity
        },
        removeProduct: (state, action) => {
            if (!action.payload)
                return

            const id = action.payload;
            state.productsQuantity -= state.products[id].quantity
            state.totalPrice -= state.products[id].quantity * state.products[id].price
            state.products[id] = {}
        },
        clearCart: (state, action) => {
            state.productsQuantity = 0
            state.totalPrice = 0
            state.products = {}
        }
    }
})

export const {actions: cartActions, reducer: cartReducer} = cartSlice