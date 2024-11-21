import React from 'react';
// icons
import { HeartIcon, EyeIcon, ArrowDownIcon, PlayIcon } from '@heroicons/react/24/outline';
import CalendarIcon from '@app/assets/icons/calendar.svg';
// components
import Btn from '@app/components/Buttons/Btn';
// hooks
import { useTranslation } from 'react-i18next';
import { INS } from '@app/services/types/Common';

export type RowContentProps = {
	imgSrc?: string | null
	alt: string
	title: string
	subTitles: string[]
	text?: string | null
	date: string | number | null
	likeCount?: number
	viewedCount?: number
	downloadCount?: number
	onClick?: () => void
	downloadHref?: string
	onRead?: () => void
	onPlay?: () => void
	onClickLike?: () => void
	research_production_center?: string
	onDownloadClick?: () => void
	subject?: INS
}

function RowContent(props: RowContentProps) {
	const {
		date,
		downloadCount,
		imgSrc,
		alt,
		likeCount,
		subTitles,
		text,
		title,
		viewedCount,
		onClick,
		downloadHref,
		onPlay,
		onRead,
		onClickLike,
		research_production_center,
		onDownloadClick,
		subject
	} = props;

	const { t } = useTranslation('translation');

	return (
		<>
			<div className='flex flex-col justify-center items-center sm:flex-row'>
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
				{
					imgSrc &&
					<img
						className='rounded-md sm:rounded-r-none sm:rounded-l-md cursor-pointer max-h-64 sm:h-auto sm:max-w-[130px] sm:min-w-[120px]'
						src={imgSrc}
						alt={alt}
						onClick={() => onClick?.()}
					/>
				}
				<div className='flex flex-col w-full'
				>
					<div className='sm:pr-36 flex flex-col sm:pl-[15px] mr-auto'>
						<h3
							className='text-xl text-primary-dark font-medium line-clamp-2'
							onClick={() => onClick?.()}
						>
							{title}
						</h3>
						<div
							className='pb-1 flex flex-col'
							onClick={() => onClick?.()}
						>
							{
								subTitles.map((item, index) => {
									return (
										<span
											className='text-base font-normal pt-1'
											key={index}
										>
											{item}
										</span>
									)
								})
							}
						</div>
						{/* {
						subject ?
							<div
								className='flex flex-col'
								onClick={() => onClick?.()}
							>
								<span
									className='text-base font-normal pt-1'
								>
									{t('subject')}: {subject.name}
								</span>
							</div>
							:
							null
						} */}
						{
							research_production_center &&
							<span
								className='text-lg font-bold pb-3'
							>
								{research_production_center}
							</span>
						}
						{
							text &&
							<div
								className='text-sm font-light line-clamp-3'
								dangerouslySetInnerHTML={{ __html: text }}
								onClick={() => onClick?.()}
							/>
						}
						{
							date ?
								<div className='my-2 flex items-center'>
									<img src={CalendarIcon} className="h-4 w-4 text-textColor mr-2" aria-hidden="true" />
									<span className='text-accentColor'>
										{date}
									</span>
								</div>
								:
								null
						}
					</div>
					<div className='flex justify-between w-full flex-wrap sm:pl-[15px]'>
						<div className='flex flex-col '>
							{/* {
								date ?
									<span className='flex items-center pt-0 sm:pt-2'>
										<CalendarIcon className="h-4 w-4 text-textColor mr-1" aria-hidden="true" />
										<span className='text-accentColor'>
											{date}
										</span>
									</span>
									:
									null
							} */}

							{
								subject ?
									<div
										className='flex flex-col'
										onClick={() => onClick?.()}
									>
										<span
											className='text-base font-normal pt-3'
										>
											{t('subject')}: {subject.name}
										</span>
									</div>
									:
									null
							}
							<span className='static sm:absolute right-0 top-0 flex sm:p-3'>
								{
									likeCount !== undefined &&
									<button
										className='flex text-sm font-normal leading-[16px] mr-4'
										onClick={() => onClickLike?.()}
									>
										<HeartIcon className="h-4 w-4 text-textColors-normal mr-1" aria-hidden="true" />
										{likeCount}
									</button>
								}
								{
									viewedCount !== undefined &&
									<span className='flex text-sm font-normal leading-[16px] mr-4'>
										<EyeIcon className="h-4 w-4 text-textColors-normal mr-1" aria-hidden="true" />
										{viewedCount}
									</span>
								}
								{
									downloadCount !== undefined &&
									<span className='flex text-sm font-normal leading-[16px] mr-4'>
										<ArrowDownIcon className="h-4 w-4 text-textColors-normal mr-1" aria-hidden="true" />
										{downloadCount}
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
										className='bg-primary-dark p-[10px] rounded-md flex items-center'
										target='_blank'
										href={downloadHref}
										download
										onClick={() => onDownloadClick?.()}
									>
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
		</>
	)
}

export default RowContent;