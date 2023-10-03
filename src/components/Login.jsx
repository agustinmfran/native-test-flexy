import {
  Text,
  View,
  Linking,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import LoginForm from "./LoginForm";

SplashScreen.preventAutoHideAsync();

function Login() {
  const [fontsLoaded] = useFonts({
    "PlusJakartaSans-Regular": require("../../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "PlusJakartaSans-Medium": require("../../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "PlusJakartaSans-SemiBold": require("../../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "PlusJakartaSans-Bold": require("../../assets/fonts/PlusJakartaSans-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View onLayout={onLayoutRootView} style={styles.body}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subtitle}>Convertite ahora en un agente Flexy.</Text>
      <LoginForm />
      <View style={styles.linkContainer}>
        <Text style={styles.text}>¿Ya ténes una cuenta?</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("http://flexy.com.ar")}
        >
          <Text style={styles.link}>Iniciá sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
  },
  title: {
    color: "#545f71",
    fontSize: 32,
    marginTop: 24,
    fontFamily: "PlusJakartaSans-Bold",
  },
  subtitle: {
    color: "#545f71",
    fontSize: 16,
    opacity: 0.5,
    fontFamily: "PlusJakartaSans-SemiBold",
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 24,
    fontSize: 14,
    color: "#6c727f",
    fontFamily: "PlusJakartaSans-Regular",
  },
  text: {
    fontSize: 14,
    color: "#6c727f",
    fontFamily: "PlusJakartaSans-Regular",
  },
  link: {
    color: "#000929",
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Bold",
    marginLeft: 4,
  },
});

export default Login;
