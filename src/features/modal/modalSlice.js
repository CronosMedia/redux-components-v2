import { createSlice } from '@reduxjs/toolkit';

const initialState = { isOpen: false };

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		OPEN_MODAL: (state) => {
			state.isOpen = true;
		},
		CLOSE_MODAL: (state) => {
			state.isOpen = false;
		},
	},
});

export const { OPEN_MODAL, CLOSE_MODAL } = modalSlice.actions;
export default modalSlice.reducer;
