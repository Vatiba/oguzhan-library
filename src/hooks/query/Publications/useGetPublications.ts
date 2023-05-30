import { PublicationsApi } from "@app/services/api/Publications";
import { PublicationsGetDto } from "@app/services/types/Publications";
import { useQuery } from "@tanstack/react-query";

const publicationsApi = PublicationsApi.getInstance();

const useGetPublications = ({
	end_date,
	page,
	start_date,
	publisher,
	type,
	lang
}: PublicationsGetDto) => {
	return useQuery(
		[
			"publications",
			page,
			lang,
			type,
			publisher
		],
		() => publicationsApi.getPuplications({
			end_date,
			page,
			start_date,
			publisher,
			type,
			lang
		}),
	);
};

export default useGetPublications;
