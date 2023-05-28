import { ProjectsApi } from "@app/services/api/Projects";
import { useQuery } from "@tanstack/react-query";

const projectsApi = ProjectsApi.getInstance();

const useGetProjectCategories = () => {
	return useQuery(
		["projectsCategories"],
		() => projectsApi.getProjectCategories(),
	);
};

export default useGetProjectCategories;
