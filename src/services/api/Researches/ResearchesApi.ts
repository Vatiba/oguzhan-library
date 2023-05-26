import HttpClient from "@services/api/httpClient";
import baseUrl from "@services/api/baseURL";
import { Category, Pagination } from "@app/services/types/Common";
import { Research, ResearchesGetDto } from "@app/services/types/Researches";

class ResearchesApi extends HttpClient {
	private static instance: ResearchesApi;

	private constructor() {
		super(baseUrl);
	}

	public static getInstance(): ResearchesApi {
		if (!ResearchesApi.instance) {
			ResearchesApi.instance = new ResearchesApi();
		}
		return ResearchesApi.instance;
	}

	public async getResearches({
		orderDirection,
		ordering,
		...others
	}: ResearchesGetDto): Promise<Pagination<Research[]>> {
		const orderBy = orderDirection === 'asc' ? ordering : `-${ordering}`
		try {
			return this.instance.get(`/researches`, {
				params: {
					...others,
					ordering: orderBy
				},
				headers: {
					...HttpClient.headers,
				},
			});
		} catch (error) {
			throw error;
		}
	}

	public async getResearchesCategories(): Promise<Category[]> {
		try {
			return this.instance.get(`/researches/categories`, {
				headers: {
					...HttpClient.headers,
				},
			});
		} catch (error) {
			throw error;
		}
	}

	public async getResearch(id: number): Promise<Research> {
		try {
			return this.instance.patch(
				`/researches/${id}`,
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

	public async researchDownloadCount(id: number): Promise<void> {
		try {
			return this.instance.post(
				`/researches/${id}/download`,
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

	public async researchLikeCount(id: number): Promise<void> {
		try {
			return this.instance.post(
				`/researches/${id}/like`,
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

export default ResearchesApi;
