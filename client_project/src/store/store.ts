import {configureStore} from "@reduxjs/toolkit";
import clientReducer from './reducer';

export const store = configureStore({
    reducer: {
        clients: clientReducer,
        
    }
})