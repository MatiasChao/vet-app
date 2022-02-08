import React, { useRef } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import Toast from "react-native-easy-toast";
import RegisterForm from "../../components/account/RegisterForm";
import { useNavigation } from "@react-navigation/native";

export default function TypeUser() {
  const toastRef = useRef();
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.buttonContainer}>
        <Image
          source={require("../../../assets/appet.jpeg")}
          resizeMode="contain"
          style={styles.logo}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("register")}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>
            Registrarme cómo Veterinaria
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("register")}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Registrarme cómo Usuario</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: 150,
    marginBottom: 40
  },
  viewForm: {
    marginRight: 40,
    marginLeft: 40,
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
