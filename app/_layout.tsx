import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { darkTheme } from '@/src/theme/dark';
import { QueryClient } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { ThemeProvider } from 'styled-components/native';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darkTheme}>
          <Stack
            screenOptions={{
              contentStyle: { backgroundColor: darkTheme.palette.background },
              headerStyle: {
                backgroundColor: darkTheme.palette.background,
              },
              headerShadowVisible: false,
              headerTintColor: darkTheme.palette.text.primary,
            }}
          >
            <Stack.Screen
              name="(tabs)"
              options={{ title: 'Home', headerShown: false }}
            />
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
