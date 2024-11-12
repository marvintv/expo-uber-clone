import { Stack } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="find-ride" options={{ headerShown: false }} />
      <Stack.Screen name="confirm-ride" options={{ headerShown: false }} />
    </Stack>
    
  );
};
export default Layout;
