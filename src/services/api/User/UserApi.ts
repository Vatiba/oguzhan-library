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

	public async getUsers(page: number, lang: string): Promise<Pagination<Author[]>> {
		try {
			return this.instance.get(`/users/`, {
				params: {
					page
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

export default UserApi;
