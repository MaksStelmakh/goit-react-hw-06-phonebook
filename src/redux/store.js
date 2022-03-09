import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer } from "@reduxjs/toolkit";

export const add = createAction("items/add");
export const remove = createAction("items/remove");
export const filter = createAction("element/filter");

const myReducer = createReducer(
  [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  {
    [add]: (state, action) => [...state, action.payload],
    [remove]: (state, action) =>
      state.filter((item) => item.id !== action.payload),
    [filter]: (state, action) =>
      state.filter((filter) =>
        filter.name.toLowerCase().includes(action.payload)
      ),
  }
);

export const store = configureStore({
  reducer: {
    myContacts: myReducer,
  },
});
