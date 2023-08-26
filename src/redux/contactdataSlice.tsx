import { createSlice } from "@reduxjs/toolkit";
import { Contact } from "../utilis/interfaces";

import { original } from "immer";

const condata = localStorage.getItem("data");

let data;
if (condata !== null) {
    data = JSON.parse(condata);
}

const initialState = {
    data: condata ? data : [],
    selected: null,
};
const contactdataSlice = createSlice({
    name: "contactdata",
    initialState,
    reducers: {
        adddata(state: any, action) {
            let temp1: number = 0;
            if (state.data.length !== 0) {
                temp1 = state.data[state.data.length - 1].id + 1;
            }
            let temp: Contact = {
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                status: action.payload.status,
                id: temp1,
            };

            state.data = [...state.data, temp];
            localStorage.setItem("data", JSON.stringify(state.data));
        },
        deletedata(state: any, action) {
            let updateddata: Contact[] = state.data.filter(
                (da: any) => da.id !== action.payload
            );

            localStorage.setItem("data", JSON.stringify(updateddata));
            state.data = [...updateddata];
        },

        editData1(state: any, action) {
            let data: any = original(state.data);
            console.log(data);
            data = data.map((element: any, index: number) => {
                if (element?.id === action.payload.id) {
                    return {
                        ...element,
                        firstname: action.payload.firstname,
                        lastname: action.payload.lastname,
                        status: action.payload.status,
                    };
                }
                return element;
            });
            state.data = data;
            localStorage.setItem("data", JSON.stringify(state.data));
        },
    },
});
export const contactdataActions = contactdataSlice.actions;
export default contactdataSlice.reducer;
