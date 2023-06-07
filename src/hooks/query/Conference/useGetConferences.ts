import { ConferenceApi } from "@app/services/api/Conference";
import { ConferenceGetDto } from "@app/services/types/Conference";
import { useQuery } from "@tanstack/react-query";

const conferenceApi = ConferenceApi.getInstance();

const useGetConferences = ({
	end_date,
	page,
	search,
	start_date,
	lang
}: ConferenceGetDto) => {
	return useQuery(
		[
			"conferences",
			page,
			lang
		],
		() => conferenceApi.getConferences({
			end_date,
			page,
			search,
			start_date,
			lang
		}),
		{
			staleTime: 1000 * 60
		}
	);
};

export default useGetConferences;
