import React from "react";
import { Route } from "@tanstack/react-location";
import { useGetBooks } from "@app/hooks/query/Books";
// components
const CommonLayout = React.lazy(() => import("@components/Layouts/Common"));
// pages
const Home = React.lazy(() => import("@app/pages/Home"));
const Search = React.lazy(() => import("@app/pages/Search"));

const routes: Route[] = [
	{
		path: "/",
		pendingMinMs: 500,
		pendingMs: 1000,
		loader: () => {
			const { data } = useGetBooks({
				orderDirection: 'asc',
				ordering: 'id',
				page: 1,
				search: '',
			})
			return {
				...data
			}
		},
		pendingElement: <>Loading...</>,
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