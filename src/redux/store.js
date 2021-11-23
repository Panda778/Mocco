import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";

export const store = configureStore({
    reducer: {
        users: userSlice
    }
})

export const base_url ="https://jsonplaceholder.typicode.com/"