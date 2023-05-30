import React, { useState } from 'react'
// components
import Container from '@app/components/Container';
import { Link, useSearch } from '@tanstack/react-location';
import SearchFilter from '@app/components/Filters/SearchFilter';
import Row from '@app/components/Cards/Row/Row';
import Pagination from '@app/components/common/Pagination';
import Drawer from '@app/components/common/Drawer/Drawer';
// hooks
import { useTranslation } from 'react-i18next';
import { useGetBooks } from '@app/hooks/query/Books';
// icons
import { ListBulletIcon } from '@heroicons/react/20/solid';
// helpers
import { isNumber } from '@app/utils/helpers';

function Search() {
	const search = useSearch();
	const { t, i18n } = useTranslation('translation');

	const [drawerOpen, setDrawerOpen] = useState(false);

	const page = isNumber(Number(search['page'])) ? Number(search['page']) : 1;

	const {
		data: books,
		isError: booksIsError
	} = useGetBooks({
		author: search['author'] as string || '',
		category: search['category'] as string || '',
		department: search['department'] as string || '',
		faculty: search['faculty'] as string || '',
		orderDirection: 'desc',
		ordering: 'id',
		page: search['page'] as number || 1,
		search: search['search'] as string || '',
		type: search['type'] as string || '',
		lang: i18n.language
	});

	return (
		<>
			{/* ==== Filter drawers ==== */}
			<Drawer open={drawerOpen} setOpen={setDrawerOpen}>
				<SearchFilter />
			</Drawer>
			<Container className='pt-[120px] md:pt-[135px]'>
				{/* ==== Breadcrumb ==== */}
				<div className='my-6 font-bold text-xl'>
					<Link to='/' className='mr-1'>
						{t('mainPage')}
					</Link>
					/
					<span className='ml-1'>
						{t('search')}
					</span>
				</div>
				<div className="lg:hidden flex w-full justify-end mb-3">
					<button
						className='bg-mainBgColor rounded-md p-3'
						onClick={() => setDrawerOpen(true)}
					>
						<ListBulletIcon className="h-6 w-6 text-secondaryColor" aria-hidden="true" />
					</button>
				</div>
				{/* ==== Content ==== */}
				<div className='flex'>
					<div className='lg:block hidden 2xl:w-1/4 lg:w-2/7 pb-10'>
						<div className='rounded-md shadow-md bg-white py-7 px-7'>
							<SearchFilter />
						</div>
					</div>
					<div className='2xl:w-3/4 lg:w-5/7 w-full px-2'>
						<div className='flex flex-col'>
							{
								!booksIsError && books ?
									search['type'] === 'audioBook' ?
										books.results.map(item => {

											return (
												<Row
													key={item.id}
													alt={'Books image'}
													date={item.year}
													downloadCount={item.download_count}
													imgSrc={item.thumbnail}
													likeCount={item.liked_count}
													viewedCount={item.view_count}
													subTitles={[item.author.name]}
													text={item.description}
													title={item.name}
													onPlay={() => {

													}}
													onClickLike={() => { }}
												/>
											)
										})
										:
										books.results.map(item => {
											return (
												<Row
													key={item.id}
													alt={'Books image'}
													date={item.year}
													downloadCount={item.download_count}
													imgSrc={item.thumbnail}
													likeCount={item.liked_count}
													viewedCount={item.view_count}
													subTitles={[item.author.name]}
													text={item.description}
													title={item.name}
													onClick={
														search['type'] !== 'audioBook' ?
															() => {

															}
															:
															undefined
													}
													onDownload={() => { }}
													onRead={() => { }}
													onClickLike={() => { }}
												/>
											)
										})
									:
									null
							}
						</div>
					</div>
				</div>


				{/* ==== Pagination ==== */}
				{
					books?.count && books.results.length > 0 &&
					<div className='w-full flex justify-end'>
						<Pagination
							pageCount={books.count}
							itemsPerPage={10}
							page={page}
							onPageChange={() => { }}
							pageRangeDisplayed={3}
						/>
					</div>
				}
			</Container>
		</>
	)
}

export default Search;