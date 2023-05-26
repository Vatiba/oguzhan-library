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

	public async getFaculties(): Promise<Faculty[]> {
		try {
			return this.instance.get(`/faculties`, {
				headers: {
					...HttpClient.headers,
				},
			});
		} catch (error) {
			throw error;
		}
	}

	public async getFacultyDepartment(faculty: string): Promise<Department[]> {
		try {
			return this.instance.get(`/faculties/departments`, {
				params: {
					faculty
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

export default FacultyApi;
