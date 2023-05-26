import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BooksApi } from "@app/services/api/Books";

const booksApi = BooksApi.getInstance();

const useBookLikeCount = () => {
	const queryClient = useQueryClient();
	return useMutation((id: number) => booksApi.bookLikeCount(id), {
		onSuccess: () => {
			queryClient.invalidateQueries(["book"]);
			queryClient.invalidateQueries(["books"]);
		}
	});
};

export default useBookLikeCount;