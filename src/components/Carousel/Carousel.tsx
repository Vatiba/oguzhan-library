// Swiper
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
// hooks
import { useState } from 'react';
// types
import Faculty, { FacultyProps } from '../Cards/Col/Faculty/Faculty';
import News, { NewsProps } from '../Cards/Col/News/News';
// icons
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/20/solid'


type CarouselProps = {
	type: 'faculty' | 'news'
	faculties?: Array<FacultyProps & {
		id: number
	}>
	news?: Array<NewsProps & {
		id: number
	}>
}

function Carousel(props: CarouselProps) {
	const {
		type,
		faculties,
		news,
	} = props;

	const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
	const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

	return (
		<div className='relative'>
			<Swiper
				className='-mx-3 -my-3'
				modules={[Navigation]}
				spaceBetween={12}
				breakpoints={{
					1064: {
						slidesPerView: 4
					},
					920: {
						slidesPerView: 3.3
					},
					805: {
						slidesPerView: 2.7
					},
					720: {
						slidesPerView: 2.5
					},
					600: {
						slidesPerView: 2.2
					},
					530: {
						slidesPerView: 2
					},
					480: {
						slidesPerView: 1.7
					},
					0: {
						slidesPerView: 1.3
					}
				}}
				navigation={{ prevEl, nextEl }}
			>
				{
					type === 'faculty' ?
						faculties && faculties.map((faculty) => {
							return (
								<SwiperSlide key={faculty.id}>
									<Faculty
										{...faculty}
									/>
								</SwiperSlide>
							)
						})
						:
						news && news.map((news) => {
							return (
								<SwiperSlide key={news.id}>
									<News
										{...news}
									/>
								</SwiperSlide>
							)
						})
				}
			</Swiper>
			<div className='absolute flex justify-between z-10 w-full -mt-40'>
				<button
					ref={(node) => setPrevEl(node)}
					className='bg-mainBgColor shadow-md rounded-full p-2 -ml-6 cursor-pointer'
				>
					<ArrowLeftIcon className="h-6 w-6 text-textColor" aria-hidden="true" />
				</button>
				<button
					ref={(node) => setNextEl(node)}
					className='bg-mainBgColor shadow-md rounded-full p-2 -mr-6 cursor-pointer'
				>
					<ArrowRightIcon className="h-6 w-6 text-textColor" aria-hidden="true" />
				</button>
			</div>
		</div>
	);
}

export default Carousel;
