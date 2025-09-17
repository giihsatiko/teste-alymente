import React from "react";

export enum TypographyVariant {
  TITLE = 'title',
  SUBTITLE = 'subtitle',
  BODY = 'body',
  CAPTION = 'caption',
}

export type TypographyProps = {
  variant: TypographyVariant;
  children: React.ReactNode;
}

