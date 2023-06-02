import { FacultyApi } from "@app/services/api/Faculty";
import { useQuery } from "@tanstack/react-query";

const facultyApi = FacultyApi.getInstance();

const useGetResearchCenters = (lang: string) => {
	return useQuery(
		["researchCenters", lang],
		() => facultyApi.getResearchCenters(lang),
		{
			staleTime: 1000 * 60
		}
	);
};

export default useGetResearchCenters;
