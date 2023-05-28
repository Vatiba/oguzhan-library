import { OrderDirection } from "../../Common";

type ProjectsGetDto = {
	faculty: string
	department: string
	author: string
	manager: string
	category: string
	orderDirection: OrderDirection
	ordering: string
	search: string
	page: number
   lang: string
}

export default ProjectsGetDto;