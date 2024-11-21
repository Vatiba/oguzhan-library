import React from 'react';
// components
import Container from '@app/components/Container';
import MainBanner from '@app/components/MainBanner';
import Carousel from '@app/components/Carousel';
import { Link } from '@tanstack/react-location';
// icons
// import { HomeModernIcon, NewspaperIcon } from '@heroicons/react/20/solid';
import FacultyIcon from '@app/assets/icons/school-outline.svg';
import NewspaperIcon from '@app/assets/icons/newspaper.svg';
// hooks
import { useTranslation } from 'react-i18next';
import { useGetMainBanners } from '@app/hooks/query/Main';
import { useGetFaculties } from '@app/hooks/query/Faculty';
import { useGetNews } from '@app/hooks/query/News';

function Home() {
	const { t, i18n } = useTranslation('translation');

	const {
		data: mainBanners,
		isError: mainBannersIsError
	} = useGetMainBanners();
	const {
		data: faculties,
		isError: facultiesIsError
	} = useGetFaculties(i18n.language);
	const {
		data: news,
		isError: newsIsError
	} = useGetNews({
		start_date: '',
		end_date: '',
		lang: i18n.language,
		page: 1,
		search: ''
	});

	return (
		<Container className='pt-[192px] md:pt-[207px]'>
			{
				!mainBannersIsError && mainBanners &&
				<div className='mt-4'>
					<MainBanner
						imgs={
							mainBanners.map(item => ({
								alt: "Banner image",
								src: item.image
							})) || []
						}
					/>
				</div>
			}
			{
				!facultiesIsError && faculties &&
				<div className='flex flex-col mt-[30px]'>
					<Link className='flex mb-1' to='/tutorials'>
						<img src={FacultyIcon} className="h-6 w-6 text-textColor mr-3" aria-hidden="true" />
						<h3 className='text-xl font-extrabold text-primary-dark'>
							{t('faculties')}
						</h3>
					</Link>
					<Carousel
						type='faculty'
						faculties={
							faculties.map(item => ({
								imgAlt: 'Faculty image',
								imgSrc: item.image || '',
								name: item.name,
								slug: item.slug,
								id: item.id,
								href: `/tutorials?faculty=${item.id}`
							})) || []
						}

					/>
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
								imgCN: 'object-cover',
								href: `/news/${item.id}`
							})) || []
						}
					/>
				</div>
			}
		</Container>
	)
}

export default Home;