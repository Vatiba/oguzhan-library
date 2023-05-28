import HttpClient from "@services/api/httpClient";
import baseUrl from "@services/api/baseURL";
import { Pagination } from "@app/services/types/Common";
import { New } from "@app/services/types/News";

class NewsApi extends HttpClient {
	private static instance: NewsApi;

	private constructor() {
		super(baseUrl);
	}

	public static getInstance(): NewsApi {
		if (!NewsApi.instance) {
			NewsApi.instance = new NewsApi();
		}
		return NewsApi.instance;
	}

	public async getNews(): Promise<Pagination<New[]>> {
		try {
			return this.instance.get(`/news`, {
				headers: {
					...HttpClient.headers,
				},
			});
		} catch (error) {
			throw error;
		}
	}

	public async getNew(id: number): Promise<New> {
		try {
			return this.instance.get(`/news/${id}`, {
				headers: {
					...HttpClient.headers,
				},
			});
		} catch (error) {
			throw error;
		}
	}

}

export default NewsApi;