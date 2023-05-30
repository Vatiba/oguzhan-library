import { Author, Category, Department } from "../../Common"

type Research = {
   id: number
   name: string
   slug: string
   content: string
   department: Department
   file: string
   view_count: number
   download_count: number
   liked_count: number
   author: Author
   category: Category
   date_created: string
}

export default Research;