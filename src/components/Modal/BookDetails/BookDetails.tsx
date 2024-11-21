import React from 'react';
// components
import Modal from '@app/components/common/Modal';
import { RowProps } from '@app/components/Cards/Row/Row';
import Btn from '@app/components/Buttons/Btn/Btn';
// icons
import { ArrowDownIcon, CalendarIcon, PlayIcon } from '@heroicons/react/24/outline';
// hooks
import { useTranslation } from 'react-i18next';
import { useGetBook } from '@app/hooks/query/Books';
// styles
import Player from '@app/components/Player/Player';

type BookDetailsProps = RowProps & {
	src?: string | null
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
	bookId: number
}

function BookDetails(props: BookDetailsProps) {
	const {
		src,
		alt,
		onClickLike,
		onPlay,
		onRead,
		isOpen,
		setIsOpen,
		bookId,
		onDownloadClick,
		downloadHref
	} = props;
	const { t, i18n } = useTranslation('translation');

	// query
	const {
		data: book,
		isLoading: bookIsLoading,
		isError: bookIsError
	} = useGetBook(bookId, i18n.language);

	return (
		<Modal
			isOpen={isOpen}
			onClose={() => setIsOpen(false)}
		>
			<div className='w-full px-5 py-8'>
				{
					!bookIsError ?
						!bookIsLoading ?
							<>
								{
									onPlay &&
									<div
										className='absolute w-full h-full hidden md:flex rounded-md justify-center items-center bg-accentColor cursor-pointer transition-opacity opacity-0 hover:opacity-50'
										onClick={() => onPlay()}
									>
										<div className='bg-primary-dark p-3 rounded-full'>
											<PlayIcon className='h-6 w-6 text-white' aria-hidden="true" />
										</div>
									</div>
								}
								<div className='flex sm:flex-row flex-wrap sm:flex-nowrap mb-4'>
									{
										book.thumbnail &&
										<img
											className='object-contain w-full rounded-md sm:rounded-r-none sm:rounded-l-md cursor-pointer max-h-64 sm:h-auto sm:max-w-[130px] sm:min-w-[120px]'
											src={book.thumbnail}
											alt={alt}
											onClick={() => onRead?.()}
										/>
									}
									<div className='sm:ml-4 flex flex-col w-full'>
										<div className='flex items-center mb-1'>
											<span className='text-primary-dark font-semibold text-lg'>
												{t('name')}:
											</span>
											<span className='text-textColors-dark ml-2'>
												{book.name}
											</span>
										</div>
										{
											book.author ?
												<div className='flex items-center mb-1'>
													<span className='text-primary-dark font-semibold text-lg'>
														{t('author')}:
													</span>
													<span className='text-textColors-dark ml-2'>
														{book.author.name}
													</span>
												</div>
												: null
										}
										<div className='flex items-center mb-1'>
											<span className='text-primary-dark font-semibold text-lg'>
												{t('year')}:
											</span>
											<span className='text-textColors-dark ml-2'>
												{book.year}
											</span>
										</div>
										<div className='flex items-center mb-1'>
											<span className='text-primary-dark font-semibold text-lg'>
												{t('category')}:
											</span>
											<span className='text-textColors-dark ml-2'>
												{book.category.name}
											</span>
										</div>
										<div className='flex'>
											{
												onRead &&
												<div className='pr-2'>
													<Btn
														txt={t('read') as string}
														onClick={(e) => {
															e.preventDefault();
															onRead();
														}}
													/>
												</div>
											}
											{
												downloadHref &&
												<div className='pr-2'>
													<a
														className='bg-primary-dark p-[10px] rounded-md flex items-center'
														target='_blank'
														href={downloadHref}
														download
														onClick={() => onDownloadClick?.()}
													>
														<ArrowDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
														<span className='text-base font-medium leading-[19px] text-white'>
															{t('download') as string}
														</span>
													</a>
												</div>
											}
										</div>
									</div>
									{/* <div className='flex flex-col w-full'>
										<div className='sm:pr-36 flex flex-col sm:pl-[15px] mr-auto'>
											<h3
												className='text-xl font-medium line-clamp-2'
											>
												{book.name}
											</h3>
											{
												book?.author &&
												<div className='pb-3 flex flex-col'>
													<span
														className='text-base font-normal pt-1'
													>
														{book.author.name}
													</span>
												</div>
											}
										</div>
										{
											book.description &&
											<p className='sm:pl-[15px] text-sm font-light' dangerouslySetInnerHTML={{ __html: book.description }} />
										}
										<div className='flex justify-between w-full flex-wrap pt-2 sm:pl-[15px]'>
											<div className='flex flex-col'>
												{
													book.year &&
													<span className='flex items-center pt-0 sm:pt-4'>
														<CalendarIcon className="h-4 w-4 text-textColor mr-1" aria-hidden="true" />
														<span className='text-accentColor'>
															{book.year}
														</span>
													</span>
												}
											</div>
											<div className='flex items-center sm:pt-0 pt-2'>
												{
													onRead &&
													<div className='pr-2'>
														<Btn
															txt={t('read') as string}
															onClick={(e) => {
																e.preventDefault();
																onRead();
															}}
														/>
													</div>
												}
												{
													downloadHref &&
													<div className='pr-2'>
														<a
															className='bg-primary-dark p-[10px] rounded-md flex items-center'
															target='_blank'
															href={downloadHref}
															download
															onClick={() => onDownloadClick?.()}
														>
															<ArrowDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
															<span className='text-base font-medium leading-[19px] text-white'>
																{t('download') as string}
															</span>
														</a>
													</div>
												}
												{
													onPlay &&
													<button
														className='flex md:hidden rounded-md justify-center items-center'
														onClick={() => onPlay()}
													>
														<div className='bg-secondaryColor p-2 rounded-full'>
															<PlayIcon className='h-6 w-6 text-white' aria-hidden="true" />
														</div>
													</button>
												}
											</div>
										</div>
									</div> */}
								</div>
								{
									src &&
									<div className='w-full flex justify-center mt-4 pb-4'>
										<Player src={src} />
									</div>
								}
								<div className='text-lg font-bold text-primary-dark mb-3'>
									{t('description')}
								</div>
								{
									book.description &&
									<div className='text-sm font-light' dangerouslySetInnerHTML={{ __html: book.description }} />
								}
							</>
							:
							<div className='flex justify-center p-3'>
								<span className="loader" />
							</div>
						:
						null
				}

			</div>
		</Modal>
	)
}

export default BookDetails;
