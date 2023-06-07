import { ProjectsApi } from "@app/services/api/Projects";
import { useQuery } from "@tanstack/react-query";

const projectsApi = ProjectsApi.getInstance();

const useGetProjectCategories = (lang: string) => {
	return useQuery(
		["projectsCategories", lang],
		() => projectsApi.getProjectCategories(lang),
		{
			staleTime: 1000 * 60,
		}
	);
};

export default useGetProjectCategories;
