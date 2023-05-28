import { ResearchesApi } from "@app/services/api/Researches";
import { useQuery } from "@tanstack/react-query";

const researchesApi = ResearchesApi.getInstance();

const useGetResearch = (id: number) => {
   return useQuery(
      ["research"],
      () => researchesApi.getResearch(id),
   );
};

export default useGetResearch;
