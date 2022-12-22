import React from 'react';
import { AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_CHAPTER } from '../../features/chapter/chapterSlice';
import { OPEN_MODAL } from '../../features/modal/modalSlice';
import './chapter.scss';

const Chapter = () => {
	const dispatch = useDispatch();
	const chapters = useSelector((state) => state.chapters);

	return (
		<div className="chapter-wrapper">
			<h2 className="title">Chapters</h2>

			{chapters?.map((chapter) => {
				return (
					<>
						<table
							className="table-container"
							key={chapter.id}>
							<tr>
								{/* <th>No.</th> */}
								<th>Title</th>
								<th>Elucidat URL</th>
								<th>Mins</th>
							</tr>
							<tr>
								{/* <td></td> */}
								<td>{chapter.chapter}</td>
								<td>
									<a href={chapter.url}>{chapter.siteName}</a>
								</td>
								<td>{chapter.time}</td>
							</tr>
						</table>
					</>
				);
			})}
			<div className="add-delete-chapter">
				<div className="action-chapter">
					<button
						className="btn"
						onClick={() => dispatch(OPEN_MODAL())}>
						<AiOutlinePlus />

						<span>Add another chapter</span>
					</button>
				</div>
				<div className="action-chapter">
					<button
						className="btn"
						onClick={() =>
							dispatch(DELETE_CHAPTER(chapters.length - 1))
						}>
						<AiOutlineDelete />

						<span>Delete last chapter</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Chapter;
