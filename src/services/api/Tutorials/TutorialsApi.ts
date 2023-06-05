import HttpClient from "@services/api/httpClient";
import baseUrl from "@services/api/baseURL";
import { Tutorial, TutorialGetDto } from "@app/services/types/Tutorial";
import { Pagination } from "@app/services/types/Common";

class TutorialsApi extends HttpClient {
	private static instance: TutorialsApi;

	private constructor() {
		super(baseUrl);
	}

	public static getInstance(): TutorialsApi {
		if (!TutorialsApi.instance) {
			TutorialsApi.instance = new TutorialsApi();
		}
		return TutorialsApi.instance;
	}

	public async getTutorials({
		orderDirection,
		ordering,
		lang,
		...others
	}: TutorialGetDto): Promise<Pagination<Tutorial[]>> {
		const orderBy = orderDirection === 'asc' ? ordering : `-${ordering}`
		try {
			return this.instance.get(`/tutorials/`, {
				params: {
					...others,
					ordering: orderBy
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

	public async getTutorial(id: number, lang: string): Promise<Tutorial> {
		try {
			return this.instance.get(
				`/tutorials/${id}/`,
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

}

export default TutorialsApi;
