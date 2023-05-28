const baseUrl = import.meta.env.MODE === 'development' ?
	"http://172.16.0.69/api"
	:
	"http://172.16.0.69/api";

export default baseUrl;