import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";



const filterSlice = createSlice({
    name: 'filter',
    initialState: {filter: ""},
    reducers:{
        setFilter: {
            reducer (state, action){
                    state.filter = action.payload;
                },
            prepare (text) {
                return{
                    payload: text
                }
            }
        }
    }
});

const persistConfig = {
    key: 'filterReduxStorage',
    storage,
    blacklist: ['filter']
};

export const filterReducer = persistReducer(persistConfig, filterSlice.reducer);
export const {setFilter} = filterSlice.actions;