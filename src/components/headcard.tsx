import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/fonts";
import { MyText } from "./mytext";

interface Props {
  pageTitle?: string;
}

export const HeadCard = (props: Props) => {
  return (
    <View style={styles.main}>
      <SafeAreaView style={styles.inner}>
        <MyText style={styles.text}>LOGIN</MyText>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.primary,
    width: "100%",
    height: 150,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
  },
  inner: {
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    height: "90%",
    justifyContent: "flex-end",
  },
  text: {
    color: COLORS.white,
    fontSize: 25,
    fontFamily: FONTS.POPPINS_BOLD,
  },
});
