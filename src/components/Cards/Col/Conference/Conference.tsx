import { downloadFile } from '@app/utils/helpers';
import React from 'react';

type ConferenceProps = {
	imgSrc: string
	imgAlt: string
	name: string
	date: string
	file: string
}

function Conference(props: ConferenceProps) {
	const {
		imgSrc,
		imgAlt,
		name,
		date,
		file
	} = props;

	return (
		<div
			className='rounded-md shadow-md min-w-[250px] max-w-[350px] bg-mainBgColor flex flex-col'
		>
			<img
				className='max-h-[327px] rounded-t-md cursor-pointer'
				src={imgSrc}
				alt={imgAlt}
				onClick={() => window.open(file, '_blank')}
			/>
			<div className='flex flex-col p-3'>
				<span className='text-lg font-medium leading-[23px] text-center'>
					{name}
				</span>
				<span className='text-xs pt-2 font-medium leading-[14px] text-center text-accentColor'>
					{date}
				</span>
			</div>
		</div>
	)
}

export default Conference;
