import React, { useState, useMemo } from 'react'
// components
import Container from '@app/components/Container';
import { Link, useSearch } from '@tanstack/react-location';
import SearchFilter from '@app/components/Filters/SearchFilter';
import Row from '@app/components/Cards/Row/Row';
import Pagination from '@app/components/common/Pagination';
import Drawer from '@app/components/common/Drawer/Drawer';
import BookDetailsAudio from '@app/components/Modal/BookDetailsAudio';
// hooks
import { useTranslation } from 'react-i18next';
import { useGetBooks } from '@app/hooks/query/Books';
// icons
import { ListBulletIcon } from '@heroicons/react/20/solid';
// helpers
import { isNumber } from '@app/utils/helpers';
import { useBookDownloadCount, useBookLikeCount } from '@app/hooks/mutation/Books';
// types
import { Book } from '@app/services/types/Books';
import BookDetails from '@app/components/Modal/BookDetails/BookDetails';

function Search() {
	const search = useSearch();
	const { t, i18n } = useTranslation('translation');

	const [drawerOpen, setDrawerOpen] = useState(false);

	const [openAudioBookModal, setOpenAudioBookModal] = useState(false);
	const [audioBookDetails, setAudioBookDetails] = useState<Book>();

	const [openBookModal, setOpenBookModal] = useState(false);
	const [bookDetails, setBookDetails] = useState<Book>();

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
		type: search['type'] as string || 'book',
		lang: i18n.language
	});

	const {
		mutate: like
	} = useBookLikeCount();
	const {
		mutate: download
	} = useBookDownloadCount();

	const pageCount = useMemo(() => {
		if (!booksIsError && books) {
			return Math.ceil(Number(books && books.count / 10));
		}
		return 12;
	}, [books, booksIsError]);

	return (
		<>
			{
				openAudioBookModal && audioBookDetails &&
				<BookDetailsAudio
					alt='Audio book image'
					date={audioBookDetails.year}
					downloadCount={audioBookDetails.download_count}
					imgSrc={audioBookDetails.thumbnail}
					likeCount={audioBookDetails.liked_count}
					src={audioBookDetails.interactive_file}
					subTitles={audioBookDetails.author?.name ? [audioBookDetails.author.name] : []}
					text={audioBookDetails.description}
					title={audioBookDetails.name}
					viewedCount={audioBookDetails.view_count}
					setIsOpen={setOpenAudioBookModal}
					isOpen={openAudioBookModal}
					onDownload={() => {
						window.open(audioBookDetails.file, '_blank');
						download(audioBookDetails.id)
					}}
					onRead={() => {
						window.open(audioBookDetails.file, '_blank');
					}}
					onClickLike={() => {
						like(audioBookDetails.id);
					}}
				/>
			}

			{
				openBookModal && bookDetails &&
				<BookDetails
					alt='Book image'
					date={bookDetails.year}
					downloadCount={bookDetails.download_count}
					imgSrc={bookDetails.thumbnail}
					likeCount={bookDetails.liked_count}
					onClickLike={() => {
						like(bookDetails.id)
					}}
					subTitles={bookDetails.author ? [bookDetails.author.name] : []}
					text={bookDetails.description}
					title={bookDetails.name}
					viewedCount={bookDetails.view_count}
					setIsOpen={setOpenBookModal}
					isOpen={openBookModal}
				/>
			}
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
					<div className='2xl:w-3/4 lg:w-5/7 w-full px-2 my-3'>
						<div className='flex flex-col'>
							{
								!booksIsError && books ?
									search['type'] === 'audioBook' ?
										books.results.map(item => {

											return (
												<div
													key={item.id}
													className='mb-2'
												>
													<Row
														key={item.id}
														alt={'Books image'}
														date={item.year}
														downloadCount={item.download_count}
														imgSrc={item.thumbnail}
														likeCount={item.liked_count}
														viewedCount={item.view_count}
														subTitles={item.author ? [item.author.name] : []}
														text={item.description}
														title={item.name}
														onPlay={() => {
															setAudioBookDetails(item);
															setOpenAudioBookModal(true);
														}}
													/>
												</div>
											)
										})
										:
										books.results.map(item => {
											return (
												<div
													key={item.id}
													className='mb-2'
												>
													<Row
														alt={'Books image'}
														date={item.year}
														downloadCount={item.download_count}
														imgSrc={item.thumbnail}
														likeCount={item.liked_count}
														viewedCount={item.view_count}
														subTitles={item.author ? [item.author.name] : []}
														text={item.description}
														title={item.name}
														onClick={() => {
															setBookDetails(item);
															setOpenBookModal(true);
														}}
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
					books?.count && books.results.length > 0 && pageCount > 1 ?
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

export default Search;