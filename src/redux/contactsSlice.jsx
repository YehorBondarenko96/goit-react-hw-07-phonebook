import { createSlice, nanoid } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const contactsInitialState = [];

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {contacts: contactsInitialState},
    reducers: {
        addContact: {
            reducer (state, action){
                state.contacts.push(action.payload);
            },
            prepare (name, number){
                return {
                    payload: {
                        id: nanoid(),
                        name: name,
                        number: number
                    }
                }
            }
        },
        deleteContact (state, action){
            const indexContact = state.contacts.findIndex(contact => String(contact.id) === action.payload);
            if (indexContact !== -1) {
                state.contacts.splice(indexContact, 1);
            }
        }
    }
});

const persistConfig = {
    key: 'contactsReduxStorage',
    storage,
};

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const {addContact, deleteContact} = contactsSlice.actions;