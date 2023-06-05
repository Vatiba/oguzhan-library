import { FacultyApi } from "@app/services/api/Faculty";
import { useQuery } from "@tanstack/react-query";

const facultyApi = FacultyApi.getInstance();

const useGetFaculties = (lang: string) => {
	return useQuery(
		["faculties", lang],
		() => facultyApi.getFaculties(lang),
		{
			staleTime: 1000 * 60
		}
	);
};

export default useGetFaculties;
