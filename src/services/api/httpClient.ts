import axios, { AxiosError, AxiosInstance, AxiosResponse, AxiosRequestHeaders } from 'axios';

declare module 'axios' {
	interface AxiosResponse<T = any> extends Promise<T> { }
}

abstract class HttpClient {
	protected readonly instance: AxiosInstance;
	protected static headers: AxiosRequestHeaders;
	protected static authToken: string;
	protected static authTokenType: string;

	public constructor(baseURL: string) {
		this.instance = axios.create({
			baseURL,
		});

		this._initializeResponseInterceptor();
	}

	static get token(): string {
		return HttpClient.authToken;
	}

	static set token(newAuthToken: string) {
		HttpClient.authToken = newAuthToken;
	}

	static get tokenType(): string {
		return HttpClient.authTokenType
	}
	static set tokenType(token: string) {
		HttpClient.authTokenType = token;
	}

	static get getheaders(): AxiosRequestHeaders {
		return HttpClient.headers;
	}


	static set setHeaders(headers: AxiosRequestHeaders) {
		HttpClient.headers = headers;
	}


	private _initializeResponseInterceptor = () => {
		this.instance.interceptors.response.use(
			this._handleResponse,
			this._handleError,
		);
	};

	private _handleResponse = (response: AxiosResponse) => response.data;

	protected _handleError = (error: AxiosError) => {
		return Promise.reject(error.response)
	};
}

export default HttpClient;