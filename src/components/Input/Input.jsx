import React from 'react';
import style from './Input.module.css';

const Input = ({ label, value, onChange, type = 'text' }) => {
	return (
		<div className={style.wrapper}>
			{label && <label className={style.label}>{label}</label>}
			<input
				value={value}
				onChange={(e) => onChange(e.target.value)}
				type={type}
				className={style.input}
			/>
		</div>
	);
};

export default Input;
