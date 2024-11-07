import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
    name: 'displayText',
    initialState: {value: ""},
    reducers: {
        textR: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { textR } = textSlice.actions;
export default textSlice.reducer;   