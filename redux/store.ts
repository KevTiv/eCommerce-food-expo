import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from './state/tokenSlice'
import userReducer from './state/userSlice'
export const store = configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: e.g. {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
