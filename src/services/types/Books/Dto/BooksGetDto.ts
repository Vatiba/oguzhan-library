import bookTypes from "@app/constants/bookTypes"
import { OrderDirection } from "../../Common"

type BooksGetDto = {
   faculty: string
   department: string
   author: string
   category: string
   type: typeof bookTypes[number] | string
   orderDirection: OrderDirection
   ordering: string
   search: string
   page: number
   lang: string
}

export default BooksGetDto;