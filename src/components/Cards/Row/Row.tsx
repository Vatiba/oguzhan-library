import React from 'react';
// components
import RowContent from './RowContent';

export type RowProps = {
	imgSrc: string | null
	alt: string
	title: string
	subTitles: string[]
	text: string | null
	date: string | number | null
	likeCount: number
	viewedCount: number
	downloadCount: number
	onClick?: () => void
	onDownload?: () => void
	onRead?: () => void
	onPlay?: () => void
	onClickLike?: () => void
	research_production_center?: string
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
		research_production_center
	} = props;

	return (
		<div className='relative bg-white shadow-md rounded-md'>
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
				research_production_center={research_production_center}
			/>
		</div>
	)
}

export default Row;