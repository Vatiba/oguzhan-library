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

function NewsPapersPublishers() {
	const search = useSearch();
	const { t, i18n } = useTranslation('translation');

	const page = isNumber(Number(search['page'])) ? Number(search['page']) : 1;

	const {
		data: newsPaper,
		isError: newsPaperIsError
	} = useGetPublicationsPublishers({
		lang: i18n.language,
		page: page,
		type: 'newspaper'
	});

	const pageCount = useMemo(() => {
		if (!newsPaperIsError && newsPaper) {
			return Math.ceil(Number(newsPaper && newsPaper.count / 10));
		}
		return 1;
	}, [newsPaper, newsPaperIsError]);

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
				!newsPaperIsError && newsPaper &&
				<div className='flex flex-wrap -mx-1'>
					{
						newsPaper.results.map(item => {
							return (
								<Link className='w-full sm:w-1/2 lg:w-1/3 p-1' to={`/newsPapers/${item.id}`} key={item.id}>
									<img className='w-full' src={item.thumbnail} alt="newspaper image" />
								</Link>
							)
						})
					}
				</div>
			}

			{/* ==== Pagination ==== */}
			{
				pageCount > 1 && newsPaper && newsPaper?.results.length > 0 ?
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


export default NewsPapersPublishers;