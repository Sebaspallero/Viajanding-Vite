import { useState } from "react";
import { createSlice } from "@reduxjs/toolkit";

/* const [user, setUser] = useState(null) */

const initialState = {
    user: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserOnStore: (state, action) => {
        const user = action.payload;
            state.user = user
        },
    }
})

export const {setUserOnStore} = userSlice.actions
export default userSlice.reducer