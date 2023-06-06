import { BooksApi } from "@app/services/api/Books";
import { useQuery } from "@tanstack/react-query";

const booksApi = BooksApi.getInstance();

const useGetBookSubjects = (lang: string) => {
   return useQuery(
      ["bookSubjects", lang],
      () => booksApi.getBookSubjects(lang),
		{
			staleTime: 1000 * 60
		}
   );
};

export default useGetBookSubjects;
