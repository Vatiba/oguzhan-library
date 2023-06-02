import { INS } from "../../Common"

type Book = {
   id: number
   name: string
   slug: string
   thumbnail: string | null
   description: string | null
   file: string
   year: number | null
   view_count: number
   download_count: number
   like_count: number
   author: INS | null
   category: INS
   department: INS & {
      image: string
   }
   interactive_file: string | null
}

export default Book;