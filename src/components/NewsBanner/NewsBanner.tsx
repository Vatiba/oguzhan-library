import React from 'react';
// Swiper
import { Autoplay, Keyboard, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

type NewsBannerProps = {
	imgs: {
		src: string
		alt: string
	}[]
}

function NewsBanner(props: NewsBannerProps) {
	const {
		imgs,
	} = props;

	return (
		imgs.length > 0 ?
		<div className='mainBanner'>
			<Swiper
				className='rounded-md'
				modules={[Keyboard, Autoplay, Pagination]}
				speed={300}
				slidesPerView='auto'
				autoplay={{
					delay: 5000,
					disableOnInteraction: true,
				}}
				keyboard={{
					enabled: true,
				}}
				breakpoints={{
					1200: {
						slidesPerView: 2.5
					},
					1024: {
						slidesPerView: 2
					},
					768: {
						slidesPerView: 1.5
					},
					0: {
						slidesPerView: 1
					}
				}}
				spaceBetween={9}
				pagination
				centeredSlides
				loop
			>
				{
					imgs.map((item, index) => (
						<SwiperSlide key={index}>
							<img
								className='w-full max-h-[400px] rounded-md'
								src={item.src}
								alt={item.alt}
							/>
						</SwiperSlide>
					))
				}
			</Swiper >
		</div>
		:
		<></>
	)
}

export default NewsBanner;