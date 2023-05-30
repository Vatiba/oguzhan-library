import React from 'react'
// icons
import { CalendarIcon, HeartIcon, EyeIcon, ArrowDownIcon } from '@heroicons/react/20/solid'
// components
import Btn from '@app/components/Buttons/Btn'

type MagazineProps = {
	imgSrc: string
	imgAlt: string
	title: string
	date: string
	likeCount: number
	reviewCount: number
	downloadCount: number
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
	} = props;

	return (
		<div
			className='rounded-md shadow-md min-w-[250px] max-w-[350px] bg-mainBgColor flex flex-col p-[10px]'
		>
			<img
				className='max-h-[360px] rounded-md'
				src={imgSrc}
				alt={imgAlt}
			/>
			<h4 className='text-lg font-medium leading-[23px] pt-[10px]'>
				{title}
			</h4>
			<div className='flex justify-between items-end pt-[10px]'>
				<div className='flex flex-col'>
					<span className='flex items-center'>
						<CalendarIcon className="h-4 w-4 text-textColor mr-1" aria-hidden="true" />
						<span className='text-accentColor'>
							{date}
						</span>
					</span>
					<span className='flex pt-4'>
						<span className='flex text-sm font-normal leading-[16px] mr-2'>
							<HeartIcon className="h-4 w-4 text-textColor mr-1" aria-hidden="true" />
							{likeCount}
						</span>
						<span className='flex text-sm font-normal leading-[16px] mr-2'>
							<EyeIcon className="h-4 w-4 text-textColor mr-1" aria-hidden="true" />
							{reviewCount}
						</span>
						<span className='flex text-sm font-normal leading-[16px] mr-2'>
							<ArrowDownIcon className="h-4 w-4 text-textColor mr-1" aria-hidden="true" />
							{downloadCount}
						</span>
					</span>
				</div>
				<Btn downLoad/>
			</div>
		</div>
	)
}

export default Magazine;
