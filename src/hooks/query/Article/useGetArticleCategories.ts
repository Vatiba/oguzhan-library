import { ArticleApi } from "@app/services/api/Article";
import { useQuery } from "@tanstack/react-query";

const articleApi = ArticleApi.getInstance();

const useGetArticleCategories = () => {
	return useQuery(
		["articlesCategories"],
		() => articleApi.getArticleCategories(),
	);
};

export default useGetArticleCategories;
