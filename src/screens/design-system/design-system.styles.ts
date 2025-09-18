import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.background};
`;

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: ${({ theme }) => theme.sizes.spacing.MD}px;
  gap: ${({ theme }) => theme.sizes.spacing.XL}px;
  background-color: ${({ theme }) => theme.palette.background};
`;

export const ContentWrapper = styled.View`
  gap: ${({ theme }) => theme.sizes.spacing.MD}px;
`;
