import { FacultyApi } from "@app/services/api/Faculty";
import { useQuery } from "@tanstack/react-query";

const facultyApi = FacultyApi.getInstance();

const useGetMajors = (lang: string) => {
	return useQuery(
		[
			"majors",
			lang
		],
		() => facultyApi.getMajors(lang),
		{
			staleTime: 1000 * 60,
		}
	);
};

export default useGetMajors;
