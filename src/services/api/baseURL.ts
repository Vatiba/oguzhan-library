const baseUrl = import.meta.env.MODE === 'development' ?
	"http://172.16.0.91/api"
	:
	"http://elibrary.oguzhan.edu.tm/api";

export default baseUrl;