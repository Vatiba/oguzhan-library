import { ArticleApi } from "@app/services/api/Article";
import { useQuery } from "@tanstack/react-query";

const articleApi = ArticleApi.getInstance();

const useGetArticleCategories = (lang: string) => {
	return useQuery(
		["articlesCategories"],
		() => articleApi.getArticleCategories(lang),
	);
};

export default useGetArticleCategories;
