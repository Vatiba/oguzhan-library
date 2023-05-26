import HttpClient from "@services/api/httpClient";
import baseUrl from "@services/api/baseURL";
import { Category, Pagination } from "@app/services/types/Common";
import { Project, ProjectsGetDto } from "@app/services/types/Projects";

class ProjectsApi extends HttpClient {
	private static instance: ProjectsApi;

	private constructor() {
		super(baseUrl);
	}

	public static getInstance(): ProjectsApi {
		if (!ProjectsApi.instance) {
			ProjectsApi.instance = new ProjectsApi();
		}
		return ProjectsApi.instance;
	}

	public async getProjects({
		orderDirection,
		ordering,
		...others
	}: ProjectsGetDto): Promise<Pagination<Project[]>> {
		const orderBy = orderDirection === 'asc' ? ordering : `-${ordering}`
		try {
			return this.instance.get(`/projects`, {
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

	public async getProjectCategories(): Promise<Category[]> {
		try {
			return this.instance.get(`/projects/categories`, {
				headers: {
					...HttpClient.headers,
				},
			});
		} catch (error) {
			throw error;
		}
	}

	public async getProject(id: number): Promise<Project> {
		try {
			return this.instance.patch(
				`/projects/${id}`,
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

	public async projectDownloadCount(id: number): Promise<void> {
		try {
			return this.instance.post(
				`/projects/${id}/download`,
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

	public async projectsLikeCount(id: number): Promise<void> {
		try {
			return this.instance.post(
				`/projects/${id}/like`,
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

export default ProjectsApi;
