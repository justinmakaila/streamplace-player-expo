import { Slider, View } from "@streamplace/components";
import { Volume2, VolumeX } from "lucide-react-native";
import { useCallback, useMemo } from "react";
import { Pressable } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import styles from "./styles";

const ANIMATION_DURATION = 200;

export interface VolumeSliderProps {
  isMuted: boolean;
  setIsMuted: (isMuted: boolean) => void;
  volume: number;
  setVolume: (volume: number) => void;
  UnmuteIcon?: React.ReactNode;
  MuteIcon?: React.ReactNode;
}

export function VolumeSlider({
  isMuted,
  setIsMuted,
  volume,
  setVolume,
  UnmuteIcon = <VolumeX size={20} color="white" />,
  MuteIcon = <Volume2 size={20} color="white" />,
}: VolumeSliderProps) {
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

  const onSliderValueChange: NonNullable<Slider.RootProps["onValueChange"]> =
    useCallback(
      (values) => {
        /** Convert value to 0-1 range */
        const value = values[0] / 100;
        setVolume(value);
        setIsMuted(value === 0);
      },
      [setIsMuted, setVolume]
    );

  const VolumeIcon = useMemo(() => {
    return isMuted ? UnmuteIcon : MuteIcon;
  }, [MuteIcon, UnmuteIcon, isMuted]);

  // Convert volume (0-1) to percentage (0-100) for slider
  const sliderValue = useMemo(() => {
    return (isMuted ? 0 : volume) * 100;
  }, [isMuted, volume]);

  return (
    <View onPointerEnter={onVolumeHover} style={styles.container}>
      <Pressable style={styles.muteButton} onPress={onMuteToggleCallback}>
        {VolumeIcon}
      </Pressable>
      <Animated.View style={[styles.sliderContainer, animatedStyle]}>
        <Slider.Root
          asChild
          style={styles.sliderRoot}
          value={sliderValue}
          min={0}
          max={100}
          onValueChange={onSliderValueChange}
        >
          <Slider.Track style={styles.sliderTrack}>
            <Slider.Range style={styles.sliderRange} />
            <Slider.Thumb style={styles.sliderThumb} />
          </Slider.Track>
        </Slider.Root>
      </Animated.View>
    </View>
  );
}

export default VolumeSlider;
