import { ProjectsApi } from "@app/services/api/Projects";
import { useQuery } from "@tanstack/react-query";

const projectsApi = ProjectsApi.getInstance();

const useGetProject = (id: number, lang: string) => {
   return useQuery(
      ["project", id, lang],
      () => projectsApi.getProject(id, lang),
      {
         staleTime: 1000 * 60,
      }
   );
};

export default useGetProject;
