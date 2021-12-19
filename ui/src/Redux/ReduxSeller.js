import { createSlice } from '@reduxjs/toolkit'

const sellerSlice = createSlice(
    {
        name: "seller",
        initialState: {
            currseller: JSON.parse(localStorage.getItem('seller')),
            isFetching: false,
            error: false
        },
        reducers: {
            sellerloginStart: (state) => {
                state.isFetching = true;
            },
            sellerloginSuccess: (state, action) => {
                state.isFetching = false;
                state.curruser = action.payload
            },
            sellerloginFailure: (state) => {
                state.isFetching = false;
                state.error = true
            },
            logoutSeller: (state) => {
                state.curruser = null;
                localStorage.removeItem('seller')
            },
        }
    }
)

export const { sellerloginStart, sellerloginSuccess, sellerloginFailure} = sellerSlice.actions
export default sellerSlice.reducer