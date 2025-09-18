import { handleEmptyText } from '@/src/utils/handle-empty-text';

export const getRowValues = (item: any) => [
  { icon: 'star', value: item.stargazers_count },
  { icon: 'code-fork', value: item.forks_count },
  { icon: 'eye', value: item.watchers_count },
  { icon: 'code', value: handleEmptyText(item.language) },
];
