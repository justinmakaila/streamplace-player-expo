import { Player, useTheme } from "@streamplace/components";
import { View } from "react-native";

export default function Stream() {
  const {
    theme: {
      colors: { background },
    },
  } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: background,
      }}
    >
      <Player src={process.env.EXPO_PUBLIC_STREAMPLACE_SOURCE!} />
    </View>
  );
}
