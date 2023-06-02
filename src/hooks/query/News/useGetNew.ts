import { NewsApi } from "@app/services/api/News";
import { useQuery } from "@tanstack/react-query";

const newsApi = NewsApi.getInstance();

const useGetNew = (lang: string, id?: number) => {
   return useQuery(
      ["news", id, lang],
      () => newsApi.getNew(id as number, lang),
      {
         staleTime: 1000 * 60,
         enabled: !!id
      }
   );
};

export default useGetNew;
