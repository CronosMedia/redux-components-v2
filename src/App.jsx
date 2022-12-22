import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Chapter from './components/chapter/Chapter';
import Modal from './components/modal/Modal';
import Question from './components/question/Question';

function App() {
	const { isOpen } = useSelector((store) => store.modal);
	return (
		<div className="App">
			{isOpen && <Modal />}
			<Chapter />
			<Question />
		</div>
	);
}

export default App;
