import React from "react";
import { Route } from "@tanstack/react-location";
// api
import { NewsApi } from "@app/services/api/News";
import { MainApi } from "@app/services/api/Main";
import { FacultyApi } from "@app/services/api/Faculty";
import { BooksApi } from "@app/services/api/Books";
// components
const Pending = React.lazy(() => import("@app/components/common/Pending"));
const CommonLayout = React.lazy(() => import("@components/Layouts/Common"));
// query client
import queryClient from "@app/queryClient";
// pages
const Home = React.lazy(() => import("@app/pages/Home"));
const Search = React.lazy(() => import("@app/pages/Search"));

// api instances
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

			Promise.all([
				// await queryClient.fetchQuery(
				// 	["bookCategories"],
				// 	() => booksApi.getBookCategories(),
				// ),
				// await queryClient.fetchQuery(
				// 	["externalLinks"],
				// 	() => mainApi.getExternalLinks(),
				// ),
				// await queryClient.fetchQuery(
				// 	["mainBanners"],
				// 	() => mainApi.getMainBanner(),
				// ),
				// await queryClient.fetchQuery(
				// 	["news"],
				// 	() => newsApi.getNews(),
				// ),
				// await queryClient.fetchQuery(
				// 	["faculties"],
				// 	() => facultyApi.getFaculties(),
				// ),
			]);

			return {};
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
		pendingMinMs: 500,
		pendingMs: 0,
		pendingElement: <Pending />,
		loader: async ({ search }) => {
			Promise.all([
				// await queryClient.fetchQuery(
				// 	[
				// 		"books",
				// 		search['author'] as string || '',
				// 		search['category'] as string || '',
				// 		search['department'] as string || '',
				// 		search['faculty'] as string || '',
				// 		'desc',
				// 		'id',
				// 		search['page'] as number || 1,
				// 		search['search'] as string || '',
				// 		search['type'] as string || ''
				// 	],
				// 	() => booksApi.getBooks({
				// 		author: search['author'] as string || '',
				// 		category: search['category'] as string || '',
				// 		department: search['department'] as string || '',
				// 		faculty: search['faculty'] as string || '',
				// 		orderDirection: 'desc',
				// 		ordering: 'id',
				// 		page: search['page'] as number || 1,
				// 		search: search['search'] as string || '',
				// 		type: search['type'] as string || '',
				// 	}),
				// ),
			]);

			return {}
		},
		element: (
			<CommonLayout>
				<Search />
			</CommonLayout>
		),
	},
];

export default routes;