import { combineReducers,configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import usersReducer from "./slices/usersSlice";
import postsReducer from "./slices/postSlices";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const reducers = combineReducers({
  users: usersReducer,
  posts: postsReducer
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;