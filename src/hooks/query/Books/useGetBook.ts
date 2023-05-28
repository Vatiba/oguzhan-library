import { BooksApi } from "@app/services/api/Books";
import { useQuery } from "@tanstack/react-query";

const booksApi = BooksApi.getInstance();

const useGetBook = (id: number, lang: string) => {
   return useQuery(
      ["book", id],
      () => booksApi.getBook(id, lang),
   );
};

export default useGetBook;
