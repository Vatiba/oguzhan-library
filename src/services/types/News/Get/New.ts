import { Image } from "../../Common"

type New = {
   id: number
   name: string
   slug: string
   date_created: string
   thumbnail: string
   content: string
   images: Image[] | null
}

export default New;