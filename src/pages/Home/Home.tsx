import React from 'react';
// components
import Container from '@app/components/Container';
import MainBanner from '@app/components/MainBanner';
import Carousel from '@app/components/Carousel';
import { Link, useLoadRoute, useMatch } from '@tanstack/react-location';
// icons
import { HomeModernIcon, NewspaperIcon } from '@heroicons/react/20/solid'
// hooks
import { useTranslation } from 'react-i18next';
// trash img
import img from '@app/assets/trash/uniwersity.jpg';
import facultyImg from '@app/assets/trash/2650401.jpg'
import newsImg from '@app/assets/trash/0-1680494938435-1000 1.jpg'
import { useGetBooks } from '@app/hooks/query/Books';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

function Home() {
	const { data } = useMatch();
	const { t } = useTranslation('translation');

	const {
		data: books
	} = useGetBooks({
		author: '',
		category: '',
		department: '',
		faculty: '',
		orderDirection: 'asc',
		ordering: '',
		page: 1,
		search: '',
		type: 'book'
	},);
	console.log(books)

	return (
		<Container>
			<div className='mt-4'>
				<MainBanner
					imgs={[
						{
							alt: 'text',
							src: img
						},
						{
							alt: 'text',
							src: img
						},
						{
							alt: 'text',
							src: img
						},
					]}
				/>
			</div>
			<div className='flex flex-col mt-[30px]'>
				<Link className='flex mb-5'>
					<HomeModernIcon className="h-6 w-6 text-textColor mr-1" aria-hidden="true" />
					<h3 className='text-xl font-extrabold underline'>
						{t('faculties')}
					</h3>
				</Link>
				<Carousel
					type='faculty'
					faculties={[
						{
							imgAlt: 'text',
							imgSrc: facultyImg,
							name: "Kompýuter ylymlary we maglumat tehnologiýalary fakulteti"
						},
						{
							imgAlt: 'text',
							imgSrc: facultyImg,
							name: "Kompýuter ylymlary we maglumat"
						},
						{
							imgAlt: 'text',
							imgSrc: facultyImg,
							name: "Kompýuter ylymlary we maglumat tehnologiýalary fakulteti"
						},
						{
							imgAlt: 'text',
							imgSrc: facultyImg,
							name: "Kompýuter ylymlary we maglumat tehnologiýalary fakulteti"
						},
						{
							imgAlt: 'text',
							imgSrc: facultyImg,
							name: "Kompýuter ylymlary we maglumat tehnologiýalary fakulteti"
						},
					]}
				/>
			</div>
			<div className='flex flex-col my-[40px]'>
				<Link className='flex mb-5'>
					<NewspaperIcon className="h-6 w-6 text-textColor mr-1" aria-hidden="true" />
					<h3 className='text-xl font-extrabold underline'>
						{t('news')}
					</h3>
				</Link>
				<Carousel
					type='news'
					news={[
						{
							date: '05.19.2023',
							imgAlt: 'text',
							imgSrc: newsImg,
							text: 'Türkmen halkynyň Milli Lideri, Türkmenistanyň Halk Maslahatynyň Başlygy Gurbanguly Berdimuhamedow 1-nji aprelde Arkadag şäherine amala aşyranasdfsad',
							title: 'Arkadag şäherinde jaý meselesi nähili çözüler?'
						},
						{
							date: '05.19.2023',
							imgAlt: 'text',
							imgSrc: newsImg,
							text: 'Türkmen banguly Berdimuhamedow 1-nji aprelde Arkadag şäherine amala aşyranasdfsad',
							title: 'Arkadag şäherinde jaý meselesi nähili çözüler?'
						},
						{
							date: '05.19.2023',
							imgAlt: 'text',
							imgSrc: newsImg,
							text: 'Türkmen halkynyň Milli Lideri, Türkmenistanyň Halk Maslahatynyň Başlygy Gurbanguly Berdimuhamedow 1-nji aprelde Arkadag şäherine amala aşyranasdfsad',
							title: 'Arkadag şäherinde jaý meselesi nähili çözüler?'
						},
						{
							date: '05.19.2023',
							imgAlt: 'text',
							imgSrc: newsImg,
							text: 'Türkmen halkynyň Milli Lideri, Türkmenistanyň Halk Maslahatynyň Başlygy Gurbanguly Berdimuhamedow 1-nji aprelde Arkadag şäherine amala aşyranasdfsad',
							title: 'Arkadag şäherinde jaý meselesi nähili çözüler?'
						},
						{
							date: '05.19.2023',
							imgAlt: 'text',
							imgSrc: newsImg,
							text: 'Türkmen halkynyň Milli Lideri, Türkmenistanyň Halk Maslahatynyň Başlygy Gurbanguly Berdimuhamedow 1-nji aprelde Arkadag şäherine amala aşyranasdfsad',
							title: 'Arkadag şäherinde jaý meselesi nähili çözüler?'
						},
						{
							date: '05.19.2023',
							imgAlt: 'text',
							imgSrc: newsImg,
							text: 'Türkmen halkynyň Milli Lideri, Türkmenistanyň Halk Maslahatynyň Başlygy Gurbanguly Berdimuhamedow 1-nji aprelde Arkadag şäherine amala aşyranasdfsad',
							title: 'Arkadag şäherinde jaý meselesi nähili çözüler?'
						},
						{
							date: '05.19.2023',
							imgAlt: 'text',
							imgSrc: newsImg,
							text: 'Türkmen halkynyň Milli Lideri, Türkmenistanyň Halk Maslahatynyň Başlygy Gurbanguly Berdimuhamedow 1-nji aprelde Arkadag şäherine amala aşyranasdfsad',
							title: 'Arkadag şäherinde jaý meselesi nähili çözüler?'
						},
						{
							date: '05.19.2023',
							imgAlt: 'text',
							imgSrc: newsImg,
							text: 'Türkmen halkynyň Milli Lideri, Türkmenistanyň Halk Maslahatynyň Başlygy Gurbanguly Berdimuhamedow 1-nji aprelde Arkadag şäherine amala aşyranasdfsad',
							title: 'Arkadag şäherinde jaý meselesi nähili çözüler?'
						},
						{
							date: '05.19.2023',
							imgAlt: 'text',
							imgSrc: newsImg,
							text: 'Türkmen halkynyň Milli Lideri, Türkmenistanyň Halk Maslahatynyň Başlygy Gurbanguly Berdimuhamedow 1-nji aprelde Arkadag şäherine amala aşyranasdfsad',
							title: 'Arkadag şäherinde jaý meselesi nähili çözüler?'
						},
						{
							date: '05.19.2023',
							imgAlt: 'text',
							imgSrc: newsImg,
							text: 'Türkmen halkynyň Milli Lideri, Türkmenistanyň Halk Maslahatynyň Başlygy Gurbanguly Berdimuhamedow 1-nji aprelde Arkadag şäherine amala aşyranasdfsad',
							title: 'Arkadag şäherinde jaý meselesi nähili çözüler?'
						},
						{
							date: '05.19.2023',
							imgAlt: 'text',
							imgSrc: newsImg,
							text: 'Türkmen halkynyň Milli Lideri, Türkmenistanyň Halk Maslahatynyň Başlygy Gurbanguly Berdimuhamedow 1-nji aprelde Arkadag şäherine amala aşyranasdfsad',
							title: 'Arkadag şäherinde jaý meselesi nähili çözüler?'
						},
					]}
				/>
			</div>
		</Container>
	)
}

export default Home;