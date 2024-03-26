import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    post : []
}

const postSlice = createSlice({
    name : 'post',
    initialState,
    reducers: {
        getAllPost : (state,action) => {
            state.post = action.payload
        }
    }
})

export const {getAllPost} = postSlice.actions;

export default postSlice.reducer;