import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.palette.text.primary,
        tabBarInactiveTintColor: theme.palette.text.primary,
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
          tabBarIcon: () => (
            <FontAwesome
              name="home"
              size={theme.sizes.typography.XL}
              color={theme.palette.text.primary}
            />
          ),
          title: 'Home',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="design-system"
        options={{
          tabBarIcon: () => (
            <FontAwesome
              name="book"
              size={theme.sizes.typography.XL}
              color={theme.palette.text.primary}
            />
          ),
          title: 'Design System',
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
