import { createSlice } from "@reduxjs/toolkit";
import { IListItem } from "../screens/ListScreen";

const itemSlice = createSlice({
    name: 'item',
    initialState: [],
    reducers: {
        addItem(state, action) {
            const payload: IListItem = action.payload;
            state.unshift(payload);
        },
        deleteItem(state, action) {
            state.splice(state.findIndex((singleItem: IListItem) => singleItem.id === action.payload), 1);
        },
        editItem(state, action) {
            const payload = action.payload;
            state.map((singleItem: IListItem) => {
                if (singleItem?.id === payload.id) {
                    singleItem.title = payload.title;
                    singleItem.description = payload.description;
                }
            })
        }
    }
})

export const { addItem, deleteItem, editItem } = itemSlice.actions;
export default itemSlice.reducer;