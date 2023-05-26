import { ArticleApi } from "@app/services/api/Article";
import { ArticleGetDto } from "@app/services/types/Article";
import { useQuery } from "@tanstack/react-query";

const articleApi = ArticleApi.getInstance();

const useGetArticles = (articlesGetDto: ArticleGetDto) => {
	return useQuery(
		["articles", articlesGetDto.page, articlesGetDto.search, articlesGetDto.ordering,],
		() => articleApi.getArticles(articlesGetDto),
	);
};

export default useGetArticles;
