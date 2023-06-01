import React, { Suspense } from 'react';
// components
import Container from '@app/components/Container';
import { Link, useMatch } from '@tanstack/react-location';
import Carousel from '@app/components/Carousel';
import NewsBanner from '@app/components/NewsBanner';
import Pending from '@app/components/common/Pending';
// hooks
import { useTranslation } from 'react-i18next';
import { useGetNew, useGetNews } from '@app/hooks/query/News';
// icons
import { CalendarIcon, NewspaperIcon } from '@heroicons/react/20/solid';

function NewsDetailsPage() {
	const { params } = useMatch()
	const { t, i18n } = useTranslation('translation');


	const id = parseInt(params['id']);
	const {
		data: newsDetails,
		isError: newsDetailsIsError
	} = useGetNew(i18n.language, id);
	const {
		data: news,
		isError: newsIsError,
	} = useGetNews({
		start_date: '',
		end_date: '',
		lang: i18n.language,
		page: 1,
		search: ''
	});

	return (
		<Container
			className='pt-[120px] md:pt-[135px]'
		>
			{/* ==== Breadcrumb ==== */}
			<div className='my-6 font-bold text-xl'>
				<Link to='/' className='mr-1'>
					{t('mainPage')}
				</Link>
				/
				<span className='ml-1'>
					{t('news')}
				</span>
			</div>
			{
				!newsDetailsIsError && newsDetails &&
				<>
					{
						newsDetails.images &&
						<div className='my-1'>
							<NewsBanner
								imgs={
									newsDetails.images.map(item => {
										return {
											alt: 'News image',
											src: item.path
										}
									})
								}
							/>
						</div>
					}
					<div className='shadow-md rounded-md px-5 py-2 bg-white'>
						<h1 className='font-bold text-xl'>
							{newsDetails.name}
						</h1>
						<p className='mt-1' dangerouslySetInnerHTML={{ __html: newsDetails.content }} />
						<span className='flex items-center pt-4'>
							<CalendarIcon className="h-4 w-4 text-textColor mr-1" aria-hidden="true" />
							<span className='text-accentColor'>
								{newsDetails.date_created}
							</span>
						</span>
					</div>
				</>
			}

			{
				!newsIsError && news?.results &&
				<div className='flex flex-col my-[40px]'>
					<span className='flex mb-5'>
						<NewspaperIcon className="h-6 w-6 text-textColor mr-1" aria-hidden="true" />
						<h3 className='text-xl font-extrabold'>
							{t('latestNews')}
						</h3>
					</span>
					<Carousel
						type='news'
						news={
							news.results.map(item => ({
								date: item.date_created,
								imgSrc: item.thumbnail,
								imgAlt: "News image",
								text: item.content,
								title: item.name,
								id: item.id,
								slug: item.slug
							})) || []
						}
					/>
				</div>
			}
		</Container>
	)
}

export default NewsDetailsPage;