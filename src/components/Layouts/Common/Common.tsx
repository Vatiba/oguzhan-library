import React, { ReactNode } from 'react';
// components
import Header from '@app/components/Header';
import Footer from '@app/components/Footer';

type CommonLayoutProps = {
	children: ReactNode
}

function Common(props: CommonLayoutProps) {
	const {
		children
	} = props;

	return (
		<div className='wrapper'>
			<Header />
			<div className='main'>
				{children}
			</div>
			<Footer />
		</div>
	)
}

export default Common;