import React from 'react'
// icons
import { CalendarIcon } from '@heroicons/react/20/solid'

export type NewsProps = {
	imgSrc: string
	imgAlt: string
	title: string
	text: string
	date: string
	slug: string
}

function News(props: NewsProps) {
	const {
		imgSrc,
		imgAlt,
		title,
		text,
		date,
		slug,
	} = props;

	return (
		<div
			className='rounded-md shadow-md h-[400px] min-w-[250px] max-w-[350px] bg-mainBgColor flex flex-col'
		>
			<img
				className='max-h-[180px]'
				src={imgSrc}
				alt={imgAlt}
			/>
			<div className='p-4'>
				<h4 className='text-base font-normal leading-[19px]'>
					{title}
				</h4>
				<p className='text-base font-normal leading-[19px] line-clamp-5 pt-4'>
					{text}
				</p>
				<span className='flex items-center pt-4'>
					<CalendarIcon className="h-4 w-4 text-textColor mr-1" aria-hidden="true" />
					<span className='text-accentColor'>
						{date}
					</span>
				</span>
			</div>
		</div>
	)
}

export default News;
