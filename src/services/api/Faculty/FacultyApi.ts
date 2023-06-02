import HttpClient from "@services/api/httpClient";
import baseUrl from "@services/api/baseURL";
import { Faculty } from "@app/services/types/Faculty";
import { Department } from "@app/services/types/Common";


class FacultyApi extends HttpClient {
	private static instance: FacultyApi;

	private constructor() {
		super(baseUrl);
	}

	public static getInstance(): FacultyApi {
		if (!FacultyApi.instance) {
			FacultyApi.instance = new FacultyApi();
		}
		return FacultyApi.instance;
	}

	public async getFaculties(lang: string): Promise<Faculty[]> {
		try {
			return this.instance.get(`/faculties/`, {
				headers: {
					'Accept-Language': lang,
					...HttpClient.headers,
				},
			});
		} catch (error) {
			throw error;
		}
	}

	public async getFacultyDepartment(faculty: string, lang: string): Promise<Department[]> {
		try {
			return this.instance.get(`/faculties/departments/`, {
				params: {
					faculty
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

	public async getResearchCenters(lang: string): Promise<Department[]> {
		try {
			return this.instance.get(`/faculties/research_and_production_center/`, {
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

export default FacultyApi;
