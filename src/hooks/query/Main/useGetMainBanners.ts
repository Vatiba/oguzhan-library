import { MainApi } from "@app/services/api/Main";
import { useQuery } from "@tanstack/react-query";

const mainApi = MainApi.getInstance();

const useGetMainBanners = () => {
	return useQuery(
		["mainBanners"],
		() => mainApi.getMainBanner(),
		{
			staleTime: 1000 * 60
		}
	);
};

export default useGetMainBanners;
