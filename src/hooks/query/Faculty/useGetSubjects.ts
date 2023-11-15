import { FacultyApi } from "@app/services/api/Faculty";
import { useQuery } from "@tanstack/react-query";

const facultyApi = FacultyApi.getInstance();

const useGetSubjects = (lang: string) => {
  return useQuery(
    ["subjects", lang],
    () => facultyApi.getFacultySubjects(lang),
    {
      staleTime: 1000 * 60,
    }
  );
};

export default useGetSubjects;
