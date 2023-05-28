import { NewsApi } from "@app/services/api/News";
import { useQuery } from "@tanstack/react-query";

const newsApi = NewsApi.getInstance();

const useGetNew = (id: number, lang: string) => {
   return useQuery(
      ["news", id],
      () => newsApi.getNew(id, lang),
      {
         staleTime: 1000 * 60
      }
   );
};

export default useGetNew;
