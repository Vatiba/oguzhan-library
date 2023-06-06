import { BooksApi } from "@app/services/api/Books";
import { useQuery } from "@tanstack/react-query";

const booksApi = BooksApi.getInstance();

const useGetBooksAuthors = (lang: string) => {
   return useQuery(
      ["booksAuthors", lang],
      () => booksApi.getBooksAuthors(lang),
		{
			staleTime: 1000 * 60
		}
   );
};

export default useGetBooksAuthors;
