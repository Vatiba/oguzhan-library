import { ResearchesApi } from "@app/services/api/Researches";
import { ResearchesGetDto } from "@app/services/types/Researches";
import { useQuery } from "@tanstack/react-query";

const researchesApi = ResearchesApi.getInstance();

const useGetResearches = ({
	author,
	category,
	department,
	faculty,
	orderDirection,
	ordering,
	page,
	search,
	lang
}: ResearchesGetDto) => {
	return useQuery(
		[
			"researches",
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
		() => researchesApi.getResearches({
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
		{
			staleTime: 1000 * 60,
		}
	);
};

export default useGetResearches;
