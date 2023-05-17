import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// language translations
import translationRU from "@app/locales/ru/translation.json";
import translationTK from "@app/locales/tk/translation.json";
import translationEN from "@app/locales/en/translation.json";
// storage controller
import LocalStorage from "@utils/storage";
// language store key
import { LANGUAGE_KEY } from "@app/constants/storageKeys"
// types
import { Languages } from "@app/types";

const storage = LocalStorage.getInstance();


export const defaultNS = 'translation';
// the translations
export const resources = {
	ru: {
		translation: translationRU,
	},
	en: {
		translation: translationEN,
	},
	tk: {
		translation: translationTK,
	},
}

i18n.use(initReactI18next).init({
	resources,
	lng: storage.getItem(LANGUAGE_KEY) as Languages || 'en',
	fallbackLng: "en",
	defaultNS,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
