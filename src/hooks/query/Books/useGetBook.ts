import { BooksApi } from "@app/services/api/Books";
import { useQuery } from "@tanstack/react-query";

const booksApi = BooksApi.getInstance();

const useGetBook = (id: number) => {
   return useQuery(
      ["book", id],
      () => booksApi.getBook(id),
   );
};

export default useGetBook;
