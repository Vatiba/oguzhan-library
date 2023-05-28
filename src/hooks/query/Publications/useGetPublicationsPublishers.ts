import { PublicationsApi } from "@app/services/api/Publications";
import { PublishersGetDto } from "@app/services/types/Publications";
import { useQuery } from "@tanstack/react-query";

const publicationsApi = PublicationsApi.getInstance();

const useGetPublicationsPublishers = ({
	page,
	type
}: PublishersGetDto) => {
	return useQuery(
		[
			"publicationsPublishers",
			page,
			type
		],
		() => publicationsApi.getPuplicationsPublishers({
			page,
			type
		}),
	);
};

export default useGetPublicationsPublishers;
