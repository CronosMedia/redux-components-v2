import { configureStore } from '@reduxjs/toolkit';
import chapterSlice from '../features/chapter/chapterSlice';
import modalSlice from '../features/modal/modalSlice';
import answerSlice from '../features/question/answerSlice';
import showHideQuestionsSlice from '../features/question/questionSlice';

export const store = configureStore({
	reducer: {
		chapters: chapterSlice,
		modal: modalSlice,
		question: showHideQuestionsSlice,
		answers: answerSlice,
	},
});
