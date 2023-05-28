import { ResearchesApi } from "@app/services/api/Researches";
import { useQuery } from "@tanstack/react-query";

const researchesApi = ResearchesApi.getInstance();

const useGetResearchesCategories = (lang: string) => {
	return useQuery(
		["researchesCategories"],
		() => researchesApi.getResearchesCategories(lang),
	);
};

export default useGetResearchesCategories;
