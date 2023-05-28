import { Author, INS } from "../../Common"

type Book = {
   id: number
   name: string
   slug: string
   thumbnail: string
   description: string
   file: string
   year: number
   view_count: number
   download_count: number
   author: INS
   category: INS
   department: INS & {
      image: string
   }
}

export default Book;