import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';
import { IssuesLayoutProps } from './types';

export const useIssuesHook = ():IssuesLayoutProps => {
   const params = useLocalSearchParams<{ owner: string; repo: string }>();
  const { owner, repo } = params;

  const fetchIssues = async (
    context: QueryFunctionContext<['repoIssues', string, string], unknown>
  ): Promise<any[]> => {
    const page = (context.pageParam as number | undefined) ?? 1;

    const { data } = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/issues`,
      {
        params: { state: 'open', page, per_page: 20 },
      }
    );

    return data;
  };

  const query = useInfiniteQuery<any[], Error, any[], ['repoIssues', string, string]>({
    queryKey: ['repoIssues', owner, repo],
    queryFn: fetchIssues,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length < 20) return undefined;
      return pages.length + 1;
    },
    initialPageParam: 1, // obrigatório no v5
  });

  return { owner, repo, getData: () => query };
};

export default useIssuesHook
