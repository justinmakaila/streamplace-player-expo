import { View } from "@streamplace/components";
import { useCallback, useRef, useState } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";
import { Bottom, BottomProps } from "./components/Bottom";
import styles from "./styles";

const FADE_IN_DURATION = 200;
const FADE_OUT_DURATION = 400;
const FADE_OUT_DELAY = 500;

export interface ControlsProps extends BottomProps {}

export function Controls({
  isMuted,
  setIsMuted,
  volume,
  setVolume,
}: ControlsProps) {
  const [isVisible, setIsVisible] = useState(true);
  const fadeOpacity = useSharedValue(1);
  const fadeTimeout = useRef<number | null>(null);

  const animatedFadeStyle = useAnimatedStyle(() => ({
    opacity: fadeOpacity.value,
  }));

  const resetFadeTimer = useCallback(() => {
    fadeOpacity.value = withTiming(1, { duration: FADE_IN_DURATION });
    if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
    setIsVisible(true);

    fadeTimeout.current = setTimeout(() => {
      fadeOpacity.value = withTiming(0, { duration: FADE_OUT_DURATION });
      setIsVisible(false);
    }, FADE_OUT_DELAY);
  }, [fadeOpacity]);

  const onPlayerHover = useCallback(() => {
    resetFadeTimer();
  }, [resetFadeTimer]);

  const hover = Gesture.Hover().onChange((_) => {
    scheduleOnRN(onPlayerHover);
  });

  return (
    <GestureDetector gesture={hover}>
      <>
        <View style={styles.container}>
          <Animated.View
            style={[styles.bottomControlsContainer, animatedFadeStyle]}
          >
            <Bottom
              isMuted={isMuted}
              setIsMuted={setIsMuted}
              volume={volume}
              setVolume={setVolume}
            />
          </Animated.View>
        </View>
      </>
    </GestureDetector>
  );
}

export default Controls;
