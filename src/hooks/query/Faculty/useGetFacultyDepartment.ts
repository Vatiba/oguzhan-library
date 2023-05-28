import { FacultyApi } from "@app/services/api/Faculty";
import { useQuery } from "@tanstack/react-query";

const facultyApi = FacultyApi.getInstance();

const useGetFacultyDepartment = (lang: string, faculty?: string) => {
   return useQuery(
      [
         "facultyDepartments",
         faculty,
         lang
      ],
      () => facultyApi.getFacultyDepartment(faculty as string, lang),
      {
         staleTime: 1000 * 60,
         enabled: !!faculty
      }
   );
};

export default useGetFacultyDepartment;
