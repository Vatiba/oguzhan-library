import { ProjectsApi } from "@app/services/api/Projects";
import { useQuery } from "@tanstack/react-query";

const projectsApi = ProjectsApi.getInstance();

const useGetProject = (id: number) => {
   return useQuery(
      ["project", id],
      () => projectsApi.getProject(id),
   );
};

export default useGetProject;
