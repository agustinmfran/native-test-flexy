import React from "react";
import { View, Image, StyleSheet } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <View style={styles.menu}>
          <Image source={require("../../assets/images/logo.png")} />
          <View style={styles.menuIcon}>
            <Image source={require("../../assets/images/menu.png")} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "flex-end",
    marginTop: 24,
  },
  logo: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    borderBottomWidth: 1,
    marginTop: 40,
    borderBottomColor: "#f0effb",
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 8,
  },
  menuIcon: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 4,
    marginLeft: -20,
  },
});

export default Header;
