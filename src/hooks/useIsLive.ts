import { useSegment } from "@streamplace/components";
import { useMemo } from "react";

const IS_LIVE_DURATION_MS = 10 * 1000;

/**
 * Determines if the most recent segment has started within the
 * last 10 seconds.
 * @returns True if the stream is live, else false.
 */
export function useIsLive() {
  const segment = useSegment();

  return useMemo(() => {
    const segmentDate = segment?.startTime
      ? new Date(segment.startTime)
      : undefined;

    if (segmentDate) {
      return Date.now() - segmentDate.getTime() <= IS_LIVE_DURATION_MS;
    }

    return false;
  }, [segment]);
}

export default useIsLive;
