import { TypographyVariant } from '@/components/typography/types'
import { Typography } from '@/components/typography/typography'
import { ActivityIndicator, FlatList, View } from 'react-native'
import * as S from './home.styles'
import { HomeLayoutProps } from './types'

const HomeLayout = ({
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    query,
    setQuery,
    refetch,
    onSubmit,
}: HomeLayoutProps) => {
    const repositories = data?.pages.flatMap((page) => page.items) || [];

    return (
        <S.SafeArea>
            <S.Container>
                <S.Input
                    placeholder="Procurar..."
                    value={query}
                    onChangeText={setQuery}
                    onSubmitEditing={onSubmit}
                />

                {isFetching && !isFetchingNextPage ? (
                    <ActivityIndicator style={{ marginTop: 16 }} />
                ) : (
                    <FlatList
                        data={repositories}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <S.Item href={`/${encodeURIComponent(item.full_name)}`}>
                                <View>
                                    <S.RowWrapper>
                                        <S.Avatar src={item.owner.avatar_url} width={40} height={40} />
                                        <View>
                                            <Typography variant={TypographyVariant.TITLE}>{item.name}</Typography>
                                            <Typography variant={TypographyVariant.SUBTITLE}>{item.owner.login}</Typography>
                                        </View>
                                    </S.RowWrapper>
                                    <Typography variant={TypographyVariant.BODY}>☆ {item.stargazers_count}</Typography>
                                    <Typography variant={TypographyVariant.CAPTION}>{item.language}</Typography>
                                    <Typography variant={TypographyVariant.CAPTION}>{item.description}</Typography>
                                </View>
                            </S.Item>
                        )}
                        onEndReached={() => hasNextPage && fetchNextPage()}
                        onEndReachedThreshold={0.5}
                        contentContainerStyle={{ paddingBottom: 16 }}
                        refreshing={isFetching && !isFetchingNextPage}
                        onRefresh={refetch}
                    />
                )}
            </S.Container>
        </S.SafeArea>
    )
}

export default HomeLayout
