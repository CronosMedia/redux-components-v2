import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ANSWER } from '../../features/question/answerSlice';

const QuestionForm = () => {
	const dispatch = useDispatch();
	const chapters = useSelector((state) => state.chapters);
	const answers = useSelector((state) => state.answers);

	return (
		<form action="">
			<label
				htmlFor="related-chapter"
				className="field-label">
				Related chapter
			</label>
			<select
				name="related-chapter"
				id="chapter-select"
				className="option-selector">
				<option value="">-- Select a chapter --</option>
				{chapters?.map((chapter) => (
					<option
						value="chapter-1"
						key={chapter.id}>
						{chapter.chapter}
					</option>
				))}
			</select>
			<label
				htmlFor="context"
				className="field-label">
				Context <em> (optional)</em>
			</label>
			<textarea
				name="context"
				id="question-context"
				cols="30"
				rows="5"
				className="text-area-input"></textarea>
			<label
				htmlFor=""
				className="field-label">
				Question
			</label>
			<input
				name=""
				type="text"
				className="text-input"
			/>

			<label
				htmlFor=""
				className="field-label">
				Answer 1
			</label>
			<div className="answer-group">
				<input
					type="text"
					className="text-input"
				/>
				<div className="checkbox-goup">
					<label
						htmlFor="answer-1"
						className="input-group">
						Correct
					</label>
					<input
						type="checkbox"
						name=""
						id="answer-1"
						className="checkbox-square"
					/>
				</div>
			</div>

			<label
				htmlFor=""
				className="field-label">
				Answer 2
			</label>
			<div className="answer-group">
				<input
					type="text"
					className="text-input"
				/>
				<div className="checkbox-goup">
					<label
						htmlFor="answer-2"
						className="input-group">
						Correct
					</label>
					<input
						type="checkbox"
						name=""
						id="answer-2"
						className="checkbox-square"
					/>
				</div>
			</div>

			<label
				htmlFor=""
				className="field-label">
				Answer 3
			</label>
			<div className="answer-group">
				<input
					type="text"
					className="text-input"
					id="text-input"
				/>
				<div className="checkbox-goup">
					<label
						htmlFor="answer"
						className="input-group">
						Correct
					</label>
					<input
						type="checkbox"
						name=""
						id="answer"
						className="checkbox-square"
					/>
				</div>
			</div>

			<div className="delete-answer">
				<div className="action-answer">
					<button className="btn">
						<AiOutlinePlus /> <span>Add another answer</span>
					</button>
				</div>
				<div className="action-answer">
					<button className="btn">
						<AiOutlineDelete /> <span>Delete last answer</span>
					</button>
				</div>
			</div>

			<label
				htmlFor=""
				className="field-label">
				Answer explanation
			</label>
			<textarea
				name="context"
				id="question-context"
				cols="30"
				rows="5"
				className="text-area-input"></textarea>
		</form>
	);
};

export default QuestionForm;
