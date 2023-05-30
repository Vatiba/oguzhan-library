import React, { ReactNode, Suspense } from 'react';
// components
import Header from '@app/components/Header';
import Footer from '@app/components/Footer';
import Pending from '@app/components/common/Pending';

type CommonLayoutProps = {
	children: ReactNode
}

function Common(props: CommonLayoutProps) {
	const {
		children
	} = props;

	return (
		<Suspense fallback={<Pending />}>
			<div className='wrapper'>
				<Header />
				<div className='main'>
					{children}
				</div>
				<Footer />
			</div>
		</Suspense>
	)
}

export default Common;