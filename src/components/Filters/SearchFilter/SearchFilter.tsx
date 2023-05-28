import React, { useState } from 'react'
// components
import AutoComplete from '@app/components/common/AutoComplete';
// hooks
import { useGetBookCategories, useGetBooksAuthors } from '@app/hooks/query/Books';
import { useGetFaculties, useGetFacultyDepartment } from '@app/hooks/query/Faculty';
import { useNavigate, useSearch } from '@tanstack/react-location';
import { useTranslation } from 'react-i18next';
// types
import bookTypes from '@app/constants/bookTypes';
import useDebounceFunction from '@app/hooks/useDebounceFunction';

function SearchFilter() {
	const search = useSearch();
	const navigate = useNavigate();
	const { t } = useTranslation('translation');

	const [searchValueInput, setSearchValueInput] = useState(search['search'] as string || '');

	// queries
	const {
		data: authors,
		isError: authorsIsError
	} = useGetBooksAuthors();
	const {
		data: bookCategories,
		isError: bookCategoriesIsError
	} = useGetBookCategories();
	const {
		data: faculties,
		isError: facultiesIsError
	} = useGetFaculties();
	const {
		data: departments,
		isError: departmentsIsError
	} = useGetFacultyDepartment(search['faculty'] as string);

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
		setSearchValueInput(value)
		debouncedChanger(value)
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
			/>
			<div className='mt-2'>
				<AutoComplete
					options={
						[
							...bookTypes.map(item => ({
								id: item,
								name: t(item)
							})),
						] || []
					}
					defaultValue={(() => {
						const type = bookTypes.find(item => item == search['type']);
						if (type)
							return {
								id: type,
								name: t(type)
							}
						return
					})()
					}
					urlKey='type'
				/>
			</div>
			{
				!authorsIsError && authors &&
				<div className='mt-2'>
					<AutoComplete
						options={
							authors.map(item => ({
								id: item.id,
								name: item.name
							})) || []
						}
						defaultValue={(() => {
							const author = authors.find(item => item.id == search['authors']);
							if (author)
								return {
									id: author.id,
									name: author.name
								}
							return
						})()
						}
						urlKey='authors'
					/>
				</div>
			}
			{
				!bookCategoriesIsError && bookCategories &&
				<div className='mt-2'>
					<AutoComplete
						options={
							bookCategories.map(item => ({
								id: item.id,
								name: item.name
							})) || []
						}
						defaultValue={(() => {
							const category = bookCategories.find(item => item.id == search['category']);
							if (category)
								return {
									id: category.id,
									name: category.name
								}
							return
						})()
						}
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
						})()
						}
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
						})()
						}
						urlKey='department'
					/>
				</div>
			}
		</div>
	)
}

export default SearchFilter;