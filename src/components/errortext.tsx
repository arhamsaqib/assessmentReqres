import React from "react";
import { StyleSheet, TextProps, Text } from "react-native";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/fonts";

export const ErrorText = (props: TextProps) => {
  const { style, children, ...rest } = props;
  return (
    <Text {...rest} style={[styles.main, style]}>
      {children}
    </Text>
  );
};
export const SuccessText = (props: TextProps) => {
  const { style, children, ...rest } = props;
  return (
    <Text {...rest} style={[styles.success, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  main: {
    fontFamily: FONTS.POPPINS_BOLD,
    color: COLORS.danger,
    fontSize: 11,
  },
  success: {
    fontFamily: FONTS.POPPINS_BOLD,
    color: COLORS.success,
    fontSize: 11,
  },
});
