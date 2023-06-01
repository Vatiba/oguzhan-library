import { Author, Category, Department, Image } from "../../Common"

type Project = {
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
   images: Image[]
   date_created: string
   manager: Author
}

export default Project;