import React, { useState } from "react";
import { View, StyleSheet, Text, Switch } from "react-native";
import { ErrorText, SuccessText } from "../../components/errortext";
import { HeadCard } from "../../components/headcard";
import { MyButton } from "../../components/mybutton";
import { MyText } from "../../components/mytext";
import { MyTextInput } from "../../components/mytextinput";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";

export const Login = () => {
  const [securePassword, setSecurePassword]: any = useState(true);
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");
  const [emailError, setEmailError]: any = useState(false);
  const [emailSuccess, setEmailSuccess]: any = useState(false);
  const [loader, setLoader]: any = useState(false);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  async function onSubmit() {}

  function disabled() {
    return email.length < 1 || password.length < 1;
  }

  function onChangeEmail(email: string) {
    setEmail(email);
    setEmailError(false);
    setEmailSuccess(false);

    const res = validateEmail(email);
    if (res === null) {
      setEmailError(true);
      return;
    } else {
      setEmailSuccess(true);
    }
  }

  return (
    <View style={styles.main}>
      <HeadCard />
      <View style={{ marginTop: 40 }} />
      <View style={{ width: "80%" }}>
        <MyText style={styles.fieldName}>EMAIL</MyText>
        <MyTextInput
          placeholder="Enter your email"
          autoCapitalize="none"
          onChangeText={onChangeEmail}
          value={email}
          autoCorrect={false}
          keyboardType="email-address"
        />
        {emailSuccess && <SuccessText>{"Valid Email"}</SuccessText>}
        {emailError && <ErrorText>{"Invalid Email"}</ErrorText>}

        <View style={{ marginTop: 30 }} />
        <MyText style={styles.fieldName}>PASSWORD</MyText>
        <MyTextInput
          placeholder="Enter your password"
          secureTextEntry={securePassword}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.switchContainer}>
          <MyText style={styles.switchtext}>Hide Password</MyText>
          <Switch
            value={securePassword}
            onChange={() => setSecurePassword(!securePassword)}
            thumbColor={COLORS.primary}
            trackColor={{ true: COLORS.grey, false: COLORS.white }}
          />
        </View>
        <View style={{ marginTop: 20 }} />
      </View>
      <View style={{ width: "50%" }}>
        <MyButton title="Sign in" onPress={onSubmit} disabled={disabled()} loading={loader} />
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
