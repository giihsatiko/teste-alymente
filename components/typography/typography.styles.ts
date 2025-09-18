import { ThemeType } from '@/src/theme/types';
import { TextStyle } from 'react-native';
import styled from 'styled-components/native';
import { TypographyVariant } from './types';

export const Text = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
  allowFontScaling: false
})`
   flex-shrink: 1;
`;

export const getTypographyStyles = (theme: ThemeType): Record<TypographyVariant, TextStyle> => ({
  title: {
    fontSize: theme.sizes.typography.LG,
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  },
  subtitle: {
    fontSize: theme.sizes.typography.MD,
    fontWeight: '500',
    color: theme.palette.text.primary,
  },
  body: {
    fontSize: theme.sizes.typography.SM,
    fontWeight: '400',
    color: theme.palette.text.primary,
  },
  caption: {
    fontSize: theme.sizes.typography.XS,
    fontWeight: '400',
    color: theme.palette.text.secondary,
  },
});
