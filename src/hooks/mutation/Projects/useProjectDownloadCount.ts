import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProjectsApi } from "@app/services/api/Projects";

const projectsApi = ProjectsApi.getInstance();

const useProjectDownloadCount = () => {
	const queryClient = useQueryClient();
	return useMutation((id: number) => projectsApi.projectDownloadCount(id), {
		onSuccess: () => {
			queryClient.invalidateQueries(["project"]);
			queryClient.invalidateQueries(["projects"]);
		}
	});
};



export default useProjectDownloadCount;