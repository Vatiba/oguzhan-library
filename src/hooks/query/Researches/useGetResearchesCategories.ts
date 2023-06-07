import { ResearchesApi } from "@app/services/api/Researches";
import { useQuery } from "@tanstack/react-query";

const researchesApi = ResearchesApi.getInstance();

const useGetResearchesCategories = (lang: string) => {
	return useQuery(
		["researchesCategories", lang],
		() => researchesApi.getResearchesCategories(lang),
		{
			staleTime: 1000 * 60,
		}
	);
};

export default useGetResearchesCategories;
