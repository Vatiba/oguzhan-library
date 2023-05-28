import { BooksApi } from "@app/services/api/Books";
import { BooksGetDto } from "@app/services/types/Books";
import { useQuery } from "@tanstack/react-query";

const booksApi = BooksApi.getInstance();

const useGetBooks = ({
	author,
	category,
	department,
	faculty,
	orderDirection,
	ordering,
	page,
	search,
	type
}: BooksGetDto) => {
	return useQuery(
		[
			"books",
			author,
			category,
			department,
			faculty,
			orderDirection,
			ordering,
			page,
			search,
			type
		],
		() => booksApi.getBooks({
			author,
			category,
			department,
			faculty,
			orderDirection,
			ordering,
			page,
			search,
			type
		}),
		{
			staleTime: 1000 * 60
		}
	);
};

export default useGetBooks;
