import { ListItem } from '@/components/list-item/list-item';
import { TypographyVariant } from '@/components/typography/types';
import { Typography } from '@/components/typography/typography';
import { handleEmptyText } from '@/src/utils/handle-empty-text';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useTheme } from 'styled-components/native';
import * as S from '../home.styles';
import { HomeLayoutProps } from '../types';

export const Content = ({
  isFetching,
  isFetchingNextPage,
  data,
  hasNextPage,
  fetchNextPage,
  refetch,
}: HomeLayoutProps) => {
  const theme = useTheme();

  const repositories = data?.pages.flatMap((page) => page.items) || [];

  return (
    <View>
      {isFetching && !isFetchingNextPage ? (
        <ActivityIndicator style={{ marginTop: 16 }} />
      ) : (
        <FlatList
          data={repositories}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Link
              href={`/${encodeURIComponent(item.full_name)}`}
              asChild
              style={{ flex: 1 }}
            >
              <ListItem>
                <S.RowWrapper>
                  <S.Avatar
                    src={item.owner.avatar_url}
                    width={40}
                    height={40}
                  />
                  <View style={{ flex: 1 }}>
                    <Typography variant={TypographyVariant.TITLE}>
                      {item.name}
                    </Typography>
                    <Typography variant={TypographyVariant.SUBTITLE}>
                      {item.owner.login}
                    </Typography>
                  </View>
                </S.RowWrapper>
                <Typography variant={TypographyVariant.BODY}>
                  <FontAwesome
                    name="star"
                    size={theme.sizes.typography.SM}
                    color={theme.palette.text.primary}
                  />
                  {item.stargazers_count}
                </Typography>
                <Typography variant={TypographyVariant.BODY}>
                  <FontAwesome
                    name="code"
                    size={theme.sizes.typography.SM}
                    color={theme.palette.text.primary}
                  />
                  {handleEmptyText(item.language)}
                </Typography>
                <Typography variant={TypographyVariant.CAPTION}>
                  {handleEmptyText(item.description)}
                </Typography>
              </ListItem>
            </Link>
          )}
          onEndReached={() => hasNextPage && fetchNextPage()}
          onEndReachedThreshold={0.5}
          contentContainerStyle={{ paddingBottom: 16 }}
          refreshing={isFetching && !isFetchingNextPage}
          onRefresh={refetch}
        />
      )}
    </View>
  );
};
