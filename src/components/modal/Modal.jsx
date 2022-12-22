import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { ADD_CHAPTER } from '../../features/chapter/chapterSlice';
import { CLOSE_MODAL } from '../../features/modal/modalSlice';
import './modal.scss';

const Modal = () => {
	const dispatch = useDispatch();

	const [chapter, setChapter] = useState('');
	const [url, setUrl] = useState('');
	const [siteName, setSiteName] = useState('');
	const [time, setTime] = useState('');

	return (
		<aside className="modal-wrapper">
			<div className="modal">
				<h4>Add a new chapter</h4>
				<div className="inputs-container">
					<input
						type="text"
						placeholder="Insert chapter title"
						onChange={(event) => {
							setChapter(event.target.value);
						}}
					/>
					<input
						type="text"
						placeholder="Insert URL"
						onChange={(event) => {
							setUrl(event.target.value);
						}}
					/>
					<input
						type="text"
						placeholder="Insert site name"
						onChange={(event) => {
							setSiteName(event.target.value);
						}}
					/>
					<input
						type="number"
						placeholder="Insert time"
						onChange={(event) => {
							setTime(event.target.value);
						}}
					/>
				</div>
				<div className="add-chapter-window">
					<button
						className="btn"
						onClick={() => {
							dispatch(
								ADD_CHAPTER({
									// id: chapters[chapters.length - 1].id + 1,
									id: nanoid(),
									chapter,
									url,
									siteName,
									time,
								})
							) && dispatch(CLOSE_MODAL());
						}}>
						<AiOutlinePlus />

						<span>Add chapter</span>
					</button>
					<button
						className="btn"
						onClick={() => dispatch(CLOSE_MODAL())}>
						<AiOutlineClose />

						<span>Close Modal</span>
					</button>
				</div>
			</div>
		</aside>
	);
};

export default Modal;
