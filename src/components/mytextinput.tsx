import React, { useState } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/fonts";

export const MyTextInput = (props: TextInputProps) => {
  const { onBlur, onFocus, style, ...rest } = props;

  const [color, setColor] = useState(COLORS.black);

  function myOnFocus() {
    setColor(COLORS.primary);
  }
  function myOnBlur() {
    setColor(COLORS.black);
  }

  return (
    <TextInput style={[styles.main, { borderColor: color }, style]} onFocus={myOnFocus} onBlur={myOnBlur} {...rest} />
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: 55,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 13,
  },
});
