import { configureStore } from '@reduxjs/toolkit'
import likeSlice from '../features/likeSlice'
import skillSlice from '../features/skillsSlice'

export const store = configureStore({
  reducer: {
    like : likeSlice,
    skills : skillSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch