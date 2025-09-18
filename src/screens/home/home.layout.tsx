import { Error } from '@/components/error/error';
import { Content } from './content/content';
import * as S from './home.styles';
import { HomeLayoutProps } from './types';

const HomeLayout = (props: HomeLayoutProps) => {
  return (
    <S.SafeArea>
      <S.Container>
        <S.Input
          placeholder="Procurar..."
          value={props.query}
          onChangeText={props.setQuery}
          onSubmitEditing={props.onSubmit}
        />
        {props.isError ? <Error /> : <Content {...props} />}
      </S.Container>
    </S.SafeArea>
  );
};

export default HomeLayout;
