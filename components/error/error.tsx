import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { TypographyVariant } from '../typography/types';
import { Typography } from '../typography/typography';
import * as S from './error.styles';

export const Error = () => {
  const theme = useTheme();

  return (
    <S.Wrapper>
      <FontAwesome
        name="exclamation-circle"
        size={theme.sizes.typography.XL}
        color={theme.palette.text.primary}
      />
      <Typography variant={TypographyVariant.TITLE}>
        Erro na requisição
      </Typography>
      <Typography variant={TypographyVariant.BODY}>
        Por favor, tente novamente mais tarde.
      </Typography>
    </S.Wrapper>
  );
};
