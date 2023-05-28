import { PublicationsApi } from "@app/services/api/Publications";
import { PublicationsGetDto } from "@app/services/types/Publications";
import { useQuery } from "@tanstack/react-query";

const publicationsApi = PublicationsApi.getInstance();

const useGetPublications = ({
	end_date,
	page,
	start_date
}: PublicationsGetDto) => {
	return useQuery(
		[
			"publications",
			end_date,
			page,
			start_date
		],
		() => publicationsApi.getPuplications({
			end_date,
			page,
			start_date
		}),
	);
};

export default useGetPublications;
