import {
  LivestreamProvider,
  PlayerProvider,
  StreamplaceProvider,
  ThemeProvider,
} from "@streamplace/components";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <StreamplaceProvider url={process.env.EXPO_PUBLIC_STREAMPLACE_NODE_URL!}>
        <LivestreamProvider src={process.env.EXPO_PUBLIC_STREAMPLACE_SOURCE!}>
          <PlayerProvider>
            <Stack screenOptions={{ headerShown: false }} />
          </PlayerProvider>
        </LivestreamProvider>
      </StreamplaceProvider>
    </ThemeProvider>
  );
}
