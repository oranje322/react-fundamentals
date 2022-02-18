import React from 'react';
import style from './Header.module.css';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

const Header = () => {
	return (
		<div className={style.header}>
			<Logo />
			<div>
				<span className={style.username}>Username</span>
				<Button title={'Logout'} />
			</div>
		</div>
	);
};

export default Header;
