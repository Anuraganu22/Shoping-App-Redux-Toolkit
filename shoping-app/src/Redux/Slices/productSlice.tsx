import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// initial state 
const initialState = {
    products: []
}
//creating slice
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // creating action
        addProducts: (state, { payload }) => {
            state.products = payload
        }
    }
});
export const { addProducts } = productSlice.actions
export const getAllproducts = (state:RootState) => state.products
export default productSlice.reducer;