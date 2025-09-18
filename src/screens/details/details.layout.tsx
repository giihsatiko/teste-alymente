import { Error } from '@/components/error/error';
import { LinkButton } from '@/components/link-button/link-button';
import { ListItem } from '@/components/list-item/list-item';
import { Loading } from '@/components/loading/loading';
import { TypographyVariant } from '@/components/typography/types';
import { Typography } from '@/components/typography/typography';
import React from 'react';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as S from './details.styles';
import { DataItem, DetailsLayoutProps } from './types';

const DetailsLayout = ({ owner, repo, getData }: DetailsLayoutProps) => {
  const { bottom } = useSafeAreaInsets();

  const { data, isLoading, isError } = getData();

  if (isLoading) return <Loading />;
  if (isError || !data) return <Error />;

  const dataEntries: DataItem[] = Object.entries(data)
    .filter(([_, value]) => typeof value !== 'object' || value === null)
    .map(([key, value]) => ({
      key,
      value: typeof value === 'boolean' ? String(value) : String(value),
    }));

  const DetailItem = React.memo(({ item }: { item: DataItem }) => (
    <S.Item>
      <Typography variant={TypographyVariant.BODY}>
        {item.key.replace(/_/g, ' ')}:
      </Typography>
      <Typography variant={TypographyVariant.CAPTION}>
        {item.value === '' ? '???' : item.value}
      </Typography>
    </S.Item>
  ));

  return (
    <S.SafeArea>
      <S.Container>
        <ListItem>
          <Typography variant={TypographyVariant.TITLE}>{repo}</Typography>
          <S.RowWrapper>
            <Typography variant={TypographyVariant.SUBTITLE}>
              {owner}
            </Typography>
            <LinkButton label="Issues" url="/issues" params={{ owner, repo }} />
          </S.RowWrapper>
          <FlatList
            data={dataEntries}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => <DetailItem item={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 50 + bottom }}
          />
        </ListItem>
      </S.Container>
    </S.SafeArea>
  );
};

export default DetailsLayout;
