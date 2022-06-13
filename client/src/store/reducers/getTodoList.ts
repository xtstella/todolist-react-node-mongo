import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface GetTodoListState {
}

const initialState: GetTodoListState = {
};

const getTodoListSlice = createSlice({
  name: "getTodoList",
  initialState,
  reducers: {},
});

export const { reducer: getTodoListReducer } = getTodoListSlice;