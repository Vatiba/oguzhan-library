import { OrderDirection } from "../../Common"

type BooksGetDto = {
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

export default BooksGetDto;