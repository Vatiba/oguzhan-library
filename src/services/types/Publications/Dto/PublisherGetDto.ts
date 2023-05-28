import publisher from "@app/constants/publisher";

type PublishersGetDto = {
   type: typeof publisher[number]
   page: number
   lang: string
}
export default PublishersGetDto;