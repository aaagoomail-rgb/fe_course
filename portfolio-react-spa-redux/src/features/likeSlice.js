import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
  list: []
}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
    increment: (state, action) => {
        state.count += 1;
        state.list.push(action.payload.title);
    },
    decrement: (state) => {
        state.count -= 1;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = likeSlice.actions

export default likeSlice.reducer