import { UseInfiniteQueryResult } from '@tanstack/react-query';

export type IssuesLayoutProps = {
  owner: string;
  repo: string;
  getData: () => UseInfiniteQueryResult<any[], Error>;
}

export type DataItem = {
  key: string;
  value: string;
};
