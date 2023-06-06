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
		lang,
		...others
	}: ArticleGetDto): Promise<Pagination<Article[]>> {
		const orderBy = orderDirection === 'asc' ? ordering : `-${ordering}`
		try {
			return this.instance.get(`/articles/`, {
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

	public async getArticleCategories(lang: string): Promise<Category[]> {
		try {
			return this.instance.get(`/articles/categories/`, {
				headers: {
					'Accept-Language': lang,
					...HttpClient.headers,
				},
			});
		} catch (error) {
			throw error;
		}
	}

	public async getArticle(id: number, lang: string): Promise<Article> {
		try {
			return this.instance.get(
				`/articles/${id}/`,
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

	public async articleDownloadCount(id: number): Promise<void> {
		try {
			return this.instance.post(
				`/articles/${id}/download/`,
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
				`/articles/${id}/like/`,
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

	public async articleViewCount(id: number): Promise<void> {
		try {
			return this.instance.post(
				`/articles/${id}/view/`,
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
