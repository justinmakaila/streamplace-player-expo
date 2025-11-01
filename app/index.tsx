import Stream from "@/components/Stream";
import {
  LivestreamProvider,
  StreamplaceProvider,
  useMuted,
  useSetMuted,
  useSetVolume,
  useVolume,
} from "@streamplace/components";

export function StreamInner() {
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

export default function Index() {
  return (
    <StreamplaceProvider url={process.env.EXPO_PUBLIC_STREAMPLACE_NODE_URL!}>
      <LivestreamProvider src={process.env.EXPO_PUBLIC_STREAMPLACE_SOURCE!}>
        <StreamInner />
      </LivestreamProvider>
    </StreamplaceProvider>
  );
}
