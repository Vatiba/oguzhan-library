
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
// hooks
import { useNavigate } from "@tanstack/react-location";

export interface PaginationProps extends ReactPaginateProps {
	className?: string
	initialPage?: number
	marginPagesDisplayed?: number
	pageCount: number
	pageRangeDisplayed?: number
	onPageChange: ({ selected }: { selected: number }) => void
	itemsPerPage: number
	total?: number
	page: number
}

const Pagination: React.FC<PaginationProps> = (props) => {
	const navigate = useNavigate();

	return (
		<ReactPaginate
			{...props}
			onPageChange={({ selected }) => {
				props.onPageChange({ selected });
				navigate({
					search(prev) {
						return {
							...prev,
							page: selected + 1
						}
					}
				});
			}}
			forcePage={props.page - 1}
			containerClassName='flex h-12'
			activeClassName='py-2 px-4 bg-primary-dark rounded-md text-white font-bold text-lg'
			pageClassName='border py-2 px-4 rounded-md font-bold text-lg hover:bg-primary-dark hover:text-white'
			breakClassName='border py-2 px-4 rounded-md font-bold text-lg hover:bg-primary-dark hover:text-white'
			nextClassName='border py-2 px-4 rounded-md font-bold text-lg hover:bg-primary-dark hover:text-white'
			previousClassName='border py-2 px-4 rounded-md font-bold text-lg hover:bg-primary-dark hover:text-white'
			previousLabel={'<'}
			nextLabel={'>'}
		/>
	);
};

export default Pagination;