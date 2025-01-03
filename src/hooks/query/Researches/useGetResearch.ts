import { ResearchesApi } from "@app/services/api/Researches";
import { useQuery } from "@tanstack/react-query";

const researchesApi = ResearchesApi.getInstance();

const useGetResearch = (id: number, lang: string) => {
   return useQuery(
      ["research", id, lang],
      () => researchesApi.getResearch(id, lang),
      {
         staleTime: 1000 * 60,
      }
   );
};

export default useGetResearch;
