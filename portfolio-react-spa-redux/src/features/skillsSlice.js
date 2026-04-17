import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: []
}

export const skillSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
      console.log(action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { add } = skillSlice.actions

export default skillSlice.reducer