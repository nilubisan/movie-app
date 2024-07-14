import { useQuery } from "@tanstack/vue-query"

const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTU0YjY5NDhiMGExMTRiM2VkZDI3MTQ4NWY3OTNjNiIsIm5iZiI6MTcyMDM0NzM1NS4yOTQ2MzUsInN1YiI6IjVlZDNiYWNkNWMwNzFiMDAxZDJiODBhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TMWM0t1P1bFKKH4_b1KfcLNWmHkcnYrkx657Cg9HDKA'

type TUseFetch = {
  method? : string
  url: string
}

export const useFetch = ({ method = 'GET', url }: TUseFetch) => {
    const getItems = (async() => {
        const options = { method, headers: { accept: 'application/json', Authorization: API_KEY }}
        return await fetch(url, options).then((response) => response.json())
      })

      const {isLoading, isError, data, error} = useQuery({ queryKey: ['items'], queryFn: getItems })

      return { isLoading, isError, data, error }

}