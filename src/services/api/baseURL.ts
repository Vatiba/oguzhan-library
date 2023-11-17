const baseUrl = import.meta.env.MODE === 'development' ?
	"http://elibrary.oguzhan.edu.tm/api"
	:
	"http://elibrary.oguzhan.edu.tm/api";

export default baseUrl;