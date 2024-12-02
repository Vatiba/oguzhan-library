const baseUrl = import.meta.env.MODE === 'development' ?
	"http://172.16.0.91/api"
	:
	"http://172.16.0.91/api";

export default baseUrl;