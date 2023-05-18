import React from 'react'
// components
import Container from '../Container'
import LangBtn from '../Buttons/LangBtn';
import HeadDropdown from '../HeadDropdown';
// images
import Logo from '@app/assets/img/logo.png';
// hooks
import { useTranslation } from 'react-i18next';
import { Link } from '@tanstack/react-location';

function Header() {
	const { t } = useTranslation('translation');
	return (
		<header className='bg-primaryColor'>
			<div className='border-b-[1px]'>
				<Container className='flex items-center justify-between py-[5px]'>
					<div className='flex items-center'>
						<img className='h-[65px] w-[65px]' src={Logo} alt="TITU logo" />
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
					<HeadDropdown
						title={t('books')}
						wrapperCN='pr-3 mr-3 border-r-[1px] border-white border-solid'
						options={[
							{
								href: '#',
								label: t('booksOfLeader')
							},
							{
								href: '#',
								label: t('3dbooks')
							},
							{
								href: '#',
								label: t('schoolBooks')
							},
							{
								href: '#',
								label: t('olimpicBooks')
							},
							{
								href: '#',
								label: t('literature')
							}
						]}
					/>
					<Link className='font-medium text-white pr-3 mr-3 border-r-[1px] border-white border-solid'>
						{t('virtualLibrary')}
					</Link>
					<Link className='font-medium text-white pr-3 mr-3 border-r-[1px] border-white border-solid'>
						{t('audioBooks')}
					</Link>
					<HeadDropdown
						title={t('newsPapersAndMagazines')}
						wrapperCN='pr-3 mr-3 border-r-[1px] border-white border-solid'
						options={[
							{
								href: '#',
								label: t('eNewspapers')
							},
							{
								href: '#',
								label: t('eMagazines')
							}
						]}
					/>
					<HeadDropdown
						title={t('scienceWorld')}
						options={[
							{
								href: '#',
								label: t('scienceArticles')
							},
							{
								href: '#',
								label: t('scienceWorks')
							},
							{
								href: '#',
								label: t('designWorks')
							},
							{
								href: '#',
								label: t('scienceSources'),
								children: [
									{
										href: '#',
										label: 'Google scholar'
									},
									{
										href: '#',
										label: 'CyberLeninka'
									},
									{
										href: '#',
										label: 'Ncbi.nlm.nih.gov'
									},
									{
										href: '#',
										label: 'Mendeleyew'
									},
									{
										href: '#',
										label: 'Taylorfrancis'
									},
									{
										href: '#',
										label: 'Sciencedirect'
									},
									{
										href: '#',
										label: 'Core.ac.uk'
									},
									{
										href: '#',
										label: 'Redalyc'
									},
									{
										href: '#',
										label: 'Doaj.org'
									},
									{
										href: '#',
										label: 'Springer'
									},
									{
										href: '#',
										label: 'MDPI'
									},
									{
										href: '#',
										label: 'Scopus'
									},
									{
										href: '#',
										label: 'E-library'
									},
									{
										href: '#',
										label: 'РГИС'
									},
								]
							},
							{
								href: '#',
								label: t('conferences')
							}
						]}
					/>
				</div>
				<div className='border-solid border-l-white border-l-2 pl-4'>
					<input
						className='placeholder:text-accentColor py-1 px-3 rounded-md w-[168px]'
						type="text"
						placeholder={t('search') as string}
					/>
				</div>
			</Container>
		</header>
	)
}

export default Header