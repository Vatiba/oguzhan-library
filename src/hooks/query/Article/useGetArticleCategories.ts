import { ArticleApi } from "@app/services/api/Article";
import { useQuery } from "@tanstack/react-query";

const articleApi = ArticleApi.getInstance();

const useGetArticleCategories = (lang: string) => {
	return useQuery(
		["articlesCategories", lang],
		() => articleApi.getArticleCategories(lang),
		{
			staleTime: 1000 * 60,
		}
	);
};

export default useGetArticleCategories;
