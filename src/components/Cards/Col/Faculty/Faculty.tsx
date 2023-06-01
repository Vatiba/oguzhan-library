import { Link } from '@tanstack/react-location'
import React from 'react'

export type FacultyProps = {
	imgSrc: string
	imgAlt: string
	name: string
	slug: string
}

function Faculty(props: FacultyProps) {
	const {
		imgSrc,
		imgAlt,
		name,
		slug
	} = props;

	return (
		<div
			className='rounded-md shadow-md h-[290px] min-w-[250px] max-w-[350px] bg-mainBgColor flex flex-col'
		>
			<img
				className='h-[190px] rounded-t-md object-cover'
				src={imgSrc}
				alt={imgAlt}
			/>
			<span className='text-lg p-4 font-medium leading-[23px]'>
				{name}
			</span>
		</div>
	)
}

export default Faculty;
