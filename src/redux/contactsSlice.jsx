import { createSlice} from "@reduxjs/toolkit";
import { fetchContacts } from "./opertions";

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null
    };

const forPending = (state) => {state.isLoading = true};
const forRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    extraReducers: builder => {
        builder
        .addCase(fetchContacts.pending, forPending)
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, forRejected)
    }
});

export const contactsReducer = contactsSlice.reducer;

export const {addContact, deleteContact} = contactsSlice.actions;