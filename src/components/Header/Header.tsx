import React from 'react'
// components
import Container from '../Container'
import LangBtn from '../Buttons/LangBtn';
import HeadDropdown from '../HeadDropdown';
// images
import Logo from '@app/assets/img/logo.png';
// hooks
import { useTranslation } from 'react-i18next';

function Header() {
	const { t } = useTranslation('translation');
	return (
		<header className='bg-primaryColor'>
			<div className='border-b-[1px]'>
				<Container className='flex items-center justify-between py-[5px]'>
					<div className='flex items-center'>
						<img className='h-[70px] w-[70px]' src={Logo} alt="TITU logo" />
						<span className='pl-4 font-bold text-[20px] leading-[24px] text-white'>TITU e-library</span>
					</div>
					<div className='max-w-[716px] hidden lg:block px-2'>
						<h1 className='font-normal text-[16px] leading-[26px] xl:text-[22px] text-white text-center'>
							Türkmenistanyň Prezidenti Serdar BERDIMUHAMEDOW: — Watan diňe halky bilen Watandyr! Döwlet diňe halky bilen döwletdir
						</h1>
					</div>
					<div className=''>
						<LangBtn />
					</div>
				</Container>
			</div>
			<Container className='flex items-center justify-between py-[13px]'>
				<div className='flex items-center'>
					<HeadDropdown />
				</div>
				<div className='border-solid border-l-white border-l-2 pl-4'>
					<input
						className='placeholder:text-accentColor py-2 px-3 rounded-md w-[168px]'
						type="text"
						placeholder={t('search') as string}
					/>
				</div>
			</Container>
		</header>
	)
}

export default Header