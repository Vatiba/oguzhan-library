import { NewsApi } from "@app/services/api/News";
import { NewsGetDto } from "@app/services/types/News";
import { useQuery } from "@tanstack/react-query";

const newsApi = NewsApi.getInstance();

const useGetNews = ({
	start_date,
	end_date,
	search,
	page,
	lang
}: NewsGetDto) => {
	return useQuery(
		[
			"news",
			page,
			lang
		],
		() => newsApi.getNews({
			start_date,
			end_date,
			search,
			page,
			lang
		}),
		{
			staleTime: 1000 * 60
		}
	);
};

export default useGetNews;
