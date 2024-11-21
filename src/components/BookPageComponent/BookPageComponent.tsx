import React, { useState, useMemo } from 'react';
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
import { useBookDownloadCount, useBookLikeCount, useBookViewCount } from '@app/hooks/mutation/Books';
// types
import { Book } from '@app/services/types/Books';
import BookDetails from '@app/components/Modal/BookDetails/BookDetails';
import bookTypes from '@app/constants/bookTypes';

type BookPageComponentProps = {
	bookType?: typeof bookTypes[number]
}

export default function BookPageComponent(props: BookPageComponentProps) {
	const {
		bookType
	} = props;
	const search = useSearch();
	const { t, i18n } = useTranslation('translation');

	const [drawerOpen, setDrawerOpen] = useState(false);

	const [openAudioBookModal, setOpenAudioBookModal] = useState(false);
	const [audioBookDetails, setAudioBookDetails] = useState<Book>();

	const [openBookModal, setOpenBookModal] = useState(false);
	const [bookDetails, setBookDetails] = useState<Book>();

	const page = isNumber(Number(search['page'])) ? Number(search['page']) : 1;

	// queries
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
		type: bookType as typeof bookTypes[number] || search['type'],
		lang: i18n.language,
		genre: search['genre'] as string || '',
		subject: search['subject'] as string || '',
		year: search['year'] as string || '',
		language: search['language'] as string || '',
	});

	// mutations
	const {
		mutate: like
	} = useBookLikeCount();
	const {
		mutateAsync: download
	} = useBookDownloadCount();
	const {
		mutate: bookViewCount
	} = useBookViewCount();

	const pageCount = useMemo(() => {
		if (!booksIsError && books) {
			return Math.ceil(Number(books && books.count / 10));
		}
		return 1;
	}, [books, booksIsError]);

	return (
		<>
			{
				openAudioBookModal && audioBookDetails &&
				<BookDetails
					alt='Audio book image'
					date={audioBookDetails.year}
					downloadCount={audioBookDetails.download_count}
					imgSrc={audioBookDetails.thumbnail}
					likeCount={audioBookDetails.like_count}
					src={audioBookDetails.interactive_file}
					subTitles={audioBookDetails.author?.name ? [audioBookDetails.author.name] : []}
					text={audioBookDetails.description}
					title={audioBookDetails.name}
					viewedCount={audioBookDetails.view_count}
					setIsOpen={setOpenAudioBookModal}
					isOpen={openAudioBookModal}
					downloadHref={audioBookDetails.file}
					onDownloadClick={async () => await download(audioBookDetails.id)}
					onRead={() => {
						window.open(audioBookDetails.file, '_blank');
					}}
					onClickLike={async () => {
						await like(audioBookDetails.id);
					}}
					bookId={audioBookDetails.id}
				/>
			}

			{
				openBookModal && bookDetails &&
				<BookDetails
					alt='Book image'
					bookId={bookDetails.id}
					date={bookDetails.year}
					downloadCount={bookDetails.download_count}
					imgSrc={bookDetails.thumbnail}
					likeCount={bookDetails.like_count}
					onClickLike={() => {
						like(bookDetails.id)
					}}
					onRead={() => {
						window.open(bookDetails.interactive_file ? bookDetails.interactive_file : bookDetails.file, '_blank');
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
			<Container className='pt-[192px] md:pt-[207px]'>
				{/* ==== Breadcrumb ==== */}
				<div className='my-6 text-lg text-textColors-normal'>
					<Link to='/' className='mr-1'>
						{t('mainPage')}
					</Link>
					/
					<span className='ml-1'>
						{t('search')} {books?.count ? `(${books?.count})` : null}
					</span>
				</div>
				<div className="lg:hidden flex w-full justify-end mb-3">
					<button
						className='bg-mainBgColor rounded-md p-3'
						onClick={() => setDrawerOpen(true)}
					>
						<ListBulletIcon className="h-6 w-6 text-primary-dark" aria-hidden="true" />
					</button>
				</div>
				{/* ==== Content ==== */}
				<div className='flex'>
					<div className='lg:block hidden 2xl:w-1/4 lg:w-2/7 pb-10'>
						<div className='rounded-md border border-grey-dark bg-white py-7 px-7'>
							<SearchFilter />
						</div>
					</div>
					<div className='2xl:w-3/4 lg:w-5/7 w-full pl-2'>
						<div className='flex flex-col bg-white p-5 border border-grey-dark rounded-md'>
							{
								!booksIsError && books ?
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
													likeCount={item.like_count}
													viewedCount={item.view_count}
													subTitles={item.author ? [item.author.name] : []}
													text={item.description}
													title={item.name}
													onClick={
														search['type'] !== 'audioBook' || bookType ?
															async () => {
																setBookDetails(item);
																setOpenBookModal(true);
																bookViewCount(item.id);
															} :
															undefined
													}
													downloadHref={
														search['type'] !== 'audioBook' || bookType ?
															item.file
															:
															undefined
													}
													onDownloadClick={
														search['type'] !== 'audioBook' || bookType ?
															async () => {
																await download(item.id)
															} :
															undefined
													}
													onRead={
														search['type'] !== 'audioBook' || bookType ?
															() => {
																window.open(item.interactive_file ? item.interactive_file : item.file, '_blank');
															}
															:
															undefined
													}
													onClickLike={
														search['type'] !== 'audioBook' || bookType ?
															() => {
																like(item.id)
															}
															:
															undefined
													}
													onPlay={
														search['type'] === 'audioBook' || bookType ?
															() => {
																setAudioBookDetails(item);
																setOpenAudioBookModal(true);
															} :
															undefined
													}
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
