import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { ReactElement } from "react";
import { useTheme } from "styled-components/native";
import { TypographyVariant } from "../typography/types";
import * as S from './link-button.styles';
import { LinkButtonProps } from "./types";

export const LinkButton = ({ label, url, params, shouldDecode = false }: LinkButtonProps): ReactElement => {
    const theme = useTheme();

    const formattedUrl = shouldDecode ? `/${encodeURIComponent(url)}` : url as any;

    return (
        <Link href={{ pathname: formattedUrl, params }} asChild>
            <S.Button>
                <S.Content>
                    <FontAwesome name="bug" size={24} color={theme.palette.text.primary} />
                    <S.LabelContainer>
                        <S.Label variant={TypographyVariant.SUBTITLE}>{label}</S.Label>
                    </S.LabelContainer>
                </S.Content>
            </S.Button>
        </Link>
    )
}