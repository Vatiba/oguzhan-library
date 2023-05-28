import { ResearchesApi } from "@app/services/api/Researches";
import { useQuery } from "@tanstack/react-query";

const researchesApi = ResearchesApi.getInstance();

const useGetResearchesCategories = () => {
	return useQuery(
		["researchesCategories"],
		() => researchesApi.getResearchesCategories(),
	);
};

export default useGetResearchesCategories;
