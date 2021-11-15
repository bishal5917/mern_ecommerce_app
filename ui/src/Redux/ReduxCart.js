import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 1,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity
        }
        ,
        removeCart: (state, action) => {
            state.products =state.products.filter((item)=>item.name!==action.payload.name)
            }
    }
})

export const { addProduct,removeCart } = cartSlice.actions
export default cartSlice.reducer