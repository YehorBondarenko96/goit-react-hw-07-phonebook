import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://65a6916374cf4207b4f065ba.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async(_, thunkAPI) => {
    try{
        const result = await axios.get('/contacts');
        return result.data;
    } catch (e){
        return thunkAPI.rejectWithValue(e.message);
    }
});