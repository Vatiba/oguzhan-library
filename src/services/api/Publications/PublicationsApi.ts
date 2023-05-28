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

   public async getPuplications(publicationGetDto: PublicationsGetDto): Promise<Pagination<Publication[]>> {
      try {
         return this.instance.get(`/publications`, {
            params: {
               ...publicationGetDto
            },
            headers: {
               ...HttpClient.headers,
            },
         });
      } catch (error) {
         throw error;
      }
   }

   public async getPuplicationsPublishers({
      type,
      ...others
   }: PublishersGetDto): Promise<Pagination<Publisher[]>> {
      const publisherType = type == 'newspaper' ? 0 : 1;
      try {
         return this.instance.get(`/publications/publishers`, {
            params: {
               ...others,
               type: publisherType,
            },
            headers: {
               ...HttpClient.headers,
            },
         });
      } catch (error) {
         throw error;
      }
   }

   public async getPublication(id: number): Promise<Publication> {
      try {
         return this.instance.patch(
            `/publications/${id}`,
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

   public async publicationDownloadCount(id: number): Promise<void> {
      try {
         return this.instance.post(
            `/publications/${id}/download`,
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
            `/publications/${id}/like`,
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