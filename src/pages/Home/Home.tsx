import Conference from '@app/components/Cards/Col/Conference';
import Faculty from '@app/components/Cards/Col/Faculty';
import Magazine from '@app/components/Cards/Col/Magazine';
import News from '@app/components/Cards/Col/News/News';
import Container from '@app/components/Container';
import React from 'react'

function Home() {
	return (
		<Container>
			{/* <div
				className='flex -ml-[7.5px] -mr-[7.5px]'
			>
				<div className='pl-[7.5px] pr-[7.5px] w-1/4'>
					<Faculty
						imgAlt='text'
						imgSrc='text'
						name='Kompýuter ylymlary we maglumat tehnologiýalary fakulteti'
					/>
				</div>
				<div className='pl-[7.5px] pr-[7.5px] w-1/4'>
					<Faculty
						imgAlt='text'
						imgSrc='text'
						name='Kompýuter ylymlary we maglumat tehnologiýalary fakulteti'
					/>
				</div>
				<div className='pl-[7.5px] pr-[7.5px] w-1/4'>
					<Faculty
						imgAlt='text'
						imgSrc='text'
						name='Kompýuter ylymlary we maglumat tehnologiýalary fakulteti'
					/>
				</div>
				<div className='pl-[7.5px] pr-[7.5px] w-1/4'>
					<Faculty
						imgAlt='text'
						imgSrc='text'
						name='Kompýuter ylymlary we maglumat tehnologiýalary fakulteti'
					/>
				</div>
			</div>

			<div
				className='flex -ml-[7.5px] -mr-[7.5px]'
			>
				<div className='pl-[7.5px] pr-[7.5px] w-1/4'>
					<News
						imgAlt='text'
						imgSrc='text'
						title='Arkadag şäherinde jaý meselesi nähili çözüler?'
						text='Türkmen halkynyň Milli Lideri, Türkmenistanyň Halk Maslahatynyň Başlygy Gurbanguly Berdimuhamedow 1-nji aprelde Arkadag şäherine amala aşyranasdfasdfasdfasdfsdaf'
						date='04.03.2023'
					/>
				</div>
				<div className='pl-[7.5px] pr-[7.5px] w-1/4'>
					<News
						imgAlt='text'
						imgSrc='text'
						title='Arkadag şäherinde jaý meselesi nähili çözüler?'
						text='Türkmen halkynyň Milli Lideri, Türkmenistanyň Halk Maslahatynyň Başlygy Gurbanguly Berdimuhamedow 1-nji aprelde Arkadag şäherine amala aşyranasdfasdfasdfasdfsdaf'
						date='04.03.2023'
					/>
				</div>
				<div className='pl-[7.5px] pr-[7.5px] w-1/4'>
					<News
						imgAlt='text'
						imgSrc='text'
						title='Arkadag şäherinde jaý meselesi nähili çözüler?'
						text='Türkmen halkynyň Milli Lideri, Türkmenistanyň Halk Maslahatynyň Başlygy Gurbanguly Berdimuhamedow 1-nji aprelde Arkadag şäherine amala aşyranasdfasdfasdfasdfsdaf'
						date='04.03.2023'
					/>
				</div>
				<div className='pl-[7.5px] pr-[7.5px] w-1/4'>
					<News
						imgAlt='text'
						imgSrc='text'
						title='Arkadag şäherinde jaý meselesi nähili çözüler?'
						text='Türkmen halkynyň Milli Lideri, Türkmenistanyň Halk Maslahatynyň Başlygy Gurbanguly Berdimuhamedow 1-nji aprelde Arkadag şäherine amala aşyranasdfasdfasdfasdfsdaf'
						date='04.03.2023'
					/>
				</div>
			</div>
			<div
				className='flex -ml-[7.5px] -mr-[7.5px] mt-4'
			>
				<div className='pl-[7.5px] pr-[7.5px] w-1/4'>
					<Magazine
						imgAlt='text'
						imgSrc='text'
						title='Türkmenistan gazeti'
						date='2023-04-03'
						downloadCount={50}
						likeCount={50}
						reviewCount={50}
					/>
				</div>
				<div className='pl-[7.5px] pr-[7.5px] w-1/4'>
					<Magazine
						imgAlt='text'
						imgSrc='text'
						title='Türkmenistan gazeti'
						date='2023-04-03'
						downloadCount={50}
						likeCount={50}
						reviewCount={50}
					/>
				</div>
				<div className='pl-[7.5px] pr-[7.5px] w-1/4'>
					<Magazine
						imgAlt='text'
						imgSrc='text'
						title='Türkmenistan gazeti'
						date='2023-04-03'
						downloadCount={50}
						likeCount={50}
						reviewCount={50}
					/>
				</div>
				<div className='pl-[7.5px] pr-[7.5px] w-1/4'>
					<Magazine
						imgAlt='text'
						imgSrc='text'
						title='Türkmenistan gazeti'
						date='2023-04-03'
						downloadCount={50}
						likeCount={50}
						reviewCount={50}
					/>
				</div>
			</div>
			<div
				className='flex -ml-[7.5px] -mr-[7.5px] mt-4'
			>
				<div className='pl-[7.5px] pr-[7.5px] w-1/5'>
					<Conference
						imgAlt='text'
						imgSrc='text'
						name='Halkara Bitaraplyk güni mynasybetli ylmy-amaly maslahat'
						date='Aşgabat - 2021'
					/>
				</div>
				<div className='pl-[7.5px] pr-[7.5px] w-1/5'>
					<Conference
						imgAlt='text'
						imgSrc='text'
						name='Halkara Bitaraplyk güni mynasybetli ylmy-amaly maslahat'
						date='Aşgabat - 2021'
					/>
				</div>
				<div className='pl-[7.5px] pr-[7.5px] w-1/5'>
					<Conference
						imgAlt='text'
						imgSrc='text'
						name='Halkara Bitaraplyk güni mynasybetli ylmy-amaly maslahat'
						date='Aşgabat - 2021'
					/>
				</div>
				<div className='pl-[7.5px] pr-[7.5px] w-1/5'>
					<Conference
						imgAlt='text'
						imgSrc='text'
						name='Halkara Bitaraplyk güni mynasybetli ylmy-amaly maslahat'
						date='Aşgabat - 2021'
					/>
				</div>
				<div className='pl-[7.5px] pr-[7.5px] w-1/5'>
					<Conference
						imgAlt='text'
						imgSrc='text'
						name='Halkara Bitaraplyk güni mynasybetli ylmy-amaly maslahat'
						date='Aşgabat - 2021'
					/>
				</div>
			</div> */}
		</Container>
	)
}

export default Home;