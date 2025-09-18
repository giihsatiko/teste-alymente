import styled from 'styled-components/native';

export const Item = styled.View`
  background-color: ${({ theme }) => theme.palette.listItem};
  margin: 10px 0;
  border-radius: 12px;
  padding: ${({ theme }) => theme.sizes.spacing.MD}px;
`;
