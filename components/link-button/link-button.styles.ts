import styled from "styled-components/native";
import { Typography } from "../typography/typography";

export const Button = styled.TouchableOpacity` 
  padding: ${({ theme }) => theme.sizes.spacing.XS}px;
  background-color: ${({ theme }) => theme.palette.button.active};
  border-radius: 20px;
  padding: 10px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.sizes.spacing.SM}px;
`;

export const LabelContainer = styled.View`
  justify-content: center;
`;

export const Label = styled(Typography)`
  text-align: center;
`;