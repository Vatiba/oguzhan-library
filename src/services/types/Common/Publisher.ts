import publisher from "@app/constants/publisher"

type Publisher = {
   id: number
   thumbnail: string
   name: string
   type: typeof publisher[number]
}

export default Publisher;