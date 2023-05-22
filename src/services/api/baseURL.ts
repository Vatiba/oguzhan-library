const baseUrl = import.meta.env.MODE === 'development' ?
	"https://v2-api.yuzharyt.com/api"
	:
	"https://v2-api.yuzharyt.com/api";

export default baseUrl;