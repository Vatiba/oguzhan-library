import React from "react";
import { Route } from "@tanstack/react-location";
// components
const CommonLayout = React.lazy(() => import("@components/Layouts/Common"));
// pages
const Home = React.lazy(() => import("@app/pages/Home"));

const routes: Route[] = [
	{
		path: "/",
		element: (
			<CommonLayout>
				<Home />
			</CommonLayout>
		),
	},
];

export default routes;