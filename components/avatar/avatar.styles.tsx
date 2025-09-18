import styled from "styled-components/native";

export const AvatarWrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.text.secondary};
  justify-content: center;
  align-items: center;
  border-radius: 500px;
  height: ${({ theme }) => theme.sizes.avatar.LG}px;
  width: ${({ theme }) => theme.sizes.avatar.LG}px;
  overflow: hidden;
`;

export const Avatar = styled.Image.attrs(({ theme }) => ({
  width: theme.sizes.avatar.LG,
  height: theme.sizes.avatar.LG,
}))``;