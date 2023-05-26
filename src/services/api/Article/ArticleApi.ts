import HttpClient from "@services/api/httpClient";
import baseUrl from "@services/api/baseURL";
import { Article, ArticleGetDto } from "@app/services/types/Article";
import { Category, Pagination } from "@app/services/types/Common";

class ArticleApi extends HttpClient {
	private static instance: ArticleApi;

	private constructor() {
		super(baseUrl);
	}

	public static getInstance(): ArticleApi {
		if (!ArticleApi.instance) {
			ArticleApi.instance = new ArticleApi();
		}
		return ArticleApi.instance;
	}

	public async getArticles({
		orderDirection,
		ordering,
		...others
	}: ArticleGetDto): Promise<Pagination<Article[]>> {
		const orderBy = orderDirection === 'asc' ? ordering : `-${ordering}`
		try {
			return this.instance.get(`/articles`, {
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

	public async getArticleCategories(): Promise<Category[]> {
		try {
			return this.instance.get(`/article/categories`, {
				headers: {
					...HttpClient.headers,
				},
			});
		} catch (error) {
			throw error;
		}
	}

	public async getArticle(id: number): Promise<Article> {
		try {
			return this.instance.patch(
				`/article/${id}`,
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

	public async articleDownloadCount(id: number): Promise<void> {
		try {
			return this.instance.post(
				`/article/${id}/download`,
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

	public async articleLikeCount(id: number): Promise<void> {
		try {
			return this.instance.post(
				`/article/${id}/like`,
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

export default ArticleApi;
