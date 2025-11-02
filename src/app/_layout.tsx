import {
  LivestreamProvider,
  PlayerProvider,
  StreamplaceProvider,
  ThemeProvider,
} from "@streamplace/components";
import { Slot } from "expo-router";

export function RootLayout() {
  return (
    <ThemeProvider>
      <StreamplaceProvider url={process.env.EXPO_PUBLIC_STREAMPLACE_NODE_URL!}>
        <LivestreamProvider src={process.env.EXPO_PUBLIC_STREAMPLACE_SOURCE!}>
          <PlayerProvider>
            <Slot />
          </PlayerProvider>
        </LivestreamProvider>
      </StreamplaceProvider>
    </ThemeProvider>
  );
}

export default RootLayout;
