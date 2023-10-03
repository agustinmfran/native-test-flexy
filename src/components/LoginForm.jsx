import { useState } from "react";
import {
  Text,
  View,
  Pressable,
  TextInput,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import { registroSchema, initialValues } from "./FormValidation";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";

function LoginForm() {
  const [shown, setShown] = useState(false);
  const [image, setImage] = useState(null);

  const switchShown = function (e) {
    e.preventDefault();
    setShown(!shown);
  };

  const onSubmit = (values) => {
    console.log(values);
    Alert.alert("Usuario Registrado:  " + JSON.stringify(values));
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log(image);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={registroSchema}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        setFieldValue,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.body}>
          <View style={styles.profile}>
            <View style={{ width: "15%" }}>
              <Image source={require("../../assets/images/icono.png")} />
            </View>
            <View style={styles.profilePicker}>
              <TouchableOpacity
                onPress={() => {
                  pickImage();
                  setFieldValue("file", image);
                }}
              >
                <Text style={styles.profileTitle}>Subí tu foto de perfil</Text>
              </TouchableOpacity>
            </View>
          </View>
          {errors.file && (
            <View style={{ marginTop: -4 }}>
              <Text style={styles.error}>{errors.file}</Text>
            </View>
          )}
          <TextInput
            value={values.nombre}
            style={styles.input}
            placeholder="Nombre y Apellido"
            placeholderTextColor="rgba(0, 9, 41, 0.5)"
            onChangeText={handleChange("nombre")}
            onBlur={handleBlur("nombre")}
          ></TextInput>
          {touched.nombre && errors.nombre && (
            <View style={{ marginTop: -4 }}>
              <Text style={styles.error}>{errors.nombre}</Text>
            </View>
          )}
          <TextInput
            value={values.tel}
            style={styles.input}
            placeholder="+54 9 221 000 0000"
            placeholderTextColor="rgba(0, 9, 41, 0.5)"
            keyboardType="numeric"
            onChangeText={handleChange("tel")}
            onBlur={handleBlur("tel")}
          ></TextInput>
          {touched.tel && errors.tel && (
            <View style={{ marginTop: -4 }}>
              <Text style={styles.error}>{errors.tel}</Text>
            </View>
          )}
          <TextInput
            value={values.email}
            style={styles.input}
            placeholder="hola@tuemail.com"
            placeholderTextColor="rgba(0, 9, 41, 0.5)"
            autoCapitalize={"none"}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
          ></TextInput>
          {touched.email && errors.email && (
            <View style={{ marginTop: -4 }}>
              <Text style={styles.error}>{errors.email}</Text>
            </View>
          )}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TextInput
              value={values.password}
              secureTextEntry={shown ? false : true}
              style={styles.passInput}
              placeholder="Ingresá tu contraseña"
              placeholderTextColor="rgba(0, 9, 41, 0.5)"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
            ></TextInput>
            <View style={styles.eyeContainer}>
              <Pressable onPress={switchShown}>
                <Image
                  source={
                    shown
                      ? require("../../assets/images/eye-closed.png")
                      : require("../../assets/images/eye.png")
                  }
                />
              </Pressable>
            </View>
          </View>
          {touched.password && errors.password ? (
            <View style={{ marginTop: -4 }}>
              <Text style={styles.error}>{errors.password}</Text>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => Linking.openURL("http://flexy.com.ar")}
            >
              <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
          )}
          <LinearGradient
            style={styles.gradient}
            colors={["#6941c6", "#53389e"]}
          >
            <TouchableOpacity onPress={handleSubmit}>
              <Text style={styles.registerText}>Registrate</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "55%",
    marginTop: 32,
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
  },
  profilePicker: {
    width: "80%",
    display: "flex",
    alignContent: "left",
    justifyContent: "center",
  },
  profileTitle: {
    color: "#000929",
    fontFamily: "PlusJakartaSans-SemiBold",
    fontSize: 16,
  },
  input: {
    width: "90%",
    backgroundColor: "#f7f7fd",
    borderColor: "#ebebf0",
    height: 48,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 2,
    paddingLeft: 12,
  },
  passInput: {
    width: "75%",
    backgroundColor: "#f7f7fd",
    borderColor: "#ebebf0",
    height: 48,
    fontSize: 16,
    borderRightWidth: 0,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderWidth: 2,
    paddingLeft: 12,
  },
  eyeContainer: {
    width: "15%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 2,
    backgroundColor: "#f7f7fd",
    borderColor: "#ebebf0",
  },
  error: {
    color: "#6c727f",
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Regular",
  },
  forgot: {
    color: "#7065f0",
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Medium",
  },
  gradient: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: "90%",
    height: 48,
  },
  registerText: {
    color: "white",
    fontSize: 16,
    fontFamily: "PlusJakartaSans-SemiBold",
  },
});

export default LoginForm;
