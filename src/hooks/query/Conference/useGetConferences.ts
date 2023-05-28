import { ConferenceApi } from "@app/services/api/Conference";
import { ConferenceGetDto } from "@app/services/types/Conference";
import { useQuery } from "@tanstack/react-query";

const conferenceApi = ConferenceApi.getInstance();

const useGetConferences = ({
   end_date,
   page,
   search,
   start_date
}: ConferenceGetDto) => {
   return useQuery(
      [
         "conferences",
         end_date,
         page,
         search,
         start_date
      ],
      () => conferenceApi.getConferences({
         end_date,
         page,
         search,
         start_date
      }),
      {
         staleTime: 1000 * 60
      }
   );
};

export default useGetConferences;
