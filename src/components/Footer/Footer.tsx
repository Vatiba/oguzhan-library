import React from 'react'
// components
import Container from '../Container';
// images
import Logo from '@app/assets/img/logo.png';

function Footer() {
	return (
		<footer>
			<div className='bg-primaryColor'>
				<Container
					className='flex justify-between py-[14px]'
				>
					<div className='flex items-center'>
						<img className='h-[65px] w-[65px]' src={Logo} alt="TITU logo" />
						<span className='pl-4 font-bold text-[20px] leading-[24px] text-white'>TITU e-library</span>
					</div>
					<div className='flex flex-col justify-center items-end'>
						<a href='+99312391639' className='font-medium text-[16px] leading-[19px] text-white'>
							Tel: +99312 391639
						</a>
						<a href='oguzhan@etut.edu.tm' className='font-medium text-[16px] leading-[19px] text-white mt-3'>
							Mail: oguzhan@etut.edu.tm
						</a>
					</div>
				</Container>
			</div>
			<div className='bg-accentColor'>
				<Container className='py-2'>
					<span className='font-medium text-[20px] leading-[23px] text-white'>©Copyright. All right reserved. TITU.</span>
				</Container>
			</div>
		</footer>
	)
}

export default Footer;