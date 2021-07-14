import React, { useState } from 'react';
import style from './CreateCourse.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import { v4 as uuidv4 } from 'uuid';
import { formatDuration } from '../../utils/utils';

const CreateCourse = ({
	authorsList,
	setAuthorsList,
	setCourses,
	setIsCreateCourse,
}) => {
	const [availableAuthors, setAvailableAuthors] = useState(authorsList);
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [titleInput, setTitleInput] = useState('');
	const [descriptionInput, setDescriptionInput] = useState('');
	const [addAuthorInput, setAddAuthorInput] = useState('');
	const [durationInput, setDurationInput] = useState(0);

	const onClickAddAuthor = (author) => {
		if (courseAuthors.some((val) => val.id === author.id)) {
			return;
		}
		setCourseAuthors((prev) => {
			return [...prev, author];
		});
		setAvailableAuthors((prev) => {
			return prev.filter((val) => val.id !== author.id);
		});
	};

	const onClickDeleteAuthor = (author) => {
		setCourseAuthors((prev) => {
			return prev.filter((val) => val.id !== author.id);
		});
		setAvailableAuthors((prev) => {
			return [...prev, author];
		});
	};

	const onClickCreateAuthor = () => {
		if (addAuthorInput.length < 3) {
			alert('Please, fill author name field');
			return;
		}
		const author = {
			id: uuidv4(),
			name: addAuthorInput,
		};
		setAvailableAuthors((prev) => {
			return [...prev, author];
		});
		setAuthorsList((prev) => {
			return [...prev, author];
		});
	};

	const getCourseAuthorsId = () => {
		return courseAuthors.map((author) => author.id);
	};

	const onClickCreateCourse = () => {
		if (
			titleInput.length < 3 ||
			descriptionInput.length < 3 ||
			durationInput === 0
		) {
			alert('Please, fill in all fields');
			return;
		}
		const course = {
			id: uuidv4(),
			title: titleInput,
			description: descriptionInput,
			creationDate: new Date().toLocaleString('ru', { dateStyle: 'short' }),
			duration: durationInput,
			authors: getCourseAuthorsId(),
		};
		setCourses((prev) => {
			return [...prev, course];
		});
		setIsCreateCourse(false);
	};

	return (
		<div className={style.createCourse}>
			<div className={style.header}>
				<Input value={titleInput} onChange={setTitleInput} label={'Title'} />
				<Button onClick={onClickCreateCourse} title={'Create course'} />
			</div>
			<div className={style.description}>
				<TextArea
					value={descriptionInput}
					onChange={setDescriptionInput}
					label={'Description'}
				/>
			</div>
			<div className={style.infoBlock}>
				<div className={style.leftSection}>
					<div className={style.section}>
						<h4 className={style.title}>Add author</h4>
						<Input
							value={addAuthorInput}
							onChange={setAddAuthorInput}
							label={'Author name'}
						/>
						<Button onClick={onClickCreateAuthor} title={'Create author'} />
					</div>
					<div className={style.section}>
						<h4 className={style.title}>Duration</h4>
						<Input
							value={durationInput}
							onChange={setDurationInput}
							type={'number'}
							label={'Duration'}
						/>
						<p className={style.duration}>
							Duration: {formatDuration(durationInput)} hours
						</p>
					</div>
				</div>
				<div className={style.rightSection}>
					<div className={style.section}>
						<h4 className={style.title}>Authors</h4>
						{availableAuthors.length === 0 ? (
							<p>Author list is empty</p>
						) : (
							availableAuthors.map((author) => (
								<div key={author.id} className={style.authorBlock}>
									<p className={style.author}>{author.name}</p>
									<Button
										onClick={() => onClickAddAuthor(author)}
										title={'Add author'}
									/>
								</div>
							))
						)}
					</div>
					<div className={style.section}>
						<h4 className={style.title}>Course authors</h4>
						{courseAuthors.length === 0 ? (
							<p>Author list is empty</p>
						) : (
							courseAuthors.map((author) => (
								<div key={author.id} className={style.authorBlock}>
									<p className={style.author}>{author.name}</p>
									<Button
										onClick={() => onClickDeleteAuthor(author)}
										title={'Delete author'}
									/>
								</div>
							))
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateCourse;
