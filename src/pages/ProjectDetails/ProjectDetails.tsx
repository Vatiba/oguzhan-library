import React from 'react';
// components
import Container from '@app/components/Container';
import { Link, useMatch } from '@tanstack/react-location';
import Carousel from '@app/components/Carousel';
import NewsBanner from '@app/components/NewsBanner';
// hooks
import { useTranslation } from 'react-i18next';
import { useGetProject, useGetProjects } from '@app/hooks/query/Projects';
// icons
import CalendarIcon from '@app/assets/icons/calendar.svg';
import NewspaperIcon from '@app/assets/icons/newspaper.svg';

function ProjectDetails() {
	const { params } = useMatch()
	const { t, i18n } = useTranslation('translation');


	const id = parseInt(params['id']);
	const {
		data: newsDetails,
		isError: newsDetailsIsError
	} = useGetProject(id, i18n.language);
	const {
		data: news,
		isError: newsIsError,
	} = useGetProjects({
		author: '',
		category: '',
		department: '',
		faculty: '',
		lang: '',
		manager: '',
		orderDirection: 'desc',
		ordering: '',
		page: 1,
		research_and_production_center: '',
		search: '',
	});

	return (
		<Container
			className='pt-[192px] md:pt-[207px]'
		>
			{/* ==== Breadcrumb ==== */}
			<div className='my-6 text-lg text-textColors-normal'>
				<Link to='/' className='mr-1'>
					{t('mainPage')}
				</Link>
				/
				<Link to='/articles' className='mr-1 ml-1'>
					{t('designWorks')}
				</Link>
				/
				{
					newsDetails?.authors &&
					<span className='ml-1'>
						{newsDetails.authors}
					</span>
				}
			</div>
			{
				!newsDetailsIsError && newsDetails &&
				<div className='rounded-md p-5 bg-white border border-grey-dark'>
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
					<h1 className='font-bold text-xl mt-10'>
						{newsDetails.name}
					</h1>
					<p className='mt-1 text-justify' dangerouslySetInnerHTML={{ __html: newsDetails.content }} />
					<span className='flex items-center pt-4'>
						<img src={CalendarIcon} className="h-4 w-4 text-textColor mr-2" aria-hidden="true" />
						<span className='text-accentColor'>
							{newsDetails.date_created}
						</span>
					</span>
				</div>
			}
			{
				!newsIsError && news?.results &&
				<div className='flex flex-col my-[40px]'>
					<Link className='flex mb-1' to="/news">
						<img src={NewspaperIcon} className="h-6 w-6 text-textColor mr-3" aria-hidden="true" />
						<h3 className='text-xl font-extrabold text-primary-dark'>
							{t('news')}
						</h3>
					</Link>
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
								slug: item.slug,
								imgCN: 'object-contain',
								href: `/projects/${item.id}`
							})) || []
						}
					/>
				</div>
			}
		</Container>
	)
}

export default ProjectDetails;