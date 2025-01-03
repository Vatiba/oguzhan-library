import React, { useMemo, useState } from 'react';
// components
import Container from '@app/components/Container/Container';
import { Link, useMatch, useSearch } from '@tanstack/react-location';
import Pagination from '@app/components/common/Pagination';
// hooks
import { useTranslation } from 'react-i18next';
import { useGetPublications } from '@app/hooks/query/Publications';
// helpers
import { isNumber } from '@app/utils/helpers';
import Magazine from '@app/components/Cards/Col/Magazine/Magazine';
import { usePublicationDownloadCount, usePublicationLikeCount } from '@app/hooks/mutation/Publications';

function NewsPapers() {
	const { params } = useMatch()
	const search = useSearch();
	const { t, i18n } = useTranslation('translation');

	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');

	const page = isNumber(Number(search['page'])) ? Number(search['page']) : 1;

	const id = parseInt(params['id']);
	const {
		data: newsPaper,
		isError: newsPaperIsError,
		refetch: newsPaperRefetch
	} = useGetPublications({
		start_date: startDate,
		end_date: endDate,
		lang: i18n.language,
		page: page,
		publisher: id,
		type: 'newspaper'
	});

	const pageCount = useMemo(() => {
		if (!newsPaperIsError && newsPaper) {
			return Math.ceil(Number(newsPaper && newsPaper.count / 10));
		}
		return 1;
	}, [newsPaper, newsPaperIsError]);

	const {
		mutateAsync: download
	} = usePublicationDownloadCount();

	const {
		mutate: like
	} = usePublicationLikeCount();

	return (
		<Container className='pt-[120px] md:pt-[135px]'>
			{/* ==== Breadcrumb ==== */}
			<div className='my-6 font-bold text-xl'>
				<Link to='/' className='mr-1'>
					{t('mainPage')}
				</Link>
				/
				<span className='ml-1'>
					{t('eNewspapers')}
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
				<button
					className='rounded-md p-3 bg-secondaryColor text-white'
					onClick={() => newsPaperRefetch()}
				>
					{t('search')}
				</button>
			</div>

			{/* ==== Content ==== */}
			{
				!newsPaperIsError && newsPaper &&
				<div className='flex flex-wrap -mx-1'>
					{
						newsPaper.results.map(item => {
							return (
								<div className='p-2 w-1/2 md:w-1/3 lg:w-1/4' key={item.id}>
									<Magazine
										date={item.date_created}
										imgAlt='News image'
										imgSrc={item.thumbnail}
										downloadCount={item.download_count}
										likeCount={item.like_count}
										reviewCount={item.view_count}
										title={item.publisher.name}
										onDownloadClick={async () => {
											await download(item.id)
										}}
										downloadHref={item.file}
										onClickLike={() => {
											like(item.id)
										}}
									/>
								</div>
							)
						})
					}
				</div>
			}

			{/* ==== Pagination ==== */}
			{
				pageCount > 1 && newsPaper && newsPaper?.results.length > 0 ?
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


export default NewsPapers;