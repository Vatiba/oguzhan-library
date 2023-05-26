import { Publisher } from "../../Common";

type Publication = {
   id: number
   publisher: Publisher
   file: string
   view_count: number
   like_count: number
   download_count: number
}

export default Publication;