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
		element: (
			<CommonLayout>
				<Search />
			</CommonLayout>
		),
	},
];

export default routes;