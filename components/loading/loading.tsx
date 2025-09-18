import LottieView from 'lottie-react-native';
import { useTheme } from 'styled-components/native';
import * as S from './loading.styles';

export const Loading = () => {
  const theme = useTheme();

  return (
    <S.Wrapper>
      <LottieView
        source={require('./loading.json')}
        autoPlay
        loop
        style={{ width: 150, height: 150 }}
        colorFilters={[
          { keypath: '#dot01', color: theme.palette.text.primary },
          { keypath: '#dot02', color: theme.palette.text.primary },
          { keypath: '#dot03', color: theme.palette.text.primary },
        ]}
      />
    </S.Wrapper>
  );
};
