import { Author, Category, Department, INS, Image } from "../../Common"

type Project = {
   id: number
   name: string
   slug: string
   content: string
   department: Department
   file: string
   view_count: number
   download_count: number
   like_count: number
   authors: string
   category: Category
   images: Image[]
   date_created: string
   manager: Author
   thumbnail: string
   research_and_production_center: INS | null
}

export default Project;