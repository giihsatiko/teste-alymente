import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import { githubFetcher } from '../../api/github/token';
import { DetailsLayoutProps } from './types';

export const useDetailsHook = (): DetailsLayoutProps => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [owner, repo] = id.split('/');

  const query = useQuery({
    queryKey: ['repoDetails', owner, repo],
    queryFn: () => githubFetcher(`https://api.github.com/repos/${owner}/${repo}`),
  });

  return { owner, repo, getData: () => query };
};

export default useDetailsHook;
