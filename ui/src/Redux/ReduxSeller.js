import { createSlice } from '@reduxjs/toolkit'

const sellerSlice = createSlice(
    {
        name: "user",
        initialState: {
            currseller: null,
            isFetching: false,
            error: false
        },
        reducers: {
            loginStart: (state) => {
                state.isFetching = true;
            },
            loginSuccess: (state, action) => {
                state.isFetching = false;
                state.curruser = action.payload
            },
            loginFailure: (state) => {
                state.isFetching = false;
                state.error = true
            },
            logoutUser: (state) => {
                state.curruser=null;
            },
        }
    }
)

export const{loginStart,loginSuccess,loginFailure,logoutUser}=sellerSlice.actions
export default sellerSlice.reducer