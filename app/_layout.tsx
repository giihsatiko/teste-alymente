import { QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { darkTheme } from '@/src/theme/dark';
import { lightTheme } from '@/src/theme/light';
import { QueryClient } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { Button } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

const queryClient = new QueryClient();

export default function RootLayout() {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => setIsDark((prev) => !prev);
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Stack
            screenOptions={{
              contentStyle: { backgroundColor: theme.palette.background },
              headerStyle: {
                backgroundColor: theme.palette.background,
              },
              headerShadowVisible: false,
              headerTintColor: theme.palette.text.primary,
              headerRight: () => (
                <Button
                  title={isDark ? 'Light' : 'Dark'}
                  onPress={toggleTheme}
                  color={theme.palette.text.primary}
                />
              ),
            }}
          >
            <Stack.Screen name="(tabs)" options={{ title: 'Main' }} />
            <Stack.Screen
              name="[id]"
              options={{
                title: 'Detalhes',
              }}
            />
            <Stack.Screen
              name="issues"
              options={{
                title: 'Issues',
              }}
            />
          </Stack>
        </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
