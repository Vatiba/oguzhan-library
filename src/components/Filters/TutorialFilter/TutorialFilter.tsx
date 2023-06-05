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
import { useGetFaculties, useGetFacultyDepartment, useGetMajors, useGetYears } from '@app/hooks/query/Faculty';

function TutorialFilter() {
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
		data: faculties,
		isError: facultiesIsError
	} = useGetFaculties(i18n.language);
	const {
		data: department,
		isError: departmentIsError
	} = useGetFacultyDepartment(i18n.language, search['faculty'] as string);
	const {
		data: majors,
		isError: majorsIsError
	} = useGetMajors(i18n.language);
	const {
		data: studentYears,
		isError: studentYearsIsError
	} = useGetYears(i18n.language);

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
				!studentYearsIsError && studentYears &&
				<div className='mt-2'>
					<AutoComplete
						options={
							[
								{
									id: '',
									name: '-----'
								},
								...studentYears.map(item => ({
									id: item.id,
									name: item.name
								}))
							] || []
						}
						defaultValue={(() => {
							const category = studentYears.find(item => item.id == search['studentYear']);
							if (category)
								return {
									id: category.id,
									name: category.name
								}
							return
						})()}
						placeholder={t('studentYear') as string}
						urlKey='studentYear'
					/>
				</div>
			}
			{
				!majorsIsError && majors &&
				<div className='mt-2'>
					<AutoComplete
						options={
							[
								{
									id: '',
									name: '-----'
								},
								...majors.map(item => ({
									id: item.id,
									name: item.name
								}))
							] || []
						}
						defaultValue={(() => {
							const category = majors.find(item => item.id == search['major']);
							if (category)
								return {
									id: category.id,
									name: category.name
								}
							return
						})()}
						placeholder={t('majors') as string}
						urlKey='major'
					/>
				</div>
			}
			{
				!facultiesIsError && faculties &&
				<div className='mt-2'>
					<AutoComplete
						options={
							[
								{
									id: '',
									name: '-----'
								},
								...faculties.map(item => ({
									id: item.id,
									name: item.name
								}))
							] || []
						}
						defaultValue={(() => {
							const category = faculties.find(item => item.id == search['faculty']);
							if (category)
								return {
									id: category.id,
									name: category.name
								}
							return
						})()}
						placeholder={t('faculties') as string}
						urlKey='faculty'
					/>
				</div>
			}
			{
				!departmentIsError && department &&
				<div className='mt-2'>
					<AutoComplete
						options={
							[
								{
									id: '',
									name: '-----'
								},
								...department.map(item => ({
									id: item.id,
									name: item.name
								}))
							] || []
						}
						defaultValue={(() => {
							const category = department.find(item => item.id == search['department']);
							if (category)
								return {
									id: category.id,
									name: category.name
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
				onClick={() => navigate({ to: '/tutorials' })}
			>
				{t('clear')}
			</button>
		</div>
	)
}

export default TutorialFilter;