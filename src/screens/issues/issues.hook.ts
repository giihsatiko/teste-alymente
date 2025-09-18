import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import { githubFetcher } from '../../api/github/token';
import { IssuesLayoutProps } from './types';

export const useIssuesHook = (): IssuesLayoutProps => {
  const params = useLocalSearchParams<{ owner: string; repo: string }>();
  const { owner, repo } = params;

  const query = useInfiniteQuery<any[], Error, any[], ['repoIssues', string, string]>({
    queryKey: ['repoIssues', owner, repo],
    queryFn: async ({ pageParam = 1 }: QueryFunctionContext) => {
      return githubFetcher(
        `https://api.github.com/repos/${owner}/${repo}/issues?state=open&page=${pageParam}&per_page=20`
      );
    },
    getNextPageParam: (lastPage, pages) => (lastPage.length < 20 ? undefined : pages.length + 1),
    initialPageParam: 1,
  });

  return { owner, repo, getData: () => query };
};

export default useIssuesHook;
