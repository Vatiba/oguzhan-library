import { Publisher } from "../../Common";

type Publication = {
   id: number
   publisher: Publisher
   file: string
   thumbnail: string
   view_count: number
   like_count: number
   download_count: number
   date_created: number
}

export default Publication;