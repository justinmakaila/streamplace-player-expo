import Stream from "@/components/Stream";
import { useVolumeSlider } from "@/hooks/useVolumeSlider";
import {
  LivestreamProvider,
  StreamplaceProvider,
} from "@streamplace/components";

export function StreamInner() {
  const { isMuted, setIsMuted, volume, setVolume } = useVolumeSlider();

  return (
    <Stream
      isMuted={isMuted}
      setIsMuted={setIsMuted}
      volume={volume}
      setVolume={setVolume}
    />
  );
}

export default function Index() {
  return (
    <StreamplaceProvider url={process.env.EXPO_PUBLIC_STREAMPLACE_NODE_URL!}>
      <LivestreamProvider src={process.env.EXPO_PUBLIC_STREAMPLACE_SOURCE!}>
        <StreamInner />
      </LivestreamProvider>
    </StreamplaceProvider>
  );
}
