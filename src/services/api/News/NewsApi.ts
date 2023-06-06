import HttpClient from "@services/api/httpClient";
import baseUrl from "@services/api/baseURL";
import { Pagination } from "@app/services/types/Common";
import { New, NewsGetDto } from "@app/services/types/News";

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

	public async getNews({
		start_date,
		end_date,
		search,
		page,
		lang
	}: NewsGetDto): Promise<Pagination<New[]>> {
		try {
			return this.instance.get(`/news/`, {
				params: {
					start_date,
					end_date,
					search,
					page,
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

	public async getNew(id: number, lang: string): Promise<New> {
		try {
			return this.instance.get(`/news/${id}/`, {
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

export default NewsApi;
