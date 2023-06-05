import { BooksApi } from "@app/services/api/Books";
import { useQuery } from "@tanstack/react-query";

const booksApi = BooksApi.getInstance();

const useGetBookGenres = (lang: string) => {
	return useQuery(
		["bookGenres", lang],
		() => booksApi.getBookGenres(lang),
	);
};

export default useGetBookGenres;
