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
		<Link
			to='#'
			className='rounded-md shadow-md h-[290px] min-w-[250px] max-w-[350px] bg-mainBgColor flex flex-col'
		>
			<img
				className='max-h-[190px]'
				src={imgSrc}
				alt={imgAlt}
			/>
			<span className='text-lg p-4 font-medium leading-[23px]'>
				{name}
			</span>
		</Link>
	)
}

export default Faculty;
