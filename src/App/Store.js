import { configureStore } from "@reduxjs/toolkit";
import textReducer from '../features/TextSlice'

export default configureStore({
    reducer: {
        displayText: textReducer,
    },
});