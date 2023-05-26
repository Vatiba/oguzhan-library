import { BooksApi } from "@app/services/api/Books";
import { useQuery } from "@tanstack/react-query";

const booksApi = BooksApi.getInstance();

const useGetBooksAuthors = () => {
   return useQuery(
      ["booksAuthors"],
      () => booksApi.getBooksAuthors(),
   );
};

export default useGetBooksAuthors;
