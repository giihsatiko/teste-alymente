import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query';

export type HomeLayoutProps = UseInfiniteQueryResult<
  InfiniteData<any> | undefined,
  Error | null
> & {
  query: string;
  setQuery: (text: string) => void;
  onSubmit: () => void;
};

export type RowValueType = {
  icon: string,
  value: string
}