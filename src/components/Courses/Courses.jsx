import React, { useState } from 'react';
import style from './Courses.module.css';
import Search from '../Search/Search';
import CourseCard from '../CourseCard/CourseCard';
import Button from '../Button/Button';

const Courses = ({ onClick, authorsList, courses }) => {
	const [searchCourse, setSearchCourse] = useState([]);
	const [viewSearch, setViewSearch] = useState(false);

	const onClickSearchCourses = (searchInput) => {
		const mass = courses.filter(
			(courses) =>
				courses.title.toLowerCase().includes(searchInput.toLowerCase()) ||
				courses.id.toLowerCase().includes(searchInput.toLowerCase())
		);
		setSearchCourse(mass);
		searchInput.length > 0 ? setViewSearch(true) : setViewSearch(false);
	};

	return (
		<div className={style.courses}>
			<div className={style.header}>
				<Search
					onClickSearchCourses={onClickSearchCourses}
					setViewSearch={setViewSearch}
				/>
				<Button onClick={onClick} title={'Add new course'} />
			</div>

			{viewSearch
				? searchCourse.map((course) => (
						<CourseCard key={course.id} authorsList={authorsList} {...course} />
				  ))
				: courses.map((course) => (
						<CourseCard key={course.id} authorsList={authorsList} {...course} />
				  ))}
		</div>
	);
};
export default Courses;
