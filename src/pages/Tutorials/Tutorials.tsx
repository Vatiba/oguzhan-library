import React, { useState, useMemo } from 'react';
// components
import Container from '@app/components/Container';
import { Link, useNavigate, useSearch } from '@tanstack/react-location';
import TutorialFilter from '@app/components/Filters/TutorialFilter/TutorialFilter';
import Row from '@app/components/Cards/Row/Row';
import Pagination from '@app/components/common/Pagination';
import Drawer from '@app/components/common/Drawer/Drawer';
// hooks
import { useTranslation } from 'react-i18next';
// icons
import { ListBulletIcon } from '@heroicons/react/20/solid';
// helpers
import { isNumber } from '@app/utils/helpers';
// types
import { useGetTutorials } from '@app/hooks/query/Tutorials';


function Tutorials() {
	const navigate = useNavigate();
	const search = useSearch();
	const { t, i18n } = useTranslation('translation');

	const [drawerOpen, setDrawerOpen] = useState(false);

	const page = isNumber(Number(search['page'])) ? Number(search['page']) : 1;

	const {
		data: books,
		isError: booksIsError
	} = useGetTutorials({
		department: search['department'] as string || '',
		faculty: search['faculty'] as string || '',
		orderDirection: 'desc',
		ordering: 'id',
		page: search['page'] as number || 1,
		search: search['search'] as string || '',
		lang: i18n.language,
		major_years__year: search['studentYear'] as string || '',
		major_years__major: search['major'] as string || '',
		year: search['year'] as string || ''
	});

	const pageCount = useMemo(() => {
		if (!booksIsError && books) {
			return Math.ceil(Number(books && books.count / 10));
		}
		return 1;
	}, [books, booksIsError]);

	return (
		<>
			{/* ==== Filter drawers ==== */}
			<Drawer open={drawerOpen} setOpen={setDrawerOpen}>
				<TutorialFilter />
			</Drawer>
			<Container className='pt-[120px] md:pt-[135px]'>
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
				<div className="lg:hidden flex w-full justify-end mb-3">
					<button
						className='bg-mainBgColor rounded-md p-3'
						onClick={() => setDrawerOpen(true)}
					>
						<ListBulletIcon className="h-6 w-6 text-secondaryColor" aria-hidden="true" />
					</button>
				</div>
				{/* ==== Content ==== */}
				<div className='flex'>
					<div className='lg:block hidden 2xl:w-1/4 lg:w-2/7 pb-10'>
						<div className='rounded-md shadow-md bg-white py-7 px-7'>
							<TutorialFilter />
						</div>
					</div>
					<div className='2xl:w-3/4 lg:w-5/7 w-full px-2 my-3'>
						<div className='flex flex-col'>
							{
								!booksIsError && books ?
									books.results.map(item => {
										return (
											<div
												key={item.id}
												className='mb-2'
											>
												<Row
													alt={'Books image'}
													date={item.year}
													subTitles={item?.author ? [item.author] : []}
													title={item.name}
													downloadHref={item.file}
												/>
											</div>
										)
									})
									:
									null
							}
						</div>
					</div>
				</div>


				{/* ==== Pagination ==== */}
				{
					books?.count && books.results.length > 0 && pageCount > 1 ?
						<div className='w-full flex justify-end my-3'>
							<Pagination
								pageCount={pageCount}
								itemsPerPage={10}
								page={page}
								onPageChange={() => { }}
								pageRangeDisplayed={3}
							/>
						</div>
						:
						null
				}
			</Container>
		</>
	)
}

export default Tutorials;