import { UseQueryResult } from '@tanstack/react-query';

export type DetailsLayoutProps = {
  owner: string;
  repo: string;
  getData: () => UseQueryResult<any, Error>;
};

export type DataItem = {
  key: string;
  value: string;
};
