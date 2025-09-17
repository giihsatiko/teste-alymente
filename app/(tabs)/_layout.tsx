import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const scheme = colorScheme ?? "light";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[scheme ?? 'light'].tint,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="explore" options={{ headerShown: false }} />
    </Tabs>
  );
}
