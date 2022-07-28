import React from "react";
import { ActivityIndicator, View } from "react-native";
import { COLORS } from "../../constants/colors";

export const AppLoadingPage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator color={COLORS.haze} />
    </View>
  );
};
