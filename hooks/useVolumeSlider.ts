import {
  useMuted,
  useSetMuted,
  useSetVolume,
  useVolume,
} from "@streamplace/components";

export function useVolumeSlider() {
  const isMuted = useMuted();
  const setIsMuted = useSetMuted();
  const volume = useVolume();
  const setVolume = useSetVolume();

  return {
    isMuted,
    setIsMuted,
    volume,
    setVolume,
  };
}
