import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/contacts');
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      toast.success(`${data.name} added to your contact list`);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ _id, name, phone, email }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/contacts/${_id}`, {
        name,
        phone,
        email,
      });
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async ({ _id, name }, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${_id}`);
      toast.success(`Contact ${name} was deleted`);
      return _id;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);
