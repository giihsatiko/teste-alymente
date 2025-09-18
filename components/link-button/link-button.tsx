import { Link } from "expo-router";
import { ReactElement } from "react";
import { TypographyVariant } from "../typography/types";
import * as S from './link-button.styles';
import { LinkButtonProps } from "./types";

export const LinkButton = ({ label, url, params, shouldDecode = false }: LinkButtonProps): ReactElement => {
    const formattedUrl = shouldDecode ? `/${encodeURIComponent(url)}` : url as any;

    return (
        <Link href={{ pathname: formattedUrl, params }} asChild>
            <S.Button>
                <S.Label variant={TypographyVariant.SUBTITLE}>{label}</S.Label>
            </S.Button>
        </Link>
    )
}