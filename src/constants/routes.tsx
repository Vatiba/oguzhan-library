import React from "react";
import { Route } from "@tanstack/react-location";
// api
import { NewsApi } from "@app/services/api/News";
import { MainApi } from "@app/services/api/Main";
import { FacultyApi } from "@app/services/api/Faculty";
import { BooksApi } from "@app/services/api/Books";
// components
import Pending from "@app/components/common/Pending";
import { QueryClient } from "@tanstack/react-query";
import { dehydrate } from "react-query";
import queryClient from "@app/queryClient";
const CommonLayout = React.lazy(() => import("@components/Layouts/Common"));
// pages
const Home = React.lazy(() => import("@app/pages/Home"));
const Search = React.lazy(() => import("@app/pages/Search"));


const newsApi = NewsApi.getInstance();
const mainApi = MainApi.getInstance();
const facultyApi = FacultyApi.getInstance();
const booksApi = BooksApi.getInstance();

const routes: Route[] = [
	{
		path: "/",
		pendingMinMs: 500,
		pendingMs: 0,
		loader: async () => {
			// const news = await newsApi.getNews();
			// const bookCategories = await booksApi.getBookCategories();
			// const externalLinks = await mainApi.getExternalLinks();
			// const mainBanner = await mainApi.getMainBanner();
			// const faculties = await facultyApi.getFaculties();

			Promise.all([
				await queryClient.fetchQuery(
					[
						"books",
						'',
						'',
						'',
						'',
						'asc',
						'',
						1,
						'',
						'book'
					],
					() => booksApi.getBooks({
						author: '',
						category: '',
						department: '',
						faculty: '',
						orderDirection: 'asc',
						ordering: '',
						page: 1,
						search: '',
						type: 'book'
					}),
				)
			]);

			return {
				// news,
				// externalLinks,
				// mainBanner,
				// faculties,
				// bookCategories,
			}
		},
		pendingElement: <Pending />,
		element: (
			<CommonLayout>
				<Home />
			</CommonLayout>
		),
	},
	{
		path: "/search",
		element: (
			<CommonLayout>
				<Search />
			</CommonLayout>
		),
	},
];

export default routes;