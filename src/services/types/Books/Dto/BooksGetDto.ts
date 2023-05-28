import bookTypes from "@app/constants/bookTypes"
import { OrderDirection } from "../../Common"

type BooksGetDto = {
   faculty: string
   department: string
   author: string
   category: string
   type: typeof bookTypes[number]
   orderDirection: OrderDirection
   ordering: string
   search: string
   page: number
}

export default BooksGetDto;