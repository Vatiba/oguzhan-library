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
	lang
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
			lang
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
			lang
		}),
	);
};

export default useGetArticles;
