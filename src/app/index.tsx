import StreamUI from "@/components/Stream";
import { useVolumeSlider } from "@/hooks/useVolumeSlider";

export function Stream() {
  const { isMuted, setIsMuted, volume, setVolume } = useVolumeSlider();

  return (
    <StreamUI
      isMuted={isMuted}
      setIsMuted={setIsMuted}
      volume={volume}
      setVolume={setVolume}
    />
  );
}

export default Stream;
