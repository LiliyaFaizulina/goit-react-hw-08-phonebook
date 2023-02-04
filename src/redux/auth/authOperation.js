import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://contacts-app-lzd3.onrender.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/register', user);
      toast.success(
        'Registration was successfully! Verification letter was sent on your email'
      );
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue('This user already exist');
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', user);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue('Invalid password or email!');
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
      toast.success('Logout successful');
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { rejectWithValue, getState }) => {
    const tokenLS = getState().auth.token;
    if (!tokenLS) {
      return rejectWithValue('');
    }
    token.set(tokenLS);
    try {
      const { data } = await axios('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue('');
    }
  }
);

export const verifyUser = createAsyncThunk(
  'auth/verifyUser',
  async (email, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/verify', email);
      toast.success(data.message);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);
