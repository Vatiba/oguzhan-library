import React, { useState } from 'react'
// components
import Container from '@app/components/Container/Container'
import { Link, useSearch } from '@tanstack/react-location'
import Conference from '@app/components/Cards/Col/Conference/Conference';
import Pagination from '@app/components/common/Pagination';
// helpers
import { isNumber } from '@app/utils/helpers';
// hooks
import { useTranslation } from 'react-i18next'
import { useGetConferences } from '@app/hooks/query/Conference';

function Conferences() {
	const { t, i18n } = useTranslation('translation');
	const search = useSearch();
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [conferenceName, setConferenceName] = useState('');

	const page = isNumber(Number(search['page'])) ? Number(search['page']) : 1;

	const {
		data: conferences,
		isError: conferencesIsError,
		isLoading: conferencesIsLoading,
		refetch: conferenceRefetch
	} = useGetConferences({
		start_date: startDate,
		end_date: endDate,
		lang: i18n.language,
		page: page,
		search: conferenceName
	});

	return (
		<Container
			className='pt-[120px] md:pt-[135px]'
		>
			{/* ==== Breadcrumb ==== */}
			<div className='my-6 font-bold text-xl'>
				<Link to='/' className='mr-1'>
					{t('mainPage')}
				</Link>
				/
				<span className='ml-1'>
					{t('conferences')}
				</span>
			</div>

			{/* ==== Filters ==== */}
			<div className='flex flex-wrap gap-2 items-end'>
				<div className='flex flex-col'>
					<span className='font-medium'>
						{t("startDate")}
					</span>
					<input
						className='border py-3 px-4 rounded-md'
						type="date"
						value={startDate}
						onChange={({ currentTarget: { value } }) => setStartDate(value)}
					/>
				</div>
				<div className='flex flex-col'>
					<span className='font-medium'>
						{t("endDate")}
					</span>
					<input
						className='border py-3 px-4 rounded-md'
						type="date"
						value={endDate}
						onChange={({ currentTarget: { value } }) => setEndDate(value)}
					/>
				</div>
				<div className='flex flex-col'>
					<span className='font-medium'>
						{t("conferenceName")}
					</span>
					<input
						className='border py-3 px-4 rounded-md'
						type="text"
						value={conferenceName}
						onChange={({ currentTarget: { value } }) => setConferenceName(value)}
					/>
				</div>
				<button
					className='rounded-md p-3 bg-secondaryColor text-white'
					onClick={() => conferenceRefetch()}
				>
					{t('search')}
				</button>
			</div>


			{/* ==== Content ==== */}
			<div className='flex -mx-2'>
				{
					!conferencesIsError &&
					!conferencesIsLoading && conferences &&
					conferences.results.map(item => {
						return (
							<div className='px-2 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5' key={item.id}>
								<Conference
									date={item.date_created}
									imgAlt='Conference image'
									imgSrc={item.file}
									name={item.name}
								/>
							</div>
						)
					})
				}
			</div>


			{/* ==== Pagination ==== */}
			{
				conferences?.count && conferences.results.length > 0 ?
					<div className='w-full flex justify-end'>
						<Pagination
							pageCount={conferences.count}
							itemsPerPage={10}
							page={page}
							onPageChange={() => { }}
							pageRangeDisplayed={3}
						/>
					</div>
					:
					null
			}
		</Container>
	)
}

export default Conferences