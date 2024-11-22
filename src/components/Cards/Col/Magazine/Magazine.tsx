import React from 'react'
// icons
import { HeartIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import CalendarIcon from '@app/assets/icons/calendar.svg';


type MagazineProps = {
	imgSrc: string
	imgAlt: string
	title: string
	date: string | number
	likeCount: number
	reviewCount: number
	downloadCount: number
	onDownloadClick: () => void
	onClickLike: () => void
	downloadHref: string
}

function Magazine(props: MagazineProps) {
	const {
		imgSrc,
		imgAlt,
		title,
		date,
		likeCount,
		reviewCount,
		downloadCount,
		onDownloadClick,
		onClickLike,
		downloadHref,
	} = props;

	return (
		<div
			className='rounded-md min-w-[250px] bg-white border border-grey-dark flex flex-col p-[10px]'
		>
			<img
				className='max-h-[360px] rounded-md object-contain'
				src={imgSrc}
				alt={imgAlt}
			/>
			<h4 className='text-lg font-medium leading-[23px] pt-[10px]'>
				{title}
			</h4>
			<div className='flex justify-between items-end pt-[10px]'>
				<div className='flex flex-col'>
					<span className='flex items-center'>
						<img src={CalendarIcon} className="h-4 w-4 text-textColors-normal mr-1" aria-hidden="true" />
						<span className='text-primary-dark ml-2'>
							{typeof date == 'string' ? date.slice(0, 10) : date}
						</span>
					</span>
					<span className='flex pt-4'>
						<button className='flex text-sm font-normal leading-[16px] mr-2' onClick={() => onClickLike()}>
							<HeartIcon className="h-4 w-4 text-textColors-normal mr-1" aria-hidden="true" />
							{likeCount}
						</button>
						<span className='flex text-sm font-normal leading-[16px] mr-2'>
							<ArrowDownIcon className="h-4 w-4 text-textColors-normal mr-1" aria-hidden="true" />
							{downloadCount}
						</span>
					</span>
				</div>

				{
					downloadHref &&
					<a
						className='bg-primary-dark p-[10px] rounded-md flex items-center'
						target='_blank'
						href={downloadHref}
						download
						onClick={() => onDownloadClick?.()}
					>
						<ArrowDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
					</a>
				}
			</div>
		</div>
	)
}

export default Magazine;
