import { BooksApi } from "@app/services/api/Books";
import { useQuery } from "@tanstack/react-query";

const booksApi = BooksApi.getInstance();

const useGetBookCategories = () => {
	return useQuery(
		["bookCategories"],
		() => booksApi.getBookCategories(),
	);
};

export default useGetBookCategories;
