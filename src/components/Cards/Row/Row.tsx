import React from 'react';
// icons
import { CalendarIcon, HeartIcon, EyeIcon, ArrowDownIcon, PlayIcon } from '@heroicons/react/20/solid';
// components
import Btn from '@app/components/Buttons/Btn';
// hooks
import { useTranslation } from 'react-i18next';
import RowContent from './RowContent';

export type RowProps = {
	imgSrc: string
	alt: string
	title: string
	subTitles: string[]
	text: string
	date: string | number
	likeCount: number
	viewedCount: number
	downloadCount: number
	onClick?: () => void
	onDownload?: () => void
	onRead?: () => void
	onPlay?: () => void
	onClickLike: () => void
}

function Row(props: RowProps) {
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
		onDownload,
		onPlay,
		onRead,
		onClickLike,
	} = props;

	const { t } = useTranslation('translation');

	return (
		<div className='relative bg-white shadow-md'>
			<RowContent
				imgSrc={imgSrc}
				alt={alt}
				title={title}
				subTitles={subTitles}
				text={text}
				date={date}
				likeCount={likeCount}
				viewedCount={viewedCount}
				downloadCount={downloadCount}
				onClick={onClick}
				onDownload={onDownload}
				onRead={onRead}
				onPlay={onPlay}
				onClickLike={onClickLike}
			/>
		</div>
	)
}

export default Row;