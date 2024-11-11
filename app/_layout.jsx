import { Stack } from "expo-router";
import React from "react";

function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CardDescription/CardDescription"
          options={{
            headerTitle: 'Description'
          }}
        />
      </Stack>
    </>
  );
}

export default RootLayout;
