import { OrderDirection } from "../../Common"

type ResearchesGetDto = {
   faculty: string
   department: string
   author: string
   category: string
	orderDirection: OrderDirection
	ordering: string
	search: string
	page: number
   lang: string
}

export default ResearchesGetDto;