import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./state/tokenState";
export const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: e.g. {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
