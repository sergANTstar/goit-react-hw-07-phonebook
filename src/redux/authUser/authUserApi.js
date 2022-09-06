import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'authUser/register',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error('Something went wrong. Try again!');
      const errorData = error.response;
      if (!errorData) {
        throw error;
      }
      if (errorData.status === 400) {
        return rejectWithValue('Error creating user!');
      }
      if (errorData.status === 404) {
        return rejectWithValue('Сonnection error 404!');
      }
      if (errorData.status === 500) {
        return rejectWithValue('Server error!');
      }
      return rejectWithValue('Unknown error!');
    }
  }
);

const logIn = createAsyncThunk(
  'authUser/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', userData);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error("This didn't work. Try again!");
      const errorData = error.response;
      if (!errorData) {
        throw error;
      }
      if (errorData.status === 400) {
        return rejectWithValue('Authorization error!');
      }
      if (errorData.status === 404) {
        return rejectWithValue('Сonnection error 404!');
      }
      return rejectWithValue('Unknown error!');
    }
  }
);

const logOut = createAsyncThunk('authUser/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    toast.error("This didn't work.Try again!");
    const errorData = error.response;
    if (!errorData) {
      throw error;
    }
    if (errorData.status === 401) {
      return thunkAPI.rejectWithValue(
        'There is no header with authorization token!'
      );
    }
    if (errorData.status === 404) {
      return thunkAPI.rejectWithValue('Сonnection error 404!');
    }
    if (errorData.status === 500) {
      return thunkAPI.rejectWithValue('Server error!');
    }
    return thunkAPI.rejectWithValue('Unknown error!');
  }
});

const fetchCurrentUser = createAsyncThunk(
  'authUser/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.authUser.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('No CurrentUser');
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      toast.error("This didn't work. Try again!!!");
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;