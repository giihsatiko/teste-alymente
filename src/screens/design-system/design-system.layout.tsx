import { Error } from '@/components/error/error';
import { LinkButton } from '@/components/link-button/link-button';
import { ListItem } from '@/components/list-item/list-item';
import { Loading } from '@/components/loading/loading';
import { TypographyVariant } from '@/components/typography/types';
import { Typography } from '@/components/typography/typography';
import { Sizes } from '@/src/theme/sizes';
import { useTheme } from 'styled-components/native';
import { LinkButtonProps } from './constants/link-button-props';
import * as S from './design-system.styles';
import { ThemeValue } from './types';

export const DesignSystemLayout = () => {
  const theme = useTheme();
  const variants = Object.values(TypographyVariant);

  const renderThemeObject = (
    obj: Record<string, ThemeValue>,
  ): React.ReactNode => {
    return Object.entries(obj).map(([key, value]) => {
      if (typeof value === 'string') {
        return (
          <S.ContentWrapper key={key}>
            <Typography variant={TypographyVariant.BODY}>
              ${key}: string
            </Typography>
          </S.ContentWrapper>
        );
      }

      const subTokensWithType = Object.keys(value)
        .map((subKey) => `${subKey}: string`)
        .join(', ');

      return (
        <S.ContentWrapper key={key}>
          <Typography key={key} variant={TypographyVariant.BODY}>
            ${`${key}: { ${subTokensWithType} }`}
          </Typography>
        </S.ContentWrapper>
      );
    });
  };

  return (
    <S.SafeArea>
      <S.Container>
        <ListItem>
          <S.ContentWrapper>
            <Typography variant={TypographyVariant.TITLE}>Theme</Typography>
            <Typography variant={TypographyVariant.SUBTITLE}>
              Tokens de espaçamento
            </Typography>
            {Object.entries(Sizes.spacing).map(([key, value]) => (
              <Typography key={key} variant={TypographyVariant.BODY}>
                ${key}: {value}px
              </Typography>
            ))}
            <Typography variant={TypographyVariant.SUBTITLE}>
              Tokens de cor
            </Typography>
            {renderThemeObject(theme.palette)}
          </S.ContentWrapper>
        </ListItem>
        <ListItem>
          <S.ContentWrapper>
            <Typography variant={TypographyVariant.TITLE}>Button</Typography>
            <Typography variant={TypographyVariant.SUBTITLE}>Props</Typography>
            {LinkButtonProps.map((prop) => (
              <Typography key={prop.name} variant={TypographyVariant.BODY}>
                {prop.name}: {prop.type}
              </Typography>
            ))}
            <Typography variant={TypographyVariant.SUBTITLE}>
              Com ícone
            </Typography>
            <LinkButton label="Demo" url="" iconName="bug" />
            <Typography variant={TypographyVariant.SUBTITLE}>
              Sem ícone
            </Typography>
            <LinkButton label="Demo" url="" />
          </S.ContentWrapper>
        </ListItem>
        <ListItem>
          <S.ContentWrapper>
            <Typography variant={TypographyVariant.TITLE}>Typograph</Typography>
            <Typography variant={TypographyVariant.SUBTITLE}>Props</Typography>
            <Typography variant={TypographyVariant.BODY}>
              $variant: TypographyVariant
            </Typography>
            {variants.map((variant) => (
              <Typography key={variant} variant={variant}>
                {variant.charAt(0).toUpperCase() + variant.slice(1)} - Lorem
                Ipsum
              </Typography>
            ))}
          </S.ContentWrapper>
        </ListItem>
        <ListItem>
          <S.ContentWrapper>
            <Typography variant={TypographyVariant.TITLE}>Erro</Typography>
            <Error />
          </S.ContentWrapper>
        </ListItem>
        <ListItem>
          <S.ContentWrapper>
            <Typography variant={TypographyVariant.TITLE}>Loading</Typography>
            <Loading />
          </S.ContentWrapper>
        </ListItem>
      </S.Container>
    </S.SafeArea>
  );
};
