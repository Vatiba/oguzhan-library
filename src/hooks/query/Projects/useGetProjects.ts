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
	lang
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
			lang
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
			lang
		}),
	);
};

export default useGetProjects;
