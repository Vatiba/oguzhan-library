import { ArticleApi } from "@app/services/api/Article";
import { useQuery } from "@tanstack/react-query";

const articleApi = ArticleApi.getInstance();

const useGetArticle = (id: number) => {
   return useQuery(
      ["article", id],
      () => articleApi.getArticle(id),
   );
};

export default useGetArticle;
