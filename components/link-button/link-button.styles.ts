import styled from "styled-components/native";
import { Typography } from "../typography/typography";

export const Button = styled.TouchableOpacity` 
  padding: ${({ theme }) => theme.sizes.spacing.MD}px;
  background-color: ${({ theme }) => theme.palette.button.active};
  border-radius: 20px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
`;

export const Label = styled(Typography)`
  text-align: center;
`;