import React, { useEffect, useState } from 'react';
// components
import AutoComplete from '@app/components/common/AutoComplete';
// hooks
import {
	useGetBookCategories,
	useGetBookGenres,
	useGetBookSubjects,
	useGetBooksAuthors
} from '@app/hooks/query/Books';
import { useNavigate, useSearch } from '@tanstack/react-location';
import { useTranslation } from 'react-i18next';
// types
import useDebounceFunction from '@app/hooks/useDebounceFunction';

function SearchFilter() {
	const search = useSearch();
	const navigate = useNavigate();
	const { t, i18n } = useTranslation('translation');

	const [searchValueInput, setSearchValueInput] = useState(search['search'] as string || '');
	const [yearValueInput, setYearValueInput] = useState(search['year'] as number || '');

	useEffect(() => {
		setSearchValueInput(search['search'] as string || '')
	}, [search['search']]);
	useEffect(() => {
		setYearValueInput(search['year'] as number || '')
	}, [search['year']])


	// queries
	const {
		data: authors,
		isError: authorsIsError
	} = useGetBooksAuthors(i18n.language);
	const {
		data: bookCategories,
		isError: bookCategoriesIsError
	} = useGetBookCategories(i18n.language);
	const {
		data: bookGenres,
		isError: bookGenresIsError
	} = useGetBookGenres(i18n.language);
	const {
		data: bookSubjects,
		isError: bookSubjectsIsError
	} = useGetBookSubjects(i18n.language);

	const debouncedChanger = useDebounceFunction((value: string | number, urlKey: string) => {
		navigate({
			search(prev) {
				return {
					...prev,
					[urlKey]: value
				}
			},
		})
	}, 750);

	const handleSearchChange = (value: string) => {
		setSearchValueInput(value);
		debouncedChanger(value, 'search');
	}
	const handleYearChange = (value: number) => {
		setYearValueInput(value || '');
		debouncedChanger(value || '', 'year');
	}

	return (
		<div className='flex flex-col'>
			<input
				id="search"
				name="search"
				type="text"
				autoComplete="search"
				className="block w-full rounded-md border-0 py-1.5 focus:outline-none px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondaryColor sm:text-sm sm:leading-6"
				value={searchValueInput}
				onChange={({ currentTarget: { value } }) => handleSearchChange(value)}
				placeholder={t('search') as string}
			/>
			<input
				id="year"
				name="year"
				type="number"
				autoComplete="year"
				className="mt-3 block w-full rounded-md border-0 py-1.5 focus:outline-none px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondaryColor sm:text-sm sm:leading-6"
				value={yearValueInput}
				onChange={({ currentTarget: { valueAsNumber } }) => handleYearChange(valueAsNumber)}
				placeholder={t('year') as string}
			/>
			{
				!authorsIsError && authors &&
				<div className='mt-2'>
					<AutoComplete
						options={
							[
								{
									id: '',
									name: '-----'
								},
								...authors.map(item => ({
									id: item.id,
									name: item.name
								})),
							] || []
						}
						defaultValue={(() => {
							const author = authors.find(item => item.id == search['authors']);
							if (author)
								return {
									id: author.id,
									name: author.name
								}
							return {
								id: '',
								name: '-----'
							}
						})()}
						placeholder={t('authors') as string}
						urlKey='author'
					/>
				</div>
			}
			{
				!bookCategoriesIsError && bookCategories &&
				<div className='mt-2'>
					<AutoComplete
						options={
							[
								{
									id: '',
									name: '-----'
								},
								...bookCategories.map(item => ({
									id: item.id,
									name: item.name
								}))
							] || []
						}
						defaultValue={(() => {
							const category = bookCategories.find(item => item.id == search['category']);
							if (category)
								return {
									id: category.id,
									name: category.name
								}
							return
						})()}
						placeholder={t('categories') as string}
						urlKey='category'
					/>
				</div>
			}
			{
				!bookGenresIsError && bookGenres &&
				<div className='mt-2'>
					<AutoComplete
						options={
							[
								{
									id: '',
									name: '-----'
								},
								...bookGenres.map(item => ({
									id: item.id,
									name: item.name
								}))
							] || []
						}
						defaultValue={(() => {
							const category = bookGenres.find(item => item.id == search['genre']);
							if (category)
								return {
									id: category.id,
									name: category.name
								}
							return
						})()}
						placeholder={t('genre') as string}
						urlKey='genre'
					/>
				</div>
			}
			{
				!bookSubjectsIsError && bookSubjects &&
				<div className='mt-2'>
					<AutoComplete
						options={
							[
								{
									id: '',
									name: '-----'
								},
								...bookSubjects.map(item => ({
									id: item.id,
									name: item.name
								}))
							] || []
						}
						defaultValue={(() => {
							const category = bookSubjects.find(item => item.id == search['subject']);
							if (category)
								return {
									id: category.id,
									name: category.name
								}
							return
						})()}
						placeholder={t('subject') as string}
						urlKey='subject'
					/>
				</div>
			}
			<button
				className='bg-secondaryColor rounded-md w-full text-white font-bold p-1 mt-4'
				onClick={() => navigate({ to: '/search' })}
			>
				{t('clear')}
			</button>
		</div>
	)
}

export default SearchFilter;