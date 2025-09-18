import { Avatar } from '@/components/avatar/avatar';
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
import { renderThemeObject } from './utils/render-theme-object';

export const DesignSystemLayout = () => {
  const theme = useTheme();
  const variants = Object.values(TypographyVariant);

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
              Tokens de Typography
            </Typography>
            {Object.entries(Sizes.typography).map(([key, value]) => (
              <Typography key={key} variant={TypographyVariant.BODY}>
                ${key}: {value}px
              </Typography>
            ))}
            <Typography variant={TypographyVariant.SUBTITLE}>
              Tokens de Avatar
            </Typography>
            {Object.entries(Sizes.avatar).map(([key, value]) => (
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
            <Error message="Lorem Ipsum" />
            <Typography variant={TypographyVariant.SUBTITLE}>Props</Typography>
            <Typography variant={TypographyVariant.BODY}>
              $message : string
            </Typography>
          </S.ContentWrapper>
        </ListItem>
        <ListItem>
          <S.ContentWrapper>
            <Typography variant={TypographyVariant.TITLE}>Avatar</Typography>
            <Typography variant={TypographyVariant.SUBTITLE}>Normal</Typography>
            <Avatar
              isLoading={false}
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            />
            <Typography variant={TypographyVariant.SUBTITLE}>
              Loading
            </Typography>
            <Avatar
              isLoading={true}
              src=""
            />
            <Typography variant={TypographyVariant.SUBTITLE}>Props</Typography>
            <Typography variant={TypographyVariant.BODY}>
              $isLoading: boolean
            </Typography>
            <Typography variant={TypographyVariant.BODY}>
              $src: string
            </Typography>
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
