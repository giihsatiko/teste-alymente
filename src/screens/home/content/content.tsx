import { Avatar } from '@/components/avatar/avatar';
import { ListItem } from '@/components/list-item/list-item';
import { TypographyVariant } from '@/components/typography/types';
import { Typography } from '@/components/typography/typography';
import { handleEmptyText } from '@/src/utils/handle-empty-text';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { getRowValues } from '../constants/get-row-values';
import * as S from '../home.styles';
import { HomeLayoutProps } from '../types';

export const Content = ({
  isFetching,
  isFetchingNextPage,
  data,
  hasNextPage,
  fetchNextPage,
  refetch,
  isLoading,
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
                  <Avatar isLoading={isLoading} src={item.owner.avatar_url} />
                  <View style={{ flex: 1 }}>
                    <Typography variant={TypographyVariant.TITLE}>
                      {item.name}
                    </Typography>
                    <Typography variant={TypographyVariant.SUBTITLE}>
                      {item.owner.login}
                    </Typography>
                  </View>
                </S.RowWrapper>
                <S.RowWrapper>
                  {getRowValues(item).map((stat, index) => (
                    <Typography key={index} variant={TypographyVariant.BODY}>
                      <FontAwesome
                        name={stat.icon as any}
                        size={theme.sizes.typography.SM}
                        color={theme.palette.text.primary}
                      />
                      {' '}
                      {stat.value}
                    </Typography>
                  ))}
                </S.RowWrapper>
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
