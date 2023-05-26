import HttpClient from "@services/api/httpClient";
import baseUrl from "@services/api/baseURL";
import { Author, Pagination } from "@app/services/types/Common";

class UserApi extends HttpClient {
	private static instance: UserApi;

	private constructor() {
		super(baseUrl);
	}

	public static getInstance(): UserApi {
		if (!UserApi.instance) {
			UserApi.instance = new UserApi();
		}
		return UserApi.instance;
	}

	public async getResearches(page: number): Promise<Pagination<Author[]>> {
		try {
			return this.instance.get(`/users`, {
				params: {
					page
				},
				headers: {
					...HttpClient.headers,
				},
			});
		} catch (error) {
			throw error;
		}
	}

}

export default UserApi;
