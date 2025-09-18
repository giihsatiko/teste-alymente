import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { githubFetcher } from '../../api/github/token';


export const useHomeHook = (search: string) => {

  return useInfiniteQuery<InfiniteData<any>, Error>({
    queryKey: ['repositories', search],
    queryFn: async ({ pageParam = 1 }) => {
      if (!search) return { items: [] };
      return githubFetcher(
        `https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=${pageParam}&per_page=20`
      );
    },
    getNextPageParam: (_, allPages) => allPages.length + 1,
    initialPageParam: 1,
    enabled: !!search,
    placeholderData: (previousData) => previousData,
  });
};

export default useHomeHook;
