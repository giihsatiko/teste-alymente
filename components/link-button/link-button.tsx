import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { ReactElement } from 'react';
import { useTheme } from 'styled-components/native';
import * as S from './link-button.styles';
import { LinkButtonProps } from './types';

export const LinkButton = ({
  label,
  url,
  params,
  iconName,
  shouldDecode = false,
}: LinkButtonProps): ReactElement => {
  const theme = useTheme();

  const formattedUrl = shouldDecode
    ? `/${encodeURIComponent(url)}`
    : (url as any);

  return (
    <Link href={{ pathname: formattedUrl, params }} asChild>
      <S.Button>
        <S.Content>
          {iconName && (
            <FontAwesome
              name={iconName}
              size={24}
              color={theme.palette.button.label}
            />
          )}
          <S.LabelContainer>
            <S.Label>{label}</S.Label>
          </S.LabelContainer>
        </S.Content>
      </S.Button>
    </Link>
  );
};
