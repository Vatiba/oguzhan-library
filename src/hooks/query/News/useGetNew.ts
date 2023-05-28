import { NewsApi } from "@app/services/api/News";
import { useQuery } from "@tanstack/react-query";

const newsApi = NewsApi.getInstance();

const useGetNew = (id: number) => {
   return useQuery(
      ["news", id],
      () => newsApi.getNew(id),
      {
         staleTime: 1000 * 60
      }
   );
};

export default useGetNew;
