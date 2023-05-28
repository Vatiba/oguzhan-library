import { OrderDirection } from "../../Common";

type ArticleGetDto = {
	faculty: string
	department: string
	author: string
	category: string
   orderDirection: OrderDirection
   ordering: string
   search: string
   page: number
}

export default ArticleGetDto;