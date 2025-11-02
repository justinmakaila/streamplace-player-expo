import { ThemeProvider } from "@streamplace/components";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false, title: "Stream" }} />
    </ThemeProvider>
  );
}
