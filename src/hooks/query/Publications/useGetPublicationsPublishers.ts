import { PublicationsApi } from "@app/services/api/Publications";
import { PublishersGetDto } from "@app/services/types/Publications";
import { useQuery } from "@tanstack/react-query";

const publicationsApi = PublicationsApi.getInstance();

const useGetPublicationsPublishers = ({
	page,
	type,
	lang
}: PublishersGetDto) => {
	return useQuery(
		[
			"publicationsPublishers",
			page,
			type,
			lang
		],
		() => publicationsApi.getPuplicationsPublishers({
			page,
			type,
			lang
		}),
		{
			staleTime: 1000 * 60,
		}
	);
};

export default useGetPublicationsPublishers;
