import { TutorialsApi } from "@app/services/api/Tutorials";
import { useQuery } from "@tanstack/react-query";

const tutorialsApi = TutorialsApi.getInstance();

const useGetTutorial = (id: number, lang: string) => {
   return useQuery(
      ["tutorial", id, lang],
      () => tutorialsApi.getTutorial(id, lang),
   );
};

export default useGetTutorial;
