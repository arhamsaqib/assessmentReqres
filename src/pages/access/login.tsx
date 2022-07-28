import React, { useState } from "react";
import { View, StyleSheet, Text, Switch } from "react-native";
import { HeadCard } from "../../components/headcard";
import { MyButton } from "../../components/mybutton";
import { MyText } from "../../components/mytext";
import { MyTextInput } from "../../components/mytextinput";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";

export const Login = () => {
  const [securePassword, setSecurePassword]: any = useState(true);
  return (
    <View style={styles.main}>
      <HeadCard />
      <View style={{ marginTop: 40 }} />
      <View style={{ width: "80%" }}>
        <MyText style={styles.fieldName}>EMAIL</MyText>
        <MyTextInput placeholder="Enter your email" />
        <View style={{ marginTop: 30 }} />
        <MyText style={styles.fieldName}>PASSWORD</MyText>
        <MyTextInput placeholder="Enter your password" secureTextEntry={securePassword} value={"123"} />
        <View style={styles.switchContainer}>
          <MyText style={styles.switchtext}>Hide Password</MyText>
          <Switch value={securePassword} onChange={() => setSecurePassword(!securePassword)} />
        </View>
        <View style={{ marginTop: 20 }} />
      </View>
      <View style={{ width: "50%" }}>
        <MyButton title="Sign in" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  switchContainer: {
    marginVertical: 5,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  switchtext: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: 10,
    marginRight: 10,
  },
  fieldName: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: 12,
  },
});
