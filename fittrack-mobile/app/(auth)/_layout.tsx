import React from 'react';
import { Stack } from 'expo-router';
import { colors } from '../../constants/theme';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        cardStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
    </Stack>
  );
}
