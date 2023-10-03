import { View } from "react-native";
import Header from "./src/components/Header.jsx";
import Login from "./src/components/Login.jsx";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header
        style={{
          flex: 1,
        }}
      />
      <Login
        style={{
          flex: 1,
        }}
      />
    </View>
  );
}
