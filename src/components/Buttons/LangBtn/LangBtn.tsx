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
		<div
			className='flex justify-between bg-secondaryColor rounded-[6px] font-bold text-[20px] leading-[23px] text-white h-[40px] w-[140px] md:h-[38px] md:w-[132px]'
		>
			<label className={`flex justify-center items-center h-full w-full hover:cursor-pointer hover:bg-orange-600 rounded-[6px] ${i18n.language === 'tk' ? 'bg-orange-600' : ''}`} htmlFor="tk">
				<input
					type="radio"
					name='language'
					value='tk'
					id="tk"
					className='hidden'
					onChange={({ currentTarget: { value } }) => handleChange(value)}
				/>
				TM
			</label>
			<label className={`flex justify-center items-center h-full w-full hover:cursor-pointer hover:bg-orange-600 rounded-[6px] ${i18n.language === 'en' ? 'bg-orange-600' : ''}`} htmlFor="en">
				<input
					type="radio"
					name='language'
					value='en'
					id="en"
					className='hidden'
					onChange={({ currentTarget: { value } }) => handleChange(value)}
				/>
				EN
			</label>
			<label className={`flex justify-center items-center h-full w-full hover:cursor-pointer hover:bg-orange-600 rounded-[6px] ${i18n.language === 'ru' ? 'bg-orange-600' : ''}`} htmlFor="ru">
				<input
					type="radio"
					name='language'
					value='ru'
					id="ru"
					className='hidden'
					onChange={({ currentTarget: { value } }) => handleChange(value)}
				/>
				RU
			</label>
		</div>
	)
}

export default LangBtn;