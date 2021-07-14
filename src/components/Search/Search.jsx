import React, { useEffect, useState } from 'react';
import style from './Search.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

const Search = ({ onClickSearchCourses, setViewSearch }) => {
	const [searchInput, setSearchInput] = useState('');

	useEffect(() => {
		if (searchInput === '') {
			setViewSearch(false);
		}
	}, [searchInput]);

	return (
		<div className={style.search}>
			<Input value={searchInput} onChange={setSearchInput} />
			<Button
				onClick={() => onClickSearchCourses(searchInput)}
				title={'Search'}
			/>
		</div>
	);
};

export default Search;
