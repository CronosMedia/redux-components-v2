import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isOpen: true,
};

// SHOW_HIDE_QUESTIONS
const showHideQuestionsSlice = createSlice({
	name: 'showHideQuestions',
	initialState,
	reducers: {
		SHOW_QUESTIONS: (state, action) => {
			state.isOpen = true;
		},

		HIDE_QUESTIONS: (state, action) => {
			state.isOpen = false;
		},
	},
});

export const { SHOW_QUESTIONS, HIDE_QUESTIONS } =
	showHideQuestionsSlice.actions;

export default showHideQuestionsSlice.reducer;
