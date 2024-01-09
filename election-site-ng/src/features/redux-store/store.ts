import { configureStore } from "@reduxjs/toolkit";
import User_Profile from "./user-profile/User_Profile";

const store = configureStore({
    reducer:{
        user: User_Profile
    }
})
export type rootState = ReturnType<typeof store.getState>
export type rootDispatch = typeof store.dispatch
export default store
