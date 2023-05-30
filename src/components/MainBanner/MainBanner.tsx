import React from 'react';
// Swiper
import { Keyboard, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

type MainBannerProps = {
	imgs: {
		src: string
		alt: string
	}[]
}

function MainBanner(props: MainBannerProps) {
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
				keyboard={{
					enabled: true,
				}}
				slidesPerView='auto'
				spaceBetween={9}
				centeredSlides
				pagination
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

export default MainBanner;