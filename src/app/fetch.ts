import { useQuery, useQueryClient } from "@tanstack/vue-query"
import { ref } from "vue"

const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTU0YjY5NDhiMGExMTRiM2VkZDI3MTQ4NWY3OTNjNiIsIm5iZiI6MTcyMDM0NzM1NS4yOTQ2MzUsInN1YiI6IjVlZDNiYWNkNWMwNzFiMDAxZDJiODBhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TMWM0t1P1bFKKH4_b1KfcLNWmHkcnYrkx657Cg9HDKA'

export const useFetch = () => {
    const fetchData = ref(null)

    const getItems = (async() => {
        const options = { method: 'GET', headers: {accept: 'application/json', Authorization: API_KEY }};
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        fetchData.value = await response.json()

        return fetchData
      })

      const {isLoading, isError, data, error} = useQuery({queryKey: ['items'], queryFn: getItems})
      
      console.log(data);

      return { isLoading, isError, data, error }

}