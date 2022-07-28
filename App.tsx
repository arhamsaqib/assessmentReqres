import React from "react";
import { Login } from "./src/pages/access/login";
import { useFonts } from "expo-font";
import { AppLoadingPage } from "./src/pages/loading/loadingpage";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./src/assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./src/assets/fonts/Poppins/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoadingPage />;
  }

  return <Login />;
}
