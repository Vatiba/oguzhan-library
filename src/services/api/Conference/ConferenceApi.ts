import HttpClient from "@services/api/httpClient";
import baseUrl from "@services/api/baseURL";
import { Pagination } from "@app/services/types/Common";
import { Conference, ConferenceGetDto } from "@app/services/types/Conference";

class ConferenceApi extends HttpClient {
   private static instance: ConferenceApi;

   private constructor() {
      super(baseUrl);
   }

   public static getInstance(): ConferenceApi {
      if (!ConferenceApi.instance) {
         ConferenceApi.instance = new ConferenceApi();
      }
      return ConferenceApi.instance;
   }

   public async getConferences({
      lang,
      ...others
   }: ConferenceGetDto): Promise<Pagination<Conference[]>> {
      try {
         return this.instance.get(`/conferences`, {
            params: {
               ...others
            },
            headers: {
					'Accept-Language': lang,
               ...HttpClient.headers,
            },
         });
      } catch (error) {
         throw error;
      }
   }
}

export default ConferenceApi;
