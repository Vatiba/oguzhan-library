import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ResearchesApi } from "@app/services/api/Researches";

const researchesApi = ResearchesApi.getInstance();

const useResearchesDownloadCount = () => {
	const queryClient = useQueryClient();
	return useMutation((id: number) => researchesApi.researchDownloadCount(id), {
		onSuccess: () => {
			queryClient.invalidateQueries(["research"]);
			queryClient.invalidateQueries(["researches"]);
		}
	});
};



export default useResearchesDownloadCount;