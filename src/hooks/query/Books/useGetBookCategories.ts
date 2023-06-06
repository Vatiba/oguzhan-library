import { BooksApi } from "@app/services/api/Books";
import { useQuery } from "@tanstack/react-query";

const booksApi = BooksApi.getInstance();

const useGetBookCategories = (lang: string) => {
	return useQuery(
		["bookCategories", lang],
		() => booksApi.getBookCategories(lang),
		{
			staleTime: 1000 * 60
		}
	);
};

export default useGetBookCategories;
