import { BooksApi } from "@app/services/api/Books";
import { useQuery } from "@tanstack/react-query";

const booksApi = BooksApi.getInstance();

const useGetBookCategories = (lang: string) => {
	return useQuery(
		["bookCategories"],
		() => booksApi.getBookCategories(lang),
	);
};

export default useGetBookCategories;
