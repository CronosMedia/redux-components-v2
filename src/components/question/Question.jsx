import React from 'react';

import { useDispatch } from 'react-redux';
import {
	HIDE_QUESTIONS,
	SHOW_QUESTIONS,
} from '../../features/question/questionSlice';
import './question.scss';
import QuestionBody from './QuestionBody';

const Question = () => {
	const dispatch = useDispatch();

	return (
		<div className="question-wrapper">
			<div className="question-header">
				<div className="left">
					<h2 className="question-title">Questions</h2>
					<div className="question-actions">
						<button
							className="btn"
							onClick={() => dispatch(SHOW_QUESTIONS())}>
							Show all
						</button>
						<button
							className="btn"
							onClick={() => dispatch(HIDE_QUESTIONS())}>
							Hide all
						</button>
					</div>
				</div>
				<div className="right">
					<span>Passmark (%)</span>
					<div className="question-score">45</div>
				</div>
			</div>

			<QuestionBody />
		</div>
	);
};

export default Question;
