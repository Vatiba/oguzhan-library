import React from 'react';
// Swiper
import { Autoplay, Keyboard, Navigation, Thumbs, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
		<div className='mainBanner'>
			<Swiper
				className='rounded-md'
				modules={[Keyboard, Autoplay, Pagination]}
				speed={300}
				autoplay={{
					delay: 5000,
					disableOnInteraction: true,
				}}
				keyboard={{
					enabled: true,
				}}
				slidesPerView='auto'
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
	);
}

export default MainBanner;