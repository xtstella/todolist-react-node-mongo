import { configureStore } from '@reduxjs/toolkit';
import { getTodoListReducer } from "./reducers/getTodoList";

const store = configureStore({
	reducer: {
		getTodoList: getTodoListReducer
	},
});

export default store;