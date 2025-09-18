import { TypographyVariant } from '@/components/typography/types'
import { Typography } from '@/components/typography/typography'
import { FlatList, View } from 'react-native'
import * as S from './issues.styles'
import { IssuesLayoutProps } from './types'

const IssuesLayout = ({ owner, repo, getData }: IssuesLayoutProps) => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } = getData();

  if (isLoading)
    return <Typography variant={TypographyVariant.BODY}>Carregando...</Typography>;
  if (isError || !data)
    return <Typography variant={TypographyVariant.BODY}>Erro ao carregar</Typography>;

  const issues = (data as unknown as { pages: any[][] }).pages.flat();

  const renderItem = ({ item }) => {
    const repoName = item.repository_url?.split('/').slice(-2).join('/') ?? '';
    const createdDate = new Date(item.created_at).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    return (
      <S.Item>
        <View>
          <Typography variant={TypographyVariant.SUBTITLE}>
            #{item.number} In {repoName} · {item.user.login} opened on {createdDate}
          </Typography>
          <Typography variant={TypographyVariant.TITLE}>{item.title}</Typography>
          <Typography variant={TypographyVariant.CAPTION}>Status: {item.state}</Typography></View>
      </S.Item>
    );
  };

  return (
    <S.SafeArea>
      <S.Container>
        <View>
          <S.RowWrapper>
            <View>
              <Typography variant={TypographyVariant.TITLE}>{repo}</Typography>
              <Typography variant={TypographyVariant.SUBTITLE}>{owner}</Typography>
            </View>
          </S.RowWrapper>
          <FlatList
            data={issues}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 16 }}
            onEndReached={() => hasNextPage && fetchNextPage()}
            onEndReachedThreshold={0.5}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </S.Container>
    </S.SafeArea>
  );
};

export default IssuesLayout
