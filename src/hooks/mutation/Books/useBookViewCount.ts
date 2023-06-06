import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BooksApi } from "@app/services/api/Books";

const booksApi = BooksApi.getInstance();

const useBookViewCount = () => {
	const queryClient = useQueryClient();
	return useMutation((id: number) => booksApi.bookViewCount(id), {
		onSuccess: () => {
			queryClient.invalidateQueries(["book"]);
			queryClient.invalidateQueries(["books"]);
		}
	});
};

export default useBookViewCount;