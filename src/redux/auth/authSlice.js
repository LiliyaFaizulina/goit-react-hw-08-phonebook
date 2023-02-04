import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  registerUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
  verifyUser,
} from './authOperation';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '', subscription: '', avatarUrl: '' },
    token: null,
    isLoading: false,
    isLoggedIn: false,
    error: null,
    isFetching: false,
  },
  extraReducers: {
    [registerUser.pending]: state => {
      state.isLoading = true;
      state.error = false;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.isLoading = false;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [verifyUser.pending]: state => {
      state.isLoading = true;
      state.error = false;
    },
    [verifyUser.fulfilled]: state => {
      state.isLoading = false;
    },
    [verifyUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [loginUser.pending]: state => {
      state.isLoading = true;
      state.error = false;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [logoutUser.pending]: state => {
      state.isLoading = true;
      state.error = false;
    },
    [logoutUser.fulfilled]: (state, { payload }) => {
      state.token = null;
      state.user = { name: '', email: '', subscription: '', avatarUrl: '' };
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [fetchCurrentUser.pending]: state => {
      state.isLoading = true;
      state.isFetching = true;
      state.error = false;
    },
    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isFetching = false;
    },
    [fetchCurrentUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      state.isFetching = false;
    },
  },
});

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
