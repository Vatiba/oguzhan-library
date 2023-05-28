import { BooksApi } from "@app/services/api/Books";
import { useQuery } from "@tanstack/react-query";

const booksApi = BooksApi.getInstance();

const useGetBooksAuthors = (lang: string) => {
   return useQuery(
      ["booksAuthors"],
      () => booksApi.getBooksAuthors(lang),
   );
};

export default useGetBooksAuthors;
