import React from "react";
import { Route } from "@tanstack/react-location";
// components
const CommonLayout = React.lazy(() => import("@components/Layouts/Common"));
// pages
const Home = React.lazy(() => import("@app/pages/Home"));
const Search = React.lazy(() => import("@app/pages/Search"));

const routes: Route[] = [
	{
		path: "/",
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