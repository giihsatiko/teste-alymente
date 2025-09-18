import React from 'react';
import { useTheme } from 'styled-components/native';
import { TypographyProps, TypographyVariant } from './types';
import { Text, getTypographyStyles } from './typography.styles';

export const Typography = ({
  variant = TypographyVariant.BODY,
  children,
}: TypographyProps) => {
  const theme = useTheme();
  const styles = getTypographyStyles(theme);

  return <Text style={[styles[variant]]}>{children}</Text>;
};
