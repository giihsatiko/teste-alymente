import { TypographyVariant } from '@/components/typography/types'
import { Typography } from '@/components/typography/typography'
import { FlatList, ListRenderItem, View } from 'react-native'
import * as S from './details.styles'
import { DataItem, DetailsLayoutProps } from './types'

const DetailsLayout = ({ owner, repo, getData }: DetailsLayoutProps) => {
  const { data, isLoading, isError } = getData();

  if (isError || !data) return ;

  const dataEntries: DataItem[] = Object.entries(data)
    .filter(([_, value]) => typeof value !== 'object' || value === null)
    .map(([key, value]) => ({
      key,
      value: typeof value === 'boolean' ? String(value) : String(value),
    }));

  const renderItem: ListRenderItem<DataItem> = ({ item }) => (
    <S.RowWrapper>
      <Typography variant={TypographyVariant.BODY}>
        {item.key.replace(/_/g, ' ')}:
      </Typography>
      <Typography variant={TypographyVariant.CAPTION}>
        {item.value}
      </Typography>
    </S.RowWrapper>
  );

  return (
    <S.SafeArea>
      <S.Container>
        <S.Item>
          <View>
            <S.RowWrapper>
              <View>
                <Typography variant={TypographyVariant.TITLE}>{repo}</Typography>
                <Typography variant={TypographyVariant.SUBTITLE}>{owner}</Typography>
              </View>
            </S.RowWrapper>
            <FlatList
              data={dataEntries}
              keyExtractor={(item) => item.key}
              renderItem={renderItem}
              contentContainerStyle={{ paddingBottom: 16 }}
            />
          </View>
        </S.Item>
      </S.Container>
      {isLoading && <S.SafeArea><Typography variant={TypographyVariant.BODY}>Carregando...</Typography></S.SafeArea>}
      {isError || !data && <S.SafeArea><Typography variant={TypographyVariant.BODY}>Erro ao carregar</Typography></S.SafeArea>}
    </S.SafeArea>
  );
};

export default DetailsLayout
