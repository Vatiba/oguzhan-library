import React, { useState } from 'react'
// components
import Container from '../Container'
import ContainerFluid from '../ContainerFluid';
import LangBtn from '../Buttons/LangBtn';
import HeadDropdown from '../HeadDropdown';
// images
import Logo from '@app/assets/img/logo.png';
// hooks
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useSearch } from '@tanstack/react-location';
import { useGetBookCategories } from '@app/hooks/query/Books';
import { useGetExternalLinks } from '@app/hooks/query/Main';
// components
import { Disclosure } from '@headlessui/react'
// icons
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import SearchIcon from '@app/assets/icons/search.svg';
import { OptionType } from '../Accordion';
import Accordion from '../Accordion';

const newsPaperOptions: OptionType = [
	{
		href: '/newsPapers',
		label: 'eNewspapers'
	},
	{
		href: '/magazines',
		label: 'eMagazines'
	}
]

const scienceWorldOptions: OptionType = [
	{
		href: '/articles',
		label: 'scienceArticles'
	},
	{
		href: '/researches',
		label: 'scienceWorks'
	},
	{
		href: '/projects',
		label: 'designWorks'
	},
	{
		href: '/conferences',
		label: 'conferences'
	}
]

function Header() {
	const navigate = useNavigate();
	const search = useSearch();
	const { t, i18n } = useTranslation('translation');

	const [searchValueInput, setSearchValueInput] = useState(search['search'] as string || '');

	// queries
	const {
		data: bookCategories,
		isError: bookCategoriesIsError,
		isLoading: bookCategoriesIsLoading
	} = useGetBookCategories(i18n.language);
	const {
		data: externalLinks,
		isError: externalLinksIsError
	} = useGetExternalLinks();

	return (
		<header className='bg-white fixed w-full z-20'>
			<div className='border-b-[1px]'>
				<ContainerFluid className='flex items-center justify-between py-[15px]'>
					<Link className='flex items-center' to='/'>
						<img className='h-[50px] w-[50px] md:h-[65px] md:w-[65px]' src={Logo} alt="TITU logo" />
						<span className='pl-4 font-bold text-base md:text-[20px] leading-[24px] text-blue-600'>TITU e-library</span>
					</Link>
					<div className='max-w-[716px] hidden lg:block px-2'>
						<h1 className="font-bold text-xl  text-textprimary text-center">Türkmenistanyň Prezidenti Serdar BERDIMUHAMEDOW:</h1>
						<h2 className='font-normal text-[16px] leading-[26px] xl:text-[22px] text-textColors-dark text-center'>
							— Watan diňe halky bilen Watandyr! Döwlet diňe halky bilen döwletdir
						</h2>
					</div>
					<LangBtn />
				</ContainerFluid>
			</div>
			<Disclosure as="nav" className="bg-white relative z-10">
				{({ open }) => (
					<Container className='relative flex items-center justify-between py-[33px]'>
						<div className="absolute flex items-center lg:hidden">
							{/* Mobile menu button*/}
							<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-grey-light hover:text-textColors-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
							{
								!bookCategoriesIsError &&
								<HeadDropdown
									title={t('books')}
									wrapperCN='pr-3 mr-3'
									dropdownCN='overflow-y-auto overflow-x-hidden max-h-80'
									options={
										bookCategories?.map(item => {
											return {
												href: `/search?category=${item.id}`,
												label: item.name,
											}
										}) || []
									}
									isLoading={bookCategoriesIsLoading}
								/>
							}
							{/* <a
								className='font-medium text-white pr-3 mr-3'
								href="http://172.16.0.71/360/"
								target="_blank"
							>
								{t('virtualLibrary')}
							</a> */}
							<Link
								className='font-medium text-textColors-dark pr-3 mr-3'
								to="/search?type=audioBook"
							>
								{t('audioBooks')}
							</Link>
							<Link
								className='font-medium text-textColors-dark pr-3 mr-3'
								to="/search?type=3dBook"
							>
								{t('3dbooks')}
							</Link>
							<HeadDropdown
								title={t('newsPapersAndMagazines')}
								wrapperCN='pr-3 mr-3'
								options={newsPaperOptions.map(item => ({
									href: item.href,
									label: t(item.label)
								}))}
							/>
							<HeadDropdown
								title={t('scienceWorld')}
								options={externalLinks ? [
									...scienceWorldOptions.map(item => {
										return {
											href: item.href,
											label: t(item.label)
										}
									}),
									{
										href: '#',
										label: t('scienceSources'),
										children: externalLinks.map(item => {
											return {
												href: item.link,
												label: item.name
											}
										})
									}
								] : scienceWorldOptions.map(item => {
									return {
										href: item.href,
										label: t(item.label)
									}
								})}
							/>
						</div>
						<label className='px-3 p-1 ml-auto lg:ml-4 lg:ml-0 border border-grey-dark rounded-lg flex items-center'>
							<img src={SearchIcon} alt="Search icon" />
							<input
								className='placeholder:text-accentColor w-full pl-3'
								type="text"
								placeholder={t('search') as string}
								value={searchValueInput}
								onChange={({ currentTarget: { value } }) => setSearchValueInput(value)}
								onKeyDown={({ key }) => {
									if (key === 'Enter')
										navigate({
											to: '/search',
											search(prev) {
												return {
													...prev,
													'search': searchValueInput
												}
											},
										})
								}}
							/>
						</label>

						<Disclosure.Panel className="absolute top-24 left-0 w-full bg-white lg:hidden">
							<div className="space-y-1 px-2 pb-3 pt-2 flex flex-col">
								{
									!bookCategoriesIsError && bookCategories &&
									<Accordion
										title={t('books')}
										options={
											bookCategories.map(item => {
												return {
													href: `/search?category=${item.id}`,
													label: item.name,
												}
											})
										}
									/>
								}
								<a
									className='font-medium text-textColors-dark px-4 py-2'
									href="http://172.16.0.71/360/"
									target="_blank"
								>
									{t('virtualLibrary')}
								</a>
								<Accordion
									title={t('newsPapersAndMagazines')}
									options={newsPaperOptions}
								/>
								<Accordion
									title={t('scienceWorld')}
									options={externalLinks ? [
										...scienceWorldOptions.map(item => {
											return {
												href: item.href,
												label: t(item.label)
											}
										}),
										{
											href: '#',
											label: t('scienceSources'),
											children: externalLinks.map(item => {
												return {
													href: item.link,
													label: item.name
												}
											})
										}
									] : scienceWorldOptions.map(item => {
										return {
											href: item.href,
											label: t(item.label)
										}
									})}
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