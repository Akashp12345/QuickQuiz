import { configureStore } from "@reduxjs/toolkit";
import dataslice from "./Reducer"
const store=configureStore({
    reducer:{
        data:dataslice
    }
})
export default store