import React, { Suspense } from "react";
import { Route } from "@tanstack/react-location";
import CommonLayout from '@components/Layouts/Common';
// components
const Pending = React.lazy(() => import("@app/components/common/Pending"));
// query client
import queryClient from "@app/queryClient";
import i18n from "@app/libs/i18";
// api
import { NewsApi } from "@app/services/api/News";
import { MainApi } from "@app/services/api/Main";
import { FacultyApi } from "@app/services/api/Faculty";
import { BooksApi } from "@app/services/api/Books";
import { ConferenceApi } from "@app/services/api/Conference";
import { PublicationsApi } from "@app/services/api/Publications";
import { ArticleApi } from "@app/services/api/Article";
import { ResearchesApi } from "@app/services/api/Researches";
import { ProjectsApi } from "@app/services/api/Projects";
import { TutorialsApi } from "@app/services/api/Tutorials";

// pages
const Home = React.lazy(() => import("@app/pages/Home"));
const Search = React.lazy(() => import("@app/pages/Search"));
const Conferences = React.lazy(() => import("@app/pages/Conferences"));
const NewsPapersPublishers = React.lazy(() => import("@app/pages/NewsPapersPublishers"));
const NewsPapers = React.lazy(() => import("@app/pages/NewsPaper"));
const MagazinesPublishers = React.lazy(() => import("@app/pages/MagazinesPublishers"));
const Magazines = React.lazy(() => import("@app/pages/Magazines"));
const NewsPage = React.lazy(() => import("@app/pages/NewsPage"));
const NewsDetailsPage = React.lazy(() => import("@app/pages/NewsDetailsPage"));
const Articles = React.lazy(() => import("@app/pages/Articles"));
const ArticleDetails = React.lazy(() => import("@app/pages/ArticleDetails"));
const Researches = React.lazy(() => import("@app/pages/Researches"));
const ResearchDetails = React.lazy(() => import("@app/pages/ResearchDetails"));
const Projects = React.lazy(() => import("@app/pages/Projects"));
const ProjectDetails = React.lazy(() => import("@app/pages/ProjectDetails"));
const Tutorials = React.lazy(() => import("@app/pages/Tutorials"));

// api instances
const newsApi = NewsApi.getInstance();
const mainApi = MainApi.getInstance();
const facultyApi = FacultyApi.getInstance();
const booksApi = BooksApi.getInstance();
const conferencesApi = ConferenceApi.getInstance();
const publicationsApi = PublicationsApi.getInstance();
const articlesApi = ArticleApi.getInstance();
const researchApi = ResearchesApi.getInstance();
const projectsApi = ProjectsApi.getInstance();
const tutorialsApi = TutorialsApi.getInstance();

const routes: Route[] = [
	{
		path: "/",
		pendingMinMs: 2000,
		pendingMs: 0,
		loader: async () => {
			Promise.all([
				await queryClient.ensureQueryData(
					["bookCategories", i18n.language],
					() => booksApi.getBookCategories(i18n.language),
				),
				await queryClient.ensureQueryData(
					["externalLinks"],
					() => mainApi.getExternalLinks(),
				),
				await queryClient.ensureQueryData(
					["mainBanners"],
					() => mainApi.getMainBanner(),
				),
				await queryClient.ensureQueryData(
					[
						"news",
						1,
						i18n.language
					],
					() => newsApi.getNews({
						start_date: '',
						end_date: '',
						lang: i18n.language,
						page: 1,
						search: ''
					}),
				),
				await queryClient.ensureQueryData(
					["faculties", i18n.language],
					() => facultyApi.getFaculties(i18n.language),
				),
			]);

			return {};
		},
		pendingElement: <Pending />,
		element: (
			<Suspense fallback={<Pending />}>
				<CommonLayout>
					<Home />
				</CommonLayout>
			</Suspense>
		),
	},
	{
		path: "/search",
		pendingMinMs: 500,
		pendingMs: 0,
		pendingElement: <Pending />,
		loader: async ({ search }) => {
			Promise.all([
				await queryClient.ensureQueryData(
					[
						"books",
						search['author'] as string || '',
						search['category'] as string || '',
						search['department'] as string || '',
						search['faculty'] as string || '',
						'desc',
						'id',
						search['page'] as number || 1,
						search['search'] as string || '',
						search['type'] as string || '',
						i18n.language,
						search['genre'] as string || '',
						search['subject'] as string || '',
						search['year'] as string || '',
						search['language'] as string || ''
					],
					() => booksApi.getBooks({
						author: search['author'] as string || '',
						category: search['category'] as string || '',
						department: search['department'] as string || '',
						faculty: search['faculty'] as string || '',
						orderDirection: 'desc',
						ordering: 'id',
						page: search['page'] as number || 1,
						search: search['search'] as string || '',
						type: search['type'] as string || '',
						lang: i18n.language,
						genre: '',
						subject: '',
						language: '',
						year: ''
					}),
				),
				await queryClient.ensureQueryData(
					[
						"booksAuthors",
						i18n.language
					],
					() => booksApi.getBooksAuthors(i18n.language),
				),
				await queryClient.ensureQueryData(
					[
						"bookCategories",
						i18n.language
					],
					() => booksApi.getBookCategories(i18n.language),
				),
				await queryClient.ensureQueryData(
					[
						"bookGenres",
						i18n.language
					],
					() => booksApi.getBookGenres(i18n.language),
				),
				await queryClient.ensureQueryData(
					[
						"bookSubjects",
						i18n.language
					],
					() => booksApi.getBookSubjects(i18n.language),
				),
			]);

			return {}
		},
		element: (
			<Suspense fallback={<Pending />}>
				<CommonLayout>
					<Search />
				</CommonLayout>
			</Suspense>
		),
	},
	{
		path: "/conferences",
		pendingMinMs: 500,
		pendingMs: 0,
		pendingElement: <Pending />,
		loader: async () => {
			Promise.all([
				await queryClient.ensureQueryData(
					[
						"conferences",
						1,
						i18n.language
					],
					() => conferencesApi.getConferences({
						end_date: '',
						start_date: '',
						lang: i18n.language,
						page: 1,
						search: ''
					}),
				),
			]);

			return {}
		},
		element: (
			<Suspense fallback={<Pending />}>
				<CommonLayout>
					<Conferences />
				</CommonLayout>
			</Suspense>
		),
	},
	{
		path: "/newsPapers",
		children: [
			{
				path: '/',
				pendingMinMs: 500,
				pendingMs: 0,
				pendingElement: <Pending />,
				loader: async () => {
					Promise.all([
						await queryClient.ensureQueryData(
							[
								"publicationsPublishers",
								1,
								'newspaper',
								i18n.language
							],
							() => publicationsApi.getPuplicationsPublishers({
								lang: i18n.language,
								page: 1,
								type: 'newspaper'
							}),
						),
					]);
					return {}
				},
				element: (
					<Suspense fallback={<Pending />}>
						<CommonLayout>
							<NewsPapersPublishers />
						</CommonLayout>
					</Suspense>
				),
			},
			{
				path: ':id',
				pendingMinMs: 500,
				pendingMs: 0,
				pendingElement: <Pending />,
				loader: async ({ params }) => {
					const id = parseInt(params['id']);
					Promise.all([
						await queryClient.ensureQueryData(
							[
								"publications",
								1,
								i18n.language,
								'newspaper',
								id
							],
							() => publicationsApi.getPuplications({
								start_date: '',
								end_date: '',
								page: 1,
								type: 'newspaper',
								publisher: id,
								lang: i18n.language,
							}),
						),
					]);
					return {}
				},
				element: (
					<Suspense fallback={<Pending />}>
						<CommonLayout>
							<NewsPapers />
						</CommonLayout>
					</Suspense>
				),
			}
		]
	},
	{
		path: "/magazines",
		children: [
			{
				path: '/',
				pendingMinMs: 500,
				pendingMs: 0,
				pendingElement: <Pending />,
				loader: async () => {
					Promise.all([
						await queryClient.ensureQueryData(
							[
								"publicationsPublishers",
								1,
								'magazine',
								i18n.language
							],
							() => publicationsApi.getPuplicationsPublishers({
								lang: i18n.language,
								page: 1,
								type: 'magazine'
							}),
						),
					]);
					return {}
				},
				element: (
					<Suspense fallback={<Pending />}>
						<CommonLayout>
							<MagazinesPublishers />
						</CommonLayout>
					</Suspense>
				),
			},
			{
				path: ':id',
				pendingMinMs: 500,
				pendingMs: 0,
				pendingElement: <Pending />,
				loader: async ({ params }) => {
					const id = parseInt(params['id']);
					Promise.all([
						await queryClient.ensureQueryData(
							[
								"publications",
								1,
								i18n.language,
								'magazine',
								id
							],
							() => publicationsApi.getPuplications({
								start_date: '',
								end_date: '',
								page: 1,
								type: 'magazine',
								publisher: id,
								lang: i18n.language,
							}),
						),
					]);
					return {}
				},
				element: (
					<Suspense fallback={<Pending />}>
						<CommonLayout>
							<Magazines />
						</CommonLayout>
					</Suspense>
				),
			},
		]
	},
	{
		path: "/news",
		children: [
			{
				path: '/',
				pendingMinMs: 500,
				pendingMs: 0,
				pendingElement: <Pending />,
				loader: async () => {
					Promise.all([
						await queryClient.ensureQueryData(
							[
								"news",
								1,
								i18n.language
							],
							() => newsApi.getNews({
								start_date: '',
								end_date: '',
								lang: i18n.language,
								page: 1,
								search: ''
							}),
						),
					]);

					return {};
				},
				element: (
					<Suspense fallback={<Pending />}>
						<CommonLayout>
							<NewsPage />
						</CommonLayout>
					</Suspense>
				),
			},
			{
				path: ':id',
				pendingMinMs: 500,
				pendingMs: 0,
				pendingElement: <Pending />,
				loader: async ({ params }) => {
					const id = parseInt(params['id']);
					Promise.all([
						await queryClient.ensureQueryData(
							[
								"news",
								1,
								i18n.language
							],
							() => newsApi.getNews({
								start_date: '',
								end_date: '',
								lang: i18n.language,
								page: 1,
								search: ''
							}),
						),
						await queryClient.ensureQueryData(
							[
								"news",
								id,
								i18n.language
							],
							() => newsApi.getNew(id, i18n.language),
						),
					]);

					return {};
				},
				element: (
					<Suspense fallback={<Pending />}>
						<CommonLayout>
							<NewsDetailsPage />
						</CommonLayout>
					</Suspense>
				),
			},
		]
	},
	{
		path: "/articles",
		children: [
			{
				path: "/",
				pendingMinMs: 500,
				pendingMs: 0,
				pendingElement: <Pending />,
				loader: async () => {
					Promise.all([
						await queryClient.ensureQueryData(
							[
								"articles",
								'',
								'',
								'',
								'',
								'desc',
								'id',
								1,
								'',
								i18n.language
							],
							() => articlesApi.getArticles({
								author: '',
								category: '',
								department: '',
								faculty: '',
								orderDirection: 'desc',
								ordering: 'id',
								page: 1,
								search: '',
								lang: i18n.language
							}),
						),
					]);

					return {}
				},
				element: (
					<Suspense fallback={<Pending />}>
						<CommonLayout>
							<Articles />
						</CommonLayout>
					</Suspense>
				),
			},
			{
				path: "/:id",
				pendingMinMs: 500,
				pendingMs: 0,
				pendingElement: <Pending />,
				loader: async ({ params }) => {
					const id = parseInt(params['id']);
					Promise.all([
						await queryClient.ensureQueryData(
							[
								"article",
								id,
								i18n.language
							],
							() => articlesApi.getArticle(id, i18n.language),
						),
					]);

					return {}
				},
				element: (
					<Suspense fallback={<Pending />}>
						<CommonLayout>
							<ArticleDetails />
						</CommonLayout>
					</Suspense>
				),
			}
		]
	},
	{
		path: "/researches",
		children: [
			{
				path: "/",
				pendingMinMs: 500,
				pendingMs: 0,
				pendingElement: <Pending />,
				loader: async () => {
					Promise.all([
						await queryClient.ensureQueryData(
							[
								"researches",
								'',
								'',
								'',
								'',
								'desc',
								'id',
								1,
								'',
								i18n.language
							],
							() => researchApi.getResearches({
								author: '',
								category: '',
								department: '',
								faculty: '',
								orderDirection: 'desc',
								ordering: 'id',
								page: 1,
								search: '',
								lang: i18n.language
							}),
						),
					]);

					return {}
				},
				element: (
					<Suspense fallback={<Pending />}>
						<CommonLayout>
							<Researches />
						</CommonLayout>
					</Suspense>
				),
			},
			{
				path: "/:id",
				pendingMinMs: 500,
				pendingMs: 0,
				pendingElement: <Pending />,
				loader: async ({ params }) => {
					const id = parseInt(params['id']);
					Promise.all([
						await queryClient.ensureQueryData(
							[
								"research",
								id,
								i18n.language
							],
							() => researchApi.getResearch(id, i18n.language),
						),
					]);

					return {}
				},
				element: (
					<Suspense fallback={<Pending />}>
						<CommonLayout>
							<ResearchDetails />
						</CommonLayout>
					</Suspense>
				),
			}
		]
	},
	{
		path: "/projects",
		children: [
			{
				path: "/",
				pendingMinMs: 500,
				pendingMs: 0,
				pendingElement: <Pending />,
				loader: async () => {
					Promise.all([
						await queryClient.ensureQueryData(
							[
								"projects",
								'',
								'',
								'',
								'',
								'',
								'desc',
								'id',
								1,
								'',
								i18n.language,
								''
							],
							() => projectsApi.getProjects({
								author: '',
								category: '',
								department: '',
								faculty: '',
								orderDirection: 'desc',
								ordering: 'id',
								page: 1,
								search: '',
								lang: i18n.language,
								manager: '',
								research_and_production_center: ''
							}),
						),
					]);

					return {}
				},
				element: (
					<Suspense fallback={<Pending />}>
						<CommonLayout>
							<Projects />
						</CommonLayout>
					</Suspense>
				),
			},
			{
				path: "/:id",
				pendingMinMs: 500,
				pendingMs: 0,
				pendingElement: <Pending />,
				loader: async ({ params }) => {
					const id = parseInt(params['id']);
					Promise.all([
						await queryClient.ensureQueryData(
							[
								"projects",
								'',
								'',
								'',
								'',
								'',
								'desc',
								'id',
								1,
								'',
								i18n.language,
								''
							],
							() => projectsApi.getProjects({
								author: '',
								category: '',
								department: '',
								faculty: '',
								orderDirection: 'desc',
								ordering: 'id',
								page: 1,
								search: '',
								lang: i18n.language,
								manager: '',
								research_and_production_center: ''
							}),
						),
						await queryClient.ensureQueryData(
							["project", id, i18n.language],
							() => projectsApi.getProject(id, i18n.language),
						),
					]);

					return {}
				},
				element: (
					<Suspense fallback={<Pending />}>
						<CommonLayout>
							<ProjectDetails />
						</CommonLayout>
					</Suspense>
				),
			}
		]
	},
	{
		path: "/tutorials",
		pendingMinMs: 500,
		pendingMs: 0,
		pendingElement: <Pending />,
		loader: async () => {
			Promise.all([
				await queryClient.ensureQueryData(
					[
						"tutorials",
						'',
						'',
						i18n.language,
						'',
						'',
						'desc',
						'id',
						1,
						'',
						''
					],
					() => tutorialsApi.getTutorials({
						department: '',
						faculty: '',
						lang: i18n.language,
						major_years__major: '',
						major_years__year: '',
						orderDirection: 'desc',
						ordering: '',
						page: 1,
						search: '',
						year: ''
					}),
				),
			]);

			return {}
		},
		element: (
			<CommonLayout>
				<Tutorials />
			</CommonLayout>
		),
	},
];

export default routes;