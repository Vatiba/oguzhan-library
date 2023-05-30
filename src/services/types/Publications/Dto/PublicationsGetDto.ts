import publisher from "@app/constants/publisher"

type PublicationsGetDto = {
   start_date: string
   end_date: string
   page: number
   lang: string
   publisher: number
   type: typeof publisher[number]
}

export default PublicationsGetDto;