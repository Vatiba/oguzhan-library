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
	search
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
			search
		],
		() => researchesApi.getResearches({
			author,
			category,
			department,
			faculty,
			orderDirection,
			ordering,
			page,
			search
		}),
	);
};

export default useGetResearches;
