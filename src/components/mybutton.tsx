import React from "react";
import { ActivityIndicator, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/fonts";
import { MyText } from "./mytext";

interface Props extends TouchableOpacityProps {
  title?: string;
  loading?: boolean;
}

export const MyButton = (props: Props) => {
  const { title, style, loading, disabled, ...rest } = props;

  return (
    <TouchableOpacity disabled={disabled} {...rest} style={[styles.main, disabled && styles.disabled, style]}>
      <MyText style={styles.txt}>{title ?? "Button"}</MyText>
      {loading && <ActivityIndicator color={COLORS.white} style={{ marginLeft: 10 }} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 46,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    flexDirection: "row",
  },
  txt: {
    fontFamily: FONTS.POPPINS_BOLD,
    color: COLORS.white,
    fontSize: 15,
  },
  disabled: {
    backgroundColor: COLORS.grey,
  },
});
