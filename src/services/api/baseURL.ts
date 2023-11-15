const baseUrl = import.meta.env.MODE === 'development' ?
	"http://10.1.5.69/api"
	:
	"http://10.1.5.69/api";

export default baseUrl;