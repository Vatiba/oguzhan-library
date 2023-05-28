import React, { useState } from 'react'
// components
import Container from '@app/components/Container';
import { Link, useSearch } from '@tanstack/react-location';
import SearchFilter from '@app/components/Filters/SearchFilter';
import { useTranslation } from 'react-i18next';
import { useGetBooks } from '@app/hooks/query/Books';
import Row from '@app/components/Cards/Row/Row';
// hooks

function Search() {
	const search = useSearch();
	const { t } = useTranslation('translation');

	const {
		data: books,
		isError: booksIsError
	} = useGetBooks({
		author: search['author'] as string || '',
		category: search['category'] as string || '',
		department: search['department'] as string || '',
		faculty: search['faculty'] as string || '',
		orderDirection: 'desc',
		ordering: 'id',
		page: search['page'] as number || 1,
		search: search['search'] as string || '',
		type: search['type'] as string || '',
	})

	return (
		<Container>
			{/* ==== Breadcrumb ==== */}
			<div className='my-6 font-bold text-xl'>
				<Link to='/' className='mr-1'>
					{t('mainPage')}
				</Link>
				/
				<span className='ml-1'>
					{t('search')}
				</span>
			</div>

			{/* ==== Content ==== */}
			<div className='flex'>
				<div className='lg:block hidden 2xl:w-1/4 lg:w-2/7 pb-10'>
					<div className='rounded-md shadow-md bg-white py-7 px-7'>
						<SearchFilter />
					</div>
				</div>
				<div className='2xl:w-3/4 lg:w-5/7 w-full px-2'>
					<div className='flex flex-col'>
						{
							!booksIsError && books ?
								books.results.map(item => {
									if (search['type'] !== 'audioBook')
										return (
											<></>
										)

									return (
										<Row
											alt={'Books image'}
											date={item.year}
											downloadCount={item.download_count}
											imgSrc={item.thumbnail}
											likeCount={item.liked_count}
											viewedCount={item.view_count}
											subTitles={[item.author.name]}
											text={item.description}
											title={item.name}
											
										/>
									)
								})
								:
								null
						}
					</div>
				</div>
			</div>
		</Container>
	)
}

export default Search;