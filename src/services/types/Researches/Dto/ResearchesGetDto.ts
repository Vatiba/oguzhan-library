import { OrderDirection } from "../../Common"

type ResearchesGetDto = {
   faculty: string
   department: string
   author: string
   manager: string
   category: string
	orderDirection: OrderDirection
	ordering: string
	search: string
	page: number
}

export default ResearchesGetDto;