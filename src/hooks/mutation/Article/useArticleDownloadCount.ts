import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ArticleApi } from "@app/services/api/Article";

const articleApi = ArticleApi.getInstance();

const useArticleDownloadCount = () => {
	const queryClient = useQueryClient();
	return useMutation((id: number) => articleApi.articleDownloadCount(id), {
		onSuccess: () => {
			queryClient.invalidateQueries(["article"]);
			queryClient.invalidateQueries(["articles"]);
		}
	});
};



export default useArticleDownloadCount;