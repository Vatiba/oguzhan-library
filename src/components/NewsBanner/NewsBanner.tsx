import React from 'react';
// Swiper
import { Keyboard, Pagination } from 'swiper';
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
					modules={[Keyboard, Pagination]}
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
							slidesPerView: 2.1
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
					pagination
					spaceBetween={9}
					centeredSlides
				>
					{
						imgs.map((item, index) => (
							<SwiperSlide key={index}>
								<a href={item.src} target='_blank'>
									<img
										className='w-full max-h-[400px] rounded-md object-contain'
										src={item.src}
										alt={item.alt}
									/>
								</a>
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