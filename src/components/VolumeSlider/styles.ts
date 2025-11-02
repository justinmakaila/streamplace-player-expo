import { zero } from "@streamplace/components";
import { StyleSheet } from "react-native";

const { layout, p } = zero;

export default StyleSheet.create({
  container: StyleSheet.flatten([
    layout.flex.row,
    layout.flex.alignCenter,
    { height: 50 },
  ]),
  muteButton: StyleSheet.flatten([p[2], { marginRight: 8 }]),
  sliderRoot: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    flex: 1,
    width: 200,
    height: 20,
  },
  sliderContainer: {
    height: 30,
  },
  sliderTrack: {
    flexGrow: 1,
    height: 30,
    position: "relative",
    flex: 1,
  },
  sliderRange: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 999,
    height: 3,
    flex: 1,
    width: "100%",
    transform: [{ translateY: 14 }],
  },
  sliderThumb: {
    position: "absolute",
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "white",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    transform: [{ translateX: -8 }, { translateY: 7 }],
  },
});
