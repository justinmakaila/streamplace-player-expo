import { VolumeSlider, VolumeSliderProps } from "@/components/VolumeSlider";
import { View } from "@streamplace/components";

export interface BottomProps extends VolumeSliderProps {}

export function Bottom({
  isMuted,
  setIsMuted,
  volume,
  setVolume,
}: BottomProps) {
  return (
    <View style={{ flexDirection: "row" }}>
      <VolumeSlider
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        volume={volume}
        setVolume={setVolume}
      />
    </View>
  );
}

export default Bottom;
