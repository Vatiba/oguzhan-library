import { MainApi } from "@app/services/api/Main";
import { useQuery } from "@tanstack/react-query";

const mainApi = MainApi.getInstance();

const useGetExternalLinks = () => {
	return useQuery(
		["externalLinks"],
		() => mainApi.getExternalLinks(),
		{
			staleTime: 1000 * 60
		}
	);
};

export default useGetExternalLinks;
