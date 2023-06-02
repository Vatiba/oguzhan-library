import HttpClient from "@services/api/httpClient";
import baseUrl from "@services/api/baseURL";
import { INS, Pagination } from "@app/services/types/Common";
import { BooksGetDto, Book } from "@app/services/types/Books";

class BooksApi extends HttpClient {
	private static instance: BooksApi;

	private constructor() {
		super(baseUrl);
	}

	public static getInstance(): BooksApi {
		if (!BooksApi.instance) {
			BooksApi.instance = new BooksApi();
		}
		return BooksApi.instance;
	}

	public async getBooks({
		orderDirection,
		ordering,
		type,
		lang,
		...others
	}: BooksGetDto): Promise<Pagination<Book[]>> {
		const bookType = type === 'book' ? 0 : type === 'audioBook' ? 1 : 2;
		const orderBy = orderDirection === 'asc' ? ordering : ordering ? `-${ordering}` : '';
		try {
			return this.instance.get(`/books`, {
				params: {
					...others,
					type: bookType,
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

	public async getBooksAuthors(lang: string): Promise<INS[]> {
		try {
			return this.instance.get(`/books/authors`, {
				headers: {
					'Accept-Language': lang,
					...HttpClient.headers,
				},
			});
		} catch (error) {
			throw error;
		}
	}

	public async getBookCategories(lang: string): Promise<INS[]> {
		try {
			return this.instance.get(
				`/books/categories`,
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

	public async getBook(id: number, lang: string): Promise<Book> {
		try {
			return this.instance.get(
				`/books/${id}`,
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

	public async bookDownloadCount(id: number): Promise<void> {
		try {
			return this.instance.post(
				`/books/${id}/download/`,
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

	public async bookLikeCount(id: number): Promise<void> {
		try {
			return this.instance.post(
				`/books/${id}/like/`,
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

export default BooksApi;
