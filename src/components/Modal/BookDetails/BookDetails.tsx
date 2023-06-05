import React, { useState } from 'react';
// components
import Modal from '@app/components/common/Modal';
import { RowProps } from '@app/components/Cards/Row/Row';
import Btn from '@app/components/Buttons/Btn/Btn';
// icons
import { ArrowDownIcon, CalendarIcon, EyeIcon, HeartIcon, PlayIcon } from '@heroicons/react/20/solid';
// hooks
import { useTranslation } from 'react-i18next';
import { useGetBook } from '@app/hooks/query/Books';
// styles
import styles from './BookDetails.module.css';
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
			<div className='w-full'>
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
										<div className='bg-secondaryColor p-3 rounded-full'>
											<PlayIcon className='h-6 w-6 text-white' aria-hidden="true" />
										</div>
									</div>
								}
								<div className='flex flex-col justify-center items-center sm:flex-row p-2'>
									{
										book.thumbnail &&
										<img
											className='rounded-md sm:rounded-r-none sm:rounded-l-md cursor-pointer max-h-64 sm:h-auto sm:max-w-[130px] sm:min-w-[120px]'
											src={book.thumbnail}
											alt={alt}
											onClick={() => onRead?.()}
										/>
									}
									<div className='flex flex-col w-full'
									>
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
											{
												book.description &&
												<p className='text-sm font-light' dangerouslySetInnerHTML={{ __html: book.description }} />
											}
										</div>
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
												<span className='static sm:absolute right-0 top-0 flex sm:p-3'>
													{
														book.like_count !== undefined &&
														<button
															className='flex text-sm font-normal leading-[16px] mr-2'
															onClick={() => onClickLike?.()}
														>
															<HeartIcon className="h-4 w-4 text-textColor mr-1" aria-hidden="true" />
															{book.like_count}
														</button>
													}
													{
														book.view_count !== undefined &&
														<span className='flex text-sm font-normal leading-[16px] mr-2'>
															<EyeIcon className="h-4 w-4 text-textColor mr-1" aria-hidden="true" />
															{book.view_count}
														</span>
													}
													{
														book.download_count !== undefined &&
														<span className='flex text-sm font-normal leading-[16px] mr-2'>
															<ArrowDownIcon className="h-4 w-4 text-textColor mr-1" aria-hidden="true" />
															{book.download_count}
														</span>
													}
												</span>
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
															className='bg-secondaryColor p-[10px] rounded-md flex items-center'
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
									</div>
								</div>
								{
									src &&
									<div className='w-full flex justify-center mt-2 md:px-5 pb-2'>
										<Player src={src} />
									</div>
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
