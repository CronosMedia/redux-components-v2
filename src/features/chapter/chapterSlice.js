import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

export const chapterSlice = createSlice({
	name: 'chapters',
	initialState,
	reducers: {
		ADD_CHAPTER: (state, action) => {
			state.push(action.payload);
		},
		prepare: (chapter, url, siteName, time) => {
			return {
				payload: {
					id: nanoid(),
					chapter,
					url,
					siteName,
					time,
				},
			};
		},

		DELETE_CHAPTER: (state) => {
			state.pop();
		},
	},
});

export const { ADD_CHAPTER, DELETE_CHAPTER } = chapterSlice.actions;
export default chapterSlice.reducer;
