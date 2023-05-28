import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PublicationsApi } from "@app/services/api/Publications";

const publicationsApi = PublicationsApi.getInstance();

const usePublicationDownloadCount = () => {
	const queryClient = useQueryClient();
	return useMutation((id: number) => publicationsApi.publicationDownloadCount(id), {
		onSuccess: () => {
			queryClient.invalidateQueries(["publication"]);
			queryClient.invalidateQueries(["publications"]);
		}
	});
};



export default usePublicationDownloadCount;