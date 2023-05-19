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
// components
import { Disclosure } from '@headlessui/react'
// icons
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { OptionType } from '../Accordion';
import Accordion from '../Accordion/Accordion';


const bookOptions: OptionType = [
	{
		href: '#',
		label: 'booksOfLeader' as const
	},
	{
		href: '#',
		label: '3dbooks' as const
	},
	{
		href: '#',
		label: 'schoolBooks' as const
	},
	{
		href: '#',
		label: 'olimpicBooks' as const
	},
	{
		href: '#',
		label: 'literature' as const
	}
]
const newsPaperOptions: OptionType = [
	{
		href: '#',
		label: 'eNewspapers'
	},
	{
		href: '#',
		label: 'eMagazines'
	}
]
const scienceWorldOptions: OptionType = [
	{
		href: '#',
		label: 'scienceArticles'
	},
	{
		href: '#',
		label: 'scienceWorks'
	},
	{
		href: '#',
		label: 'designWorks'
	},
	{
		href: '#',
		label: 'scienceSources',
		children: [
			{
				href: '#',
				label: 'Google scholar',
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
		label: 'conferences'
	}
]

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
			<Disclosure as="nav" className="bg-primaryColor">
				{({ open }) => (
					<Container className='relative flex items-center justify-between py-[13px]'>
						<div className="absolute flex items-center lg:hidden">
							{/* Mobile menu button*/}
							<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
								<span className="sr-only">Open main menu</span>
								{
									open ?
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
										:
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
								}
							</Disclosure.Button>
						</div>
						<div className="hidden lg:flex">
							<HeadDropdown
								title={t('books')}
								wrapperCN='pr-3 mr-3 border-r-[1px] border-white border-solid'
								options={bookOptions}
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
								options={newsPaperOptions}
							/>
							<HeadDropdown
								title={t('scienceWorld')}
								options={scienceWorldOptions}
							/>
						</div>
						<div className='border-solid border-l-white border-l-2 pl-4 ml-auto lg:ml-0'>
							<input
								className='placeholder:text-accentColor py-1 px-3 rounded-md w-[168px]'
								type="text"
								placeholder={t('search') as string}
							/>
						</div>

						<Disclosure.Panel className="absolute top-14 left-0 w-full bg-primaryColor lg:hidden">
							<div className="space-y-1 px-2 pb-3 pt-2 flex flex-col">
								<Accordion
									title={t('books')}
									options={bookOptions}
								/>
								<Link className='font-medium text-white px-4 py-2'>
									{t('virtualLibrary')}
								</Link>
								<Link className='font-medium text-white px-4 py-2'>
									{t('audioBooks')}
								</Link>
								<Accordion
									title={t('newsPapersAndMagazines')}
									options={newsPaperOptions}
								/>
								<Accordion
									title={t('scienceWorld')}
									options={scienceWorldOptions}
								/>
							</div>
						</Disclosure.Panel>
					</Container>
				)}
			</Disclosure>
		</header >
	)
}

export default Header