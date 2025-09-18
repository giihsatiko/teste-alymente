import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { darkTheme } from '@/src/theme/dark';
import { lightTheme } from '@/src/theme/light';
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.palette.text.primary,
        tabBarInactiveTintColor: theme.palette.text.secondary,
        tabBarStyle: {
          backgroundColor: theme.palette.background,
          borderTopColor: 'transparent',
        },
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome
              name="home"
              size={theme.sizes.typography.XL}
              color={theme.palette.text.primary}
            />
          ),
          title: 'Home',
        }}
      />
    </Tabs>
  );
}
