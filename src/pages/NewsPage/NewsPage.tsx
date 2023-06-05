import React, { useState, useMemo } from 'react'
// components
import Container from '@app/components/Container/Container'
import { Link, useSearch } from '@tanstack/react-location'
import News from '@app/components/Cards/Col/News';
import Pagination from '@app/components/common/Pagination';
// helpers
import { isNumber } from '@app/utils/helpers';
// hooks
import { useTranslation } from 'react-i18next'
import { useGetNews } from '@app/hooks/query/News';

function NewsPage() {
	const { t, i18n } = useTranslation('translation');
	const search = useSearch();
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [newsName, setNewsName] = useState('');

	const page = isNumber(Number(search['page'])) ? Number(search['page']) : 1;

	const {
		data: news,
		isError: newsIsError,
		isLoading: newsIsLoading,
		refetch: newsRefetch
	} = useGetNews({
		start_date: startDate,
		end_date: endDate,
		lang: i18n.language,
		page: page,
		search: newsName
	});

	const pageCount = useMemo(() => {
		if (!newsIsError && news && !newsIsLoading) {
			return Math.ceil(Number(news && news.count / 10));
		}
		return 1;
	}, [news, newsIsError]);

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
					{t('news')}
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
						{t("newsName")}
					</span>
					<input
						className='border py-3 px-4 rounded-md'
						type="text"
						value={newsName}
						onChange={({ currentTarget: { value } }) => setNewsName(value)}
					/>
				</div>
				<button
					className='rounded-md p-3 bg-secondaryColor text-white'
					onClick={() => newsRefetch()}
				>
					{t('search')}
				</button>
			</div>


			{/* ==== Content ==== */}
			<div className='flex -mx-2 flex-wrap my-4'>
				{
					!newsIsError &&
					!newsIsLoading && news &&
					news.results.map(item => {
						return (
							<Link
								key={item.id}
								to={`/news/${item.id}`} className='p-2 w-1/2 md:w-1/3 lg:w-1/4'
							>
								<News
									date={item.date_created}
									imgAlt='News image'
									imgSrc={item.thumbnail}
									slug={item.slug}
									text={item.content}
									title={item.name}
									imgCN='object-cover'
								/>
							</Link>
						)
					})
				}
			</div>


			{/* ==== Pagination ==== */}
			{
				news?.count && news.results.length > 0 && pageCount > 1 ?
					<div className='w-full flex justify-end'>
						<Pagination
							pageCount={pageCount}
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

export default NewsPage