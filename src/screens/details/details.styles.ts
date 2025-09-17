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

export const Item = styled.View` 
  padding: ${({ theme }) => theme.sizes.spacing.MD}px;
  border-bottom-color: ${({ theme }) => theme.palette.border};
  border-bottom-width: 1px;
`;

export const RowWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.spacing.XS}px;
`;
