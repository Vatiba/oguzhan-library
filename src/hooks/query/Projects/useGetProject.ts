import { ProjectsApi } from "@app/services/api/Projects";
import { useQuery } from "@tanstack/react-query";

const projectsApi = ProjectsApi.getInstance();

const useGetProject = (id: number, lang: string) => {
   return useQuery(
      ["project", id, lang],
      () => projectsApi.getProject(id, lang),
   );
};

export default useGetProject;
