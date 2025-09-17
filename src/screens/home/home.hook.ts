import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useHomeHook = (search: string) => {
  return useInfiniteQuery<InfiniteData<any>, Error>({
    queryKey: ['repositories', search],
    queryFn: async ({ pageParam = 1 }) => {
      if (!search) return { items: [] }
      const response = await axios.get('https://api.github.com/search/repositories', {
        params: {
          q: search,
          sort: 'stars',
          order: 'desc',
          page: pageParam,
          per_page: 20,
        },
      })
      return response.data
    },
    getNextPageParam: (_, allPages) => allPages.length + 1,
    initialPageParam: 1,
    enabled: !!search,
    placeholderData: previousData => previousData
  })
}

export default useHomeHook
