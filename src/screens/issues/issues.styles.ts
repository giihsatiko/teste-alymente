import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background};
`;

export const Container = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.sizes.spacing.MD}px;
  background-color: ${({ theme }) => theme.palette.background};
`;

export const TitleWrapper = styled.View`
  padding-bottom: ${({ theme }) => theme.sizes.spacing.SM}px;
`;

export const Item = styled.View`
  margin: ${({ theme }) => theme.sizes.spacing.MD}px 0;
  gap: ${({ theme }) => theme.sizes.spacing.MD}px;
`;

export const RowWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.spacing.XS}px;
`;
