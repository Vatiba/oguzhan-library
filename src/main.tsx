import React from 'react'
import ReactDOM from 'react-dom/client'
// for translation
import i18n from "./libs/i18";
import { I18nextProvider } from "react-i18next";
// components
import App from './App'
// styles
import './index.css'

// react-query
import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import queryClient from './queryClient';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<I18nextProvider i18n={i18n}>
			<QueryClientProvider client={queryClient}>
				<App />
				<ReactQueryDevtools />
			</QueryClientProvider>
		</I18nextProvider>
	</React.StrictMode>,
)
