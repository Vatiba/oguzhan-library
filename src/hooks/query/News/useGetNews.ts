import { NewsApi } from "@app/services/api/News";
import { useQuery } from "@tanstack/react-query";

const newsApi = NewsApi.getInstance();

const useGetNews = () => {
   return useQuery(
      ["news"],
      () => newsApi.getNews(),
      {
         staleTime: 1000 * 60
      }
   );
};

export default useGetNews;
