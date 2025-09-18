import { useColorScheme as useRNColorScheme } from 'react-native';

export const useColorScheme = () => (useRNColorScheme() === 'dark' ? 'dark' : 'light');
