import HttpClient from "@services/api/httpClient";
import baseUrl from "@services/api/baseURL";
import { Pagination, Publisher } from "@app/services/types/Common";
import { Publication, PublicationsGetDto, PublishersGetDto } from "@app/services/types/Publications";

class PublicationsApi extends HttpClient {
   private static instance: PublicationsApi;

   private constructor() {
      super(baseUrl);
   }

   public static getInstance(): PublicationsApi {
      if (!PublicationsApi.instance) {
         PublicationsApi.instance = new PublicationsApi();
      }
      return PublicationsApi.instance;
   }

   public async getPuplications({
      lang,
      type,
      ...others
   }: PublicationsGetDto): Promise<Pagination<Publication[]>> {
      const publicationType = type == 'newspaper' ? 0 : 1;
      try {
         return this.instance.get(`/publications/`, {
            params: {
               type: publicationType,
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

   public async getPuplicationsPublishers({
      type,
      lang,
      ...others
   }: PublishersGetDto): Promise<Pagination<Publisher[]>> {
      const publisherType = type == 'newspaper' ? 0 : 1;
      try {
         return this.instance.get(`/publications/publishers/`, {
            params: {
               ...others,
               type: publisherType,
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

   public async getPublication(id: number, lang: string): Promise<Publication> {
      try {
         return this.instance.patch(
            `/publications/${id}/`,
            {
               headers: {
                  'Accept-Language': lang,
                  ...HttpClient.headers,
               },
            }
         );
      } catch (error) {
         throw error;
      }
   }

   public async publicationDownloadCount(id: number): Promise<void> {
      try {
         return this.instance.post(
            `/publications/${id}/download/`,
            {},
            {
               headers: {
                  ...HttpClient.headers,
               },
            }
         );
      } catch (error) {
         throw error;
      }
   }

   public async publicationLikeCount(id: number): Promise<void> {
      try {
         return this.instance.post(
            `/publications/${id}/like/`,
            {},
            {
               headers: {
                  ...HttpClient.headers,
               },
            }
         );
      } catch (error) {
         throw error;
      }
   }

   public async publicationViewCount(id: number): Promise<void> {
      try {
         return this.instance.post(
            `/publications/${id}/view/`,
            {},
            {
               headers: {
                  ...HttpClient.headers,
               },
            }
         );
      } catch (error) {
         throw error;
      }
   }

}

export default PublicationsApi;
