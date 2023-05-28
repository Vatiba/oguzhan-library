import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PublicationsApi } from "@app/services/api/Publications";

const publicationsApi = PublicationsApi.getInstance();

const usePublicationLikeCount = () => {
	const queryClient = useQueryClient();
	return useMutation((id: number) => publicationsApi.publicationLikeCount(id), {
		onSuccess: () => {
			queryClient.invalidateQueries(["publication"]);
			queryClient.invalidateQueries(["publications"]);
		}
	});
};



export default usePublicationLikeCount;