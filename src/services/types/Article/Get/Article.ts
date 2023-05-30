import { Author, Category, Department } from "../../Common"

type Article = {
   id: number
   name: string
   slug: string
   content: string
   department: Department
   file: string
   view_count: number
   download_count: number
   author: Author
   category: Category
   date_created: string
   liked_count: number
}

export default Article;