import { Error } from '@/components/error/error';
import { ListItem } from '@/components/list-item/list-item';
import { Loading } from '@/components/loading/loading';
import { TypographyVariant } from '@/components/typography/types';
import { Typography } from '@/components/typography/typography';
import React from 'react';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as S from './issues.styles';
import { IssuesLayoutProps } from './types';

const IssuesLayout = ({ owner, repo, getData }: IssuesLayoutProps) => {
  const { bottom } = useSafeAreaInsets();

  const { data, isLoading, isError, fetchNextPage, hasNextPage } = getData();

  if (isLoading) return <Loading />;
  if (isError || !data) return <Error />;

  const issues = (data as unknown as { pages: any[][] }).pages.flat();

  const IssueItem = React.memo(({ item }: { item: any }) => {
    const repoName = item.repository_url?.split('/').slice(-2).join('/') ?? '';
    const createdDate = new Date(item.created_at).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    return (
      <S.Item>
        <Typography variant={TypographyVariant.SUBTITLE}>
          #{item.number} In {repoName} · {item.user.login} opened on{' '}
          {createdDate}
        </Typography>
        <Typography variant={TypographyVariant.TITLE}>{item.title}</Typography>
        <Typography variant={TypographyVariant.CAPTION}>
          Status: {item.state}
        </Typography>
      </S.Item>
    );
  });

  const renderItem = ({ item }) => <IssueItem item={item} />;

  return (
    <S.SafeArea>
      <S.Container>
        <ListItem>
          <S.TitleWrapper>
            <Typography variant={TypographyVariant.TITLE}>{repo}</Typography>
            <Typography variant={TypographyVariant.SUBTITLE}>
              {owner}
            </Typography>
          </S.TitleWrapper>
          <FlatList
            data={issues}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            onEndReached={() => hasNextPage && fetchNextPage()}
            onEndReachedThreshold={0.5}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 50 + bottom }}
          />
        </ListItem>
      </S.Container>
    </S.SafeArea>
  );
};

export default IssuesLayout;
