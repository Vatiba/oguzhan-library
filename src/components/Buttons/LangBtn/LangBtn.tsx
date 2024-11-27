import React from 'react'
import { useTranslation } from 'react-i18next';
// storage controller
import LocalStorage from '@app/utils/storage';

const storage = LocalStorage.getInstance();

function LangBtn() {
	const { i18n } = useTranslation()
	const changeLanguage = (value: string) => {
		i18n.changeLanguage(value);
		storage.setItem('language', value);
	}

	const handleChange = (value: string) => {
		changeLanguage(value)
	}

	return (
		<select
			name="language"
			id="lang"
			onChange={({ currentTarget: { value } }) => handleChange(value)}
			className='text-xl p-3 bg-transparent text-textColors-light'
			value={storage.getItem('language')}
		>
			<option value="tk">TM</option>
			<option value="en">EN</option>
			<option value="ru">RU</option>
		</select>
	)
}

export default LangBtn;