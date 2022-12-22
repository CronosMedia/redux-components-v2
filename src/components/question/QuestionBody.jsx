import React from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import QuestionForm from './QuestionForm';

const QuestionBody = () => {
	const { isOpen } = useSelector((store) => store.question);

	return (
		<div className="question-body">
			<div className="question-body-head">
				<h3 className="body-title">Question 1</h3>
				<span className="minimize-icon">
					<button className="btn">
						<AiOutlineMinus />
					</button>
				</span>
			</div>
			{isOpen && <QuestionForm />}
		</div>
	);
};

export default QuestionBody;
