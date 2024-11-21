import React from 'react';
// components
import RowContent from './RowContent';
import { INS } from '@app/services/types/Common';

export type RowProps = {
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
		downloadHref,
		onPlay,
		onRead,
		onClickLike,
		research_production_center,
		onDownloadClick,
		subject,
	} = props;

	return (
		<div className='relative bg-white border-b border-grey-dark pb-7 mb-7'>
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
				downloadHref={downloadHref}
				onDownloadClick={onDownloadClick}
				onRead={onRead}
				onPlay={onPlay}
				onClickLike={onClickLike}
				research_production_center={research_production_center}
				subject={subject}
			/>
		</div>
	)
}

export default Row;