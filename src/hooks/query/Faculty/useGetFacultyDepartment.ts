import { FacultyApi } from "@app/services/api/Faculty";
import { useQuery } from "@tanstack/react-query";

const facultyApi = FacultyApi.getInstance();

const useGetFacultyDepartment = (faculty: string) => {
   return useQuery(
      [
         "facultyDepartments",
         faculty
      ],
      () => facultyApi.getFacultyDepartment(faculty),
      {
         staleTime: 1000 * 60
      }
   );
};

export default useGetFacultyDepartment;
