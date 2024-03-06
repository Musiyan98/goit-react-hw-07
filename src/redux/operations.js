import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65e78f1253d564627a8f00a1.mockapi.io/';

export const fetchContact = createAsyncThunk('contact/fetchContacts', async (_, thunkApi) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contact/addContact', async (newContact, thunkApi) => {
  try {
    const response = await axios.post('/contacts', newContact);
    return response.data;
  } catch (error) {
    thunkApi.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
