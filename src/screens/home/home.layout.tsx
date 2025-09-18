import { Error } from '@/components/error/error';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Content } from './content/content';
import * as S from './home.styles';
import { HomeLayoutProps } from './types';

const HomeLayout = (props: HomeLayoutProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <S.SafeArea>
        <S.Container>
          <S.Input
            placeholder="Procurar..."
            value={props.query}
            onChangeText={props.setQuery}
            onSubmitEditing={props.onSubmit}
          />
          {props.isError ? <Error message={(props.error as Error)?.message ?? 'Erro desconhecido'}/> : <Content {...props} />}
        </S.Container>
      </S.SafeArea>
    </TouchableWithoutFeedback>
  );
};

export default HomeLayout;
