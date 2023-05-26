import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ArticleApi } from "@app/services/api/Article";

const articleApi = ArticleApi.getInstance();

const useArticleLikeCount = () => {
	const queryClient = useQueryClient();
	return useMutation((id: number) => articleApi.articleLikeCount(id), {
		onSuccess: () => {
			queryClient.invalidateQueries(["article"]);
			queryClient.invalidateQueries(["articles"]);
		}
	});
};

export default useArticleLikeCount;