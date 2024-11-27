import React from 'react'
// components
import Container from '../Container';
// images
import Logo from '@app/assets/img/logo.png';
import { Link } from '@tanstack/react-location';

function Footer() {
	return (
		<footer>
			<div className='bg-primary-dark'>
				<Container
					className='flex justify-between flex-wrap py-[14px]'
				>
					<Link className='flex items-center mr-2 mb-3 sm:mb-0' to="/">
						<img className='h-[50px] w-[50px] md:h-[65px] md:w-[65px]' src={Logo} alt="TITU logo" />
						<span className='pl-4 font-bold text-base md:text-[20px] leading-[24px] text-white'>TITU e-library</span>
					</Link>
					<div className='flex flex-col justify-center items-start sm:items-end'>
						<a href='tel:+99312391639' className='font-medium text-[16px] leading-[19px] text-white'>
							Tel: +99312 391639
						</a>
						<a href='mail:oguzhan@etut.edu.tm' className='font-medium text-[16px] leading-[19px] text-white mt-3'>
							Mail: oguzhan@etut.edu.tm
						</a>
					</div>
				</Container>
			</div>
		</footer>
	)
}

export default Footer;