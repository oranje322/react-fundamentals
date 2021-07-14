import React from 'react';
import style from './CourseCard.module.css';
import Button from '../Button/Button';
import { formatDuration } from '../../utils/utils';

const CourseCard = ({
	id,
	title,
	description,
	creationDate,
	duration,
	authors,
	authorsList,
}) => {
	const getAuthors = () => {
		return authorsList
			.filter((author) => authors.includes(author.id))
			.map((obj) => obj.name)
			.join(', ');
	};

	return (
		<div className={style.coursesCard}>
			<div className={style.cardLeftSection}>
				<h3 className={style.cardTitle}>{title}</h3>
				<p className={style.description}>{description} </p>
			</div>
			<div className={style.cardRightSection}>
				<div className={style.info}>
					<span className={style.infoSubtitle}>Authors:</span>
					<span>{getAuthors()}</span>
				</div>
				<div className={style.info}>
					<span className={style.infoSubtitle}>Duration:</span>
					<span>{formatDuration(duration)}</span>
				</div>
				<div className={style.info}>
					<span className={style.infoSubtitle}>Created:</span>
					<span>{creationDate}</span>
				</div>
				<Button title={'Show course'} />
			</div>
		</div>
	);
};

export default CourseCard;
