import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';
import { DetailsLayoutProps } from './types';

export const useDetailsHook = (): DetailsLayoutProps => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [owner, repo] = id.split("/")

  const fetchIssues = async (): Promise<any[]> => {
    const { data } = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}`
    );
    return data;
  }

  const query = useQuery({
    queryKey: ["repoDetails", owner, repo],
    queryFn: fetchIssues,
  });

  return { owner, repo, getData: () => query };
}

export default useDetailsHook
