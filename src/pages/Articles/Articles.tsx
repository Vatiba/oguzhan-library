import React, { useState, useMemo } from 'react'
// components
import Container from '@app/components/Container';
import { Link, useSearch } from '@tanstack/react-location';
import ArticleFilter from '@app/components/Filters/ArticleFilter';
import Row from '@app/components/Cards/Row/Row';
import Pagination from '@app/components/common/Pagination';
import Drawer from '@app/components/common/Drawer/Drawer';
// hooks
import { useTranslation } from 'react-i18next';
import { useGetArticles } from '@app/hooks/query/Article';
import { useArticleLikeCount, useArticleDownloadCount } from '@app/hooks/mutation/Article';
// icons
import { ListBulletIcon } from '@heroicons/react/20/solid';
// helpers
import { isNumber } from '@app/utils/helpers';

function Articles() {
	const search = useSearch();
	const { t, i18n } = useTranslation('translation');

	const [drawerOpen, setDrawerOpen] = useState(false);

	const page = isNumber(Number(search['page'])) ? Number(search['page']) : 1;

	const {
		data: articles,
		isError: articlesIsError
	} = useGetArticles({
		author: search['author'] as string || '',
		category: search['category'] as string || '',
		department: search['department'] as string || '',
		faculty: search['faculty'] as string || '',
		orderDirection: 'desc',
		ordering: 'id',
		page: search['page'] as number || 1,
		search: search['search'] as string || '',
		lang: i18n.language
	});

	const {
		mutate: like
	} = useArticleLikeCount();
	const {
		mutate: download
	} = useArticleDownloadCount();

	const pageCount = useMemo(() => {
		if (!articlesIsError && articles) {
			return Math.ceil(Number(articles && articles.count / 10));
		}
		return 12;
	}, [articles, articlesIsError]);

	return (
		<>
			{/* ==== Filter drawers ==== */}
			<Drawer open={drawerOpen} setOpen={setDrawerOpen}>
				<ArticleFilter />
			</Drawer>
			<Container className='pt-[120px] md:pt-[135px]'>
				{/* ==== Breadcrumb ==== */}
				<div className='my-6 font-bold text-xl'>
					<Link to='/' className='mr-1'>
						{t('mainPage')}
					</Link>
					/
					<span className='ml-1'>
						{t('scienceArticles')}
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
							<ArticleFilter />
						</div>
					</div>
					<div className='2xl:w-3/4 lg:w-5/7 w-full px-2 my-3'>
						<div className='flex flex-col'>
							{
								!articlesIsError && articles ?
									articles.results.map(item => {
										return (
											<div
												key={item.id}
												className='mb-2'
											>
												<Row
													key={item.id}
													alt='Articles image'
													date={item.date_created}
													downloadCount={item.download_count}
													imgSrc={item.author.avatar}
													likeCount={item.liked_count}
													viewedCount={item.view_count}
													subTitles={[`${item.author?.first_name || ''} ${item.author?.last_name || ''}`]}
													text={item.content}
													title={item.name}
													onDownload={() => {
														window.open(item.file, '_blank');
														download(item.id)
													}}
													onRead={() => {
														window.open(item.file, '_blank');
													}}
													onClickLike={() => {
														like(item.id)
													}}
												/>
											</div>
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
					articles?.count && articles.results.length > 0 && pageCount > 1 ?
						<div className='w-full flex justify-end my-3'>
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
		</>
	)
}

export default Articles;