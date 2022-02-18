import React from 'react';
import style from './TextArea.module.css';

const TextArea = ({ label, value, onChange }) => {
	return (
		<div className={style.wrapper}>
			{label && <label className={style.label}>{label}</label>}
			<textarea
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className={style.textArea}
			/>
		</div>
	);
};

export default TextArea;
