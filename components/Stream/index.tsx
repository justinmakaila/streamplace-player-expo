import { Player, PlayerProvider, useTheme } from "@streamplace/components";
import { View } from "react-native";
import Controls, { ControlsProps } from "./components/Controls";

export interface StreamProps extends ControlsProps {}

export default function Stream({
  isMuted,
  setIsMuted,
  volume,
  setVolume,
}: StreamProps) {
  const {
    theme: {
      colors: { background },
    },
  } = useTheme();

  return (
    <PlayerProvider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: background,
        }}
      >
        <Player src={process.env.EXPO_PUBLIC_STREAMPLACE_SOURCE!}>
          <Controls
            isMuted={isMuted}
            setIsMuted={setIsMuted}
            volume={volume}
            setVolume={setVolume}
          />
        </Player>
      </View>
    </PlayerProvider>
  );
}
