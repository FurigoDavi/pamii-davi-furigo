import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{ title: 'Página Inicial' }} />
    <Stack.Screen name="search" options={{ title: 'Pesquisa' }} />
    <Stack.Screen name="chat" options={{ title: 'Chat' }} />
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  </Stack>;
}
