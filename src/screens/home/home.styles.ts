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

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.palette.text.secondary,
}))`
  height: 50px;
  background-color: ${({ theme }) => theme.palette.input.background};
  border-color: ${({ theme }) => theme.palette.input.border};
  color: ${({ theme }) => theme.palette.text.secondary};
  border-width: 1px;
  border-radius: 8px;
  padding: 0 ${({ theme }) => theme.sizes.spacing.MD}px;
  margin-bottom: ${({ theme }) => theme.sizes.spacing.MD}px;
`;

export const RowWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.spacing.SM}px;
`;

export const Avatar = styled.Image`
  border-radius: 500px;
`;
