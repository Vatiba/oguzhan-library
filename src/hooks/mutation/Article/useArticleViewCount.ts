import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ArticleApi } from "@app/services/api/Article";

const articleApi = ArticleApi.getInstance();

const useArticleViewCount = () => {
   const queryClient = useQueryClient();
   return useMutation((id: number) => articleApi.articleViewCount(id), {
      onSuccess: () => {
         queryClient.invalidateQueries(["article"]);
         queryClient.invalidateQueries(["articles"]);
      }
   });
};

export default useArticleViewCount;