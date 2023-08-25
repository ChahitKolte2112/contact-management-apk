import { configureStore } from "@reduxjs/toolkit";

import contactdataSlice from "./contactdataSlice";
const store = configureStore({
    reducer: { details: contactdataSlice },
});

export default store;
