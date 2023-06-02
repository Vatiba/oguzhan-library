import React, { useEffect, useState } from 'react'
// components
import AutoComplete from '@app/components/common/AutoComplete';
// hooks
import { useGetArticleCategories } from '@app/hooks/query/Article';
import { useGetFaculties, useGetFacultyDepartment } from '@app/hooks/query/Faculty';
import { useNavigate, useSearch } from '@tanstack/react-location';
import { useTranslation } from 'react-i18next';
import { useGetUsers } from '@app/hooks/query/User';
// types
import useDebounceFunction from '@app/hooks/useDebounceFunction';
import { FireIcon } from '@heroicons/react/24/outline';

function ArticleFilter() {
	const search = useSearch();
	const navigate = useNavigate();
	const { t, i18n } = useTranslation('translation');

	const [searchValueInput, setSearchValueInput] = useState(search['search'] as string || '');

	useEffect(() => {
		setSearchValueInput(search['search'] as string || '')
	}, [search['search']])


	// queries
	const {
		data: authors,
		isError: authorsIsError
	} = useGetUsers(1, i18n.language);
	const {
		data: articleCategories,
		isError: articleCategoriesIsError
	} = useGetArticleCategories(i18n.language);
	const {
		data: faculties,
		isError: facultiesIsError
	} = useGetFaculties(i18n.language);
	const {
		data: departments,
		isError: departmentsIsError
	} = useGetFacultyDepartment(i18n.language, search['faculty'] as string);

	const debouncedChanger = useDebounceFunction((value: string) => {
		navigate({
			search(prev) {
				return {
					...prev,
					'search': value
				}
			},
		})
	}, 500)

	const handleSearchChange = (value: string) => {
		setSearchValueInput(value);
		debouncedChanger(value);
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
			{
				!authorsIsError && authors?.results &&
				<div className='mt-2'>
					<AutoComplete
						options={
							[
								...authors.results.map(item => ({
									id: item.id,
									name: `${item.first_name} ${item.last_name}`
								}))
							] || []
						}
						defaultValue={(() => {
							const author = authors.results.find(item => item.id == search['authors']);
							if (author)
								return {
									id: author.id,
									name: `${author.first_name} ${author.last_name}`
								}
							return;
						})()}
						placeholder={t('authors') as string}
						urlKey='authors'
					/>
				</div>
			}
			{
				!articleCategoriesIsError && articleCategories &&
				<div className='mt-2'>
					<AutoComplete
						options={
							articleCategories.map(item => ({
								id: item.id,
								name: item.name
							})) || []
						}
						defaultValue={(() => {
							const category = articleCategories.find(item => item.id == search['category']);
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
				!facultiesIsError && faculties &&
				<div className='mt-2'>
					<AutoComplete
						options={
							faculties.map(item => ({
								id: item.id,
								name: item.name
							})) || []
						}
						defaultValue={(() => {
							const faculty = faculties.find(item => item.id == search['faculty']);
							if (faculty)
								return {
									id: faculty.id,
									name: faculty.name
								}
							return
						})()}
						placeholder={t('faculties') as string}
						urlKey='faculty'
					/>
				</div>
			}
			{
				!departmentsIsError && departments &&
				<div className='mt-2'>
					<AutoComplete
						options={
							departments.map(item => ({
								id: item.id,
								name: item.name
							})) || []
						}
						defaultValue={(() => {
							const department = departments.find(item => item.id == search['department']);
							if (department)
								return {
									id: department.id,
									name: department.name
								}
							return
						})()}
						placeholder={t('department') as string}
						urlKey='department'
					/>
				</div>
			}
			<button
				className='bg-secondaryColor rounded-md w-full text-white font-bold p-1 mt-4'
				onClick={() => navigate({ to: '/articles' })}
			>
				{t('clear')}
			</button>
		</div>
	)
}

export default ArticleFilter;