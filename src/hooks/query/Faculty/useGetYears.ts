import { FacultyApi } from "@app/services/api/Faculty";
import { useQuery } from "@tanstack/react-query";

const facultyApi = FacultyApi.getInstance();

const useGetYears = (lang: string) => {
	return useQuery(
		[
			"years",
			lang
		],
		() => facultyApi.getYears(lang),
		{
			staleTime: 1000 * 60,
		}
	);
};

export default useGetYears;
