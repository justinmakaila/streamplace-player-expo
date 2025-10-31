import Stream from "@/components/Stream";
import {
  useMuted,
  useSetMuted,
  useSetVolume,
  useVolume,
} from "@streamplace/components";

export default function Index() {
  const isMuted = useMuted();
  const setIsMuted = useSetMuted();
  const volume = useVolume();
  const setVolume = useSetVolume();

  return (
    <Stream
      isMuted={isMuted}
      setIsMuted={setIsMuted}
      volume={volume}
      setVolume={setVolume}
    />
  );
}
