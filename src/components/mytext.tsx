import React from "react";
import { StyleSheet, TextProps, Text } from "react-native";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/fonts";

export const MyText = (props: TextProps) => {
  const { style, children, ...rest } = props;
  return (
    <Text {...rest} style={[styles.main, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  main: {
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.black,
  },
});
