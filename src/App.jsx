import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { useState } from 'react';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { mockedAuthorsList, mockedCoursesList } from './mockedData';

const App = () => {
	const [isCreateCourse, setIsCreateCourse] = useState(false);
	const [authorsList, setAuthorsList] = useState(mockedAuthorsList);
	const [courses, setCourses] = useState(mockedCoursesList);

	return (
		<div className='app'>
			<Header />
			{isCreateCourse ? (
				<CreateCourse
					authorsList={authorsList}
					setAuthorsList={setAuthorsList}
					setCourses={setCourses}
					setIsCreateCourse={setIsCreateCourse}
				/>
			) : (
				<Courses
					authorsList={authorsList}
					courses={courses}
					onClick={() => setIsCreateCourse(true)}
				/>
			)}
		</div>
	);
};

export default App;

//todo валидация полей на создании курса, не создавать курс если поля не заполнены.
//todo добавление duration в создании курса - числа.
