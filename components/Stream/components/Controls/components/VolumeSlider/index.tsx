import { View, zero } from "@streamplace/components";
import { Volume2, VolumeX } from "lucide-react-native";
import { useCallback, useMemo } from "react";
import { Pressable } from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const { layout, p, r } = zero;

const ANIMATION_DURATION = 200;

export interface VolumeSliderProps {
  isMuted: boolean;
  setIsMuted: (isMuted: boolean) => void;
  volume: number;
  setVolume: (volume: number) => void;
}

export function VolumeSlider({ isMuted, setIsMuted }: VolumeSliderProps) {
  const fadeAnimation = useSharedValue(0);
  const widthAnimation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: fadeAnimation.value,
    width: widthAnimation.value,
  }));

  const onMuteToggleCallback = useCallback(() => {
    setIsMuted(!isMuted);
  }, [isMuted, setIsMuted]);

  const onVolumeHover = useCallback(() => {
    fadeAnimation.value = withTiming(1, { duration: ANIMATION_DURATION });
    widthAnimation.value = withTiming(ANIMATION_DURATION, {
      duration: ANIMATION_DURATION,
    });
  }, [fadeAnimation, widthAnimation]);

  const VolumeIcon = useMemo(() => {
    return isMuted ? VolumeX : Volume2;
  }, [isMuted]);

  return (
    <View
      onPointerEnter={onVolumeHover}
      style={[layout.flex.row, layout.flex.alignCenter, { height: 50 }]}
    >
      <Pressable onPress={onMuteToggleCallback}>
        <VolumeIcon size={20} color="white" />
      </Pressable>
    </View>
  );
}

export default VolumeSlider;
