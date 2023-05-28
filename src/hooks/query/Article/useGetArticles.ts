import { ArticleApi } from "@app/services/api/Article";
import { ArticleGetDto } from "@app/services/types/Article";
import { useQuery } from "@tanstack/react-query";

const articleApi = ArticleApi.getInstance();

const useGetArticles = ({
	author,
	category,
	department,
	faculty,
	orderDirection,
	ordering,
	page,
	search,
}: ArticleGetDto) => {
	return useQuery(
		[
			"articles",
			author,
			category,
			department,
			faculty,
			orderDirection,
			ordering,
			page,
			search,
		],
		() => articleApi.getArticles({
			author,
			category,
			department,
			faculty,
			orderDirection,
			ordering,
			page,
			search,
		}),
	);
};

export default useGetArticles;
