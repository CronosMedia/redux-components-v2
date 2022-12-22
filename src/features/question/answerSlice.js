import { createSlice, nanoid } from '@reduxjs/toolkit';
import React from 'react';

const initialState = [];

export const answerSlice = createSlice({
	name: 'answers',
	initialState,
	reducers: {
		ADD_ANSWER: (state, action) => {
			state.push(action.payload);
		},
		// prepare: () => {
		// 	function insertInputField() {
		// 		const textInput = (
		// 			<input
		// 				type="text"
		// 				className="text-input"
		// 				id="text-input"
		// 			/>
		// 		);
		// 		document.getElementById('text-input').innerHTML += textInput;
		// 	}

		// 	function insertValidation() {
		// 		const checkBox = (
		// 			<input
		// 				type="checkbox"
		// 				name=""
		// 				id="answer"
		// 				className="checkbox-square"
		// 			/>
		// 		);
		// 		document.getElementById('answer').innerHTML += checkBox;
		// 	}

		// 	return {
		// 		payload: {
		// 			id: nanoid(),
		// 			answerField: insertInputField,
		// 			validation: insertValidation,
		// 		},
		// 	};
		// },

		DELETE_ANSWER: (state) => {
			state.pop();
		},
	},
});

export const { ADD_ANSWER, DELETE_ANSWER } = answerSlice.actions;

export default answerSlice.reducer;
