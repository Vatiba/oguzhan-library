import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ResearchesApi } from "@app/services/api/Researches";

const researchesApi = ResearchesApi.getInstance();

const useResearchesLikeCount = () => {
	const queryClient = useQueryClient();
	return useMutation((id: number) => researchesApi.researchLikeCount(id), {
		onSuccess: () => {
			queryClient.invalidateQueries(["research"]);
			queryClient.invalidateQueries(["researches"]);
		}
	});
};



export default useResearchesLikeCount;