import { BooksApi } from "@app/services/api/Books";
import { BooksGetDto } from "@app/services/types/Books";
import { useQuery } from "@tanstack/react-query";

const booksApi = BooksApi.getInstance();

const useGetBooks = (booksGetDto: BooksGetDto) => {
	return useQuery(
		["books", booksGetDto.page, booksGetDto.search, booksGetDto.ordering, booksGetDto.orderDirection],
		() => booksApi.getBooks(booksGetDto),
	);
};

export default useGetBooks;
