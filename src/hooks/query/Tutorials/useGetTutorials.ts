import { TutorialsApi } from "@app/services/api/Tutorials";
import { TutorialGetDto } from "@app/services/types/Tutorial";
import { useQuery } from "@tanstack/react-query";

const tutorialsApi = TutorialsApi.getInstance();

const useGetTutorials = ({
   department,
   faculty,
   lang,
   major_years__major,
   major_years__year,
   orderDirection,
   ordering,
   page,
   search,
   year,
}: TutorialGetDto) => {
   return useQuery(
      [
         "tutorials",
         department,
         faculty,
         lang,
         major_years__major,
         major_years__year,
         orderDirection,
         ordering,
         page,
         search,
         year,
      ],
      () => tutorialsApi.getTutorials({
         department,
         faculty,
         lang,
         major_years__major,
         major_years__year,
         orderDirection,
         ordering,
         page,
         search,
         year,
      }),
      {
         staleTime: 1000 * 60,
      }
   );
};

export default useGetTutorials;
