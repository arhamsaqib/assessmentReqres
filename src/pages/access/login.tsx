import React, { useState } from "react";
import { View, StyleSheet, Switch } from "react-native";
import { loginUser } from "../../api/login";
import { ErrorText, SuccessText } from "../../components/errortext";
import { HeadCard } from "../../components/headcard";
import { MyButton } from "../../components/mybutton";
import { MyText } from "../../components/mytext";
import { MyTextInput } from "../../components/mytextinput";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
import { validateEmail } from "../../helpers/validateEmail";
import Toast from "react-native-toast-message";

export const Login = () => {
  const [securePassword, setSecurePassword]: any = useState(true);
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");
  const [emailError, setEmailError]: any = useState(false);
  const [emailSuccess, setEmailSuccess]: any = useState(false);
  const [loader, setLoader]: any = useState(false);

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

  async function onSubmit() {
    if (emailSuccess) {
      const data = {
        email: email,
        password: password,
      };
      setLoader(true);
      const res = await loginUser(data).finally(() => setLoader(false));
      console.log(res, "Response");
      if (res.token) {
        setEmail("");
        setPassword("");
        setEmailSuccess(false);
        Toast.show({
          type: "success",
          text1: "Logged in successfully",
          text2: "Token: " + res.token,
        });
      }
      if (res.error) {
        Toast.show({
          type: "error",
          text1: "Logged in unsuccessful",
          text2: "Error: " + res.error,
        });
      }
    }
  }

  return (
    <>
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
      <Toast position="bottom" />
    </>
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
