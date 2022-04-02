import { createReducer } from "@reduxjs/toolkit";
import { add, remove, filter, saved } from "./action";

export const myReducer = createReducer(
  [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  {
    [saved]: (state, action) => action.payload,
    [add]: (state, action) => [...state, action.payload],
    [remove]: (state, action) =>
      state.filter((item) => item.id !== action.payload),
  }
);

export const filterReducer = createReducer("", {
  [filter]: (state, action) => action.payload,
});
