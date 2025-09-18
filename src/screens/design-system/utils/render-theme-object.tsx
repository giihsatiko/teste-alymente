import { TypographyVariant } from "@/components/typography/types";
import { Typography } from "@/components/typography/typography";
import * as S from '../design-system.styles';
import { ThemeValue } from "../types";

export const renderThemeObject = (obj: Record<string, ThemeValue>) => {
  return Object.entries(obj).map(([key, value]) => {
    if (typeof value === "string") {
      return (
        <S.ContentWrapper key={key}>
          <Typography variant={TypographyVariant.BODY}>
            {`${key}: string`}
          </Typography>
        </S.ContentWrapper>
      );
    }

    const subTokensWithType = Object.keys(value)
      .map((subKey) => `${subKey}: string`)
      .join(", ");

    return (
      <S.ContentWrapper key={key}>
        <Typography variant={TypographyVariant.BODY}>
          {`${key}: { ${subTokensWithType} }`}
        </Typography>
      </S.ContentWrapper>
    );
  });
};