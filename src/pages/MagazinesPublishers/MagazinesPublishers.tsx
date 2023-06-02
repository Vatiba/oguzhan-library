import React, { useMemo } from 'react';
// components
import Container from '@app/components/Container/Container';
import { Link, useSearch } from '@tanstack/react-location';
import Pagination from '@app/components/common/Pagination';
// hooks
import { useTranslation } from 'react-i18next';
import { useGetPublicationsPublishers } from '@app/hooks/query/Publications';
// helpers
import { isNumber } from '@app/utils/helpers';

function MagazinesPublishers() {
	const search = useSearch();
	const { t, i18n } = useTranslation('translation');

	const page = isNumber(Number(search['page'])) ? Number(search['page']) : 1;

	const {
		data: magazines,
		isError: magazinesIsError
	} = useGetPublicationsPublishers({
		lang: i18n.language,
		page: page,
		type: 'magazine'
	});

	const pageCount = useMemo(() => {
		if (!magazinesIsError && magazines) {
			return Math.ceil(Number(magazines && magazines.count / 10));
		}
		return 1;
	}, [magazines, magazinesIsError]);

	return (
		<Container className='pt-[120px] md:pt-[135px]'>
			{/* ==== Breadcrumb ==== */}
			<div className='my-6 font-bold text-xl'>
				<Link to='/' className='mr-1'>
					{t('mainPage')}
				</Link>
				/
				<span className='ml-1'>
					{t('eNewspapers')}
				</span>
			</div>

			{/* ==== Content ==== */}
			{
				!magazinesIsError && magazines &&
				<div className='flex flex-wrap -mx-1'>
					{
						magazines.results.map(item => {
							return (
								<Link to={`/magazines/${item.id}`} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1'>
									<img className='w-full' src={item.thumbnail} alt="newspaper image" />
								</Link>
							)
						})
					}
				</div>
			}

			{/* ==== Pagination ==== */}
			{
				magazines?.count && magazines.results.length > 0 && pageCount > 1 ?
					<div className='w-full flex justify-end'>
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
	)
}


export default MagazinesPublishers;