import { FacultyApi } from "@app/services/api/Faculty";
import { useQuery } from "@tanstack/react-query";

const facultyApi = FacultyApi.getInstance();

const useGetFaculties = () => {
	return useQuery(
		["faculties"],
		() => facultyApi.getFaculties(),
		{
			staleTime: 1000 * 60
		}
	);
};

export default useGetFaculties;
