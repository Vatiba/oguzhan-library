import HttpClient from "@services/api/httpClient";
import baseUrl from "@services/api/baseURL";
import { Pagination } from "@app/services/types/Common";
import { ExternalLink, MainBanner } from "@app/services/types/Main";

class MainApi extends HttpClient {
	private static instance: MainApi;

	private constructor() {
		super(baseUrl);
	}

	public static getInstance(): MainApi {
		if (!MainApi.instance) {
			MainApi.instance = new MainApi();
		}
		return MainApi.instance;
	}

	public async getMainBanner(): Promise<MainBanner[]> {
		try {
			return this.instance.get(`/main/banner_images`, {
				headers: {
					...HttpClient.headers,
				},
			});
		} catch (error) {
			throw error;
		}
	}

	public async getExternalLinks(): Promise<ExternalLink[]> {
		try {
			return this.instance.get(`/main/external_links`, {
				headers: {
					...HttpClient.headers,
				},
			});
		} catch (error) {
			throw error;
		}
	}
}

export default MainApi;
