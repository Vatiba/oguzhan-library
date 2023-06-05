import { ArticleApi } from "@app/services/api/Article";
import { useQuery } from "@tanstack/react-query";

const articleApi = ArticleApi.getInstance();

const useGetArticle = (id: number, lang: string) => {
   return useQuery(
      ["article", id, lang],
      () => articleApi.getArticle(id, lang),
   );
};

export default useGetArticle;
