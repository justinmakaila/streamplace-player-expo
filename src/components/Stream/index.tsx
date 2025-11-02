import { Player, useTheme } from "@streamplace/components";
import { View } from "react-native";
import { Controls, ControlsProps } from "./components/Controls";
import styles from "./styles";

export interface StreamProps extends ControlsProps {}

export function Stream({
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
    <View style={[styles.container, { backgroundColor: background }]}>
      <Player src={process.env.EXPO_PUBLIC_STREAMPLACE_SOURCE!}>
        <Controls
          isMuted={isMuted}
          setIsMuted={setIsMuted}
          volume={volume}
          setVolume={setVolume}
        />
      </Player>
    </View>
  );
}

export default Stream;
