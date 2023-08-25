import { createSlice } from "@reduxjs/toolkit";
import { Contact } from "../utilis/interfaces";
const condata = localStorage.getItem("data");
let data;
if (condata != null) {
    data = JSON.parse(condata);
}
console.log(condata);
const initialState = {
    data: condata ? data : [],
};
const contactdataSlice = createSlice({
    name: "contactdata",
    initialState,
    reducers: {
        adddata(state: any, action) {
            state.data = [...state.data, action.payload];
            localStorage.setItem("data", JSON.stringify(state.data));
        },
        deletedata(state: any, action) {
            let updateddata: Contact[] = state.data.filter(
                (da: any) => da.id !== action.payload.id
            );
            localStorage.setItem("data", JSON.stringify(updateddata));
            state.data = [...updateddata];
        },
        edit(state: any, action) {
            console.log(action);
            let upadatedata: Contact[] = state.data.map((da: any) => {
                //   /  if (da.id === action.id) {
                //     }
            });
        },
    },
});
export const contactdataActions = contactdataSlice.actions;
export default contactdataSlice.reducer;
