import { zero } from "@streamplace/components";
import { StyleSheet } from "react-native";

const { layout, position, h, w } = zero;

export default StyleSheet.create({
  container: StyleSheet.flatten([
    layout.position.absolute,
    h.percent[100],
    w.percent[100],
  ]),
  bottomControlsContainer: StyleSheet.flatten([
    layout.position.absolute,
    position.bottom[0],
    w.percent[100],
    {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      paddingHorizontal: 16,
      paddingVertical: 2,
      paddingBottom: 2,
    },
  ]),
});
