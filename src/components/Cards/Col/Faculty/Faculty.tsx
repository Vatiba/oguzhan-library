import React from 'react'
// trash
import trashImg from '@app/assets/trash/2650401.jpg'

type FacultyProps = {
	imgSrc: string
	imgAlt: string
	name: string
}

function Faculty(props: FacultyProps) {
	const {
		imgSrc,
		imgAlt,
		name
	} = props;

	return (
		<div
			className='rounded-md shadow-md min-w-[250px] max-w-[350px] bg-mainBgColor flex flex-col'
		>
			<img
				className='max-h-[190px]'
				src={trashImg}
				alt={imgAlt}
			/>
			<span className='text-lg p-4 font-medium leading-[23px]'>
				{name}
			</span>
		</div>
	)
}

export default Faculty;
