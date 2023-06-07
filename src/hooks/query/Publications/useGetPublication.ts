import { PublicationsApi } from "@app/services/api/Publications";
import { useQuery } from "@tanstack/react-query";

const publicationsApi = PublicationsApi.getInstance();

const useGetPublication = (id: number, lang: string) => {
   return useQuery(
      ["publication", id],
      () => publicationsApi.getPublication(id, lang),
      {
         staleTime: 1000 * 60,
      }
   );
};

export default useGetPublication;
