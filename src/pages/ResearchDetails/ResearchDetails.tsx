import React from 'react';
// components
import Container from '@app/components/Container';
import { Link, useMatch } from '@tanstack/react-location';
// hooks
import { useTranslation } from 'react-i18next';
import { useGetResearch } from '@app/hooks/query/Researches';
// icons
import { CalendarIcon } from '@heroicons/react/20/solid';

function ResearchDetails() {
	const { params } = useMatch()
	const { t, i18n } = useTranslation('translation');


	const id = parseInt(params['id']);
	const {
		data: newsDetails,
		isError: newsDetailsIsError
	} = useGetResearch(id, i18n.language);

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
				<Link to='/articles' className='mr-1 ml-1'>
					{t('scienceArticles')}
				</Link>
				/
				{
					newsDetails?.author &&
					<span className='ml-1'>
						{`${newsDetails?.author.first_name || ''} ${newsDetails?.author.last_name || ''}`}
					</span>
				}
			</div>
			{
				!newsDetailsIsError && newsDetails &&
				<>
					<div className='shadow-md rounded-md px-5 py-2 bg-white mb-5'>
						<h1 className='font-bold text-xl text-center'>
							{newsDetails.name}
						</h1>
						<p className='mt-1 text-justify' dangerouslySetInnerHTML={{ __html: newsDetails.content }} />
						<span className='flex items-center pt-4'>
							<CalendarIcon className="h-4 w-4 text-textColor mr-1" aria-hidden="true" />
							<span className='text-accentColor'>
								{newsDetails.date_created}
							</span>
						</span>
					</div>
				</>
			}
		</Container>
	)
}

export default ResearchDetails;