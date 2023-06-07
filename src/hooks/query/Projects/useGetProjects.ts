import { ProjectsApi } from "@app/services/api/Projects";
import { ProjectsGetDto } from "@app/services/types/Projects";
import { useQuery } from "@tanstack/react-query";

const projectsApi = ProjectsApi.getInstance();

const useGetProjects = ({
	author,
	category,
	department,
	faculty,
	manager,
	orderDirection,
	ordering,
	page,
	search,
	lang,
	research_and_production_center
}: ProjectsGetDto) => {
	return useQuery(
		[
			"projects",
			author,
			category,
			department,
			faculty,
			manager,
			orderDirection,
			ordering,
			page,
			search,
			lang,
			research_and_production_center
		],
		() => projectsApi.getProjects({
			author,
			category,
			department,
			faculty,
			manager,
			orderDirection,
			ordering,
			page,
			search,
			lang,
			research_and_production_center
		}),
		{
			staleTime: 1000 * 60,
		}
	);
};

export default useGetProjects;
