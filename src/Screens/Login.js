import {
  StyleSheet,
  TextInput,
  View,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Alert,
} from "react-native";
import React from "react";
import Input from "../Components/Input";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from "../Firebase/config";

const Login = ({navigation}) => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const auth = getAuth(app);

  const createAccount = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Registrado con éxito');
    } catch (e) {
      alert(e)
    }
  }
  
  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.replace('Home');
    } catch (e) {
      Alert.alert('Credenciales inválidas');
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View>
            <Input name="user">
              <TextInput
                placeholder="Email"
                onChangeText={(e) => setEmail(e)}
                style={{ flex: 1, height: 35, paddingLeft: 7 }}
              />
            </Input>

            <Input name="key">
              <TextInput
                placeholder="Password"
                onChangeText={(e) => setPassword(e)}
                style={{ flex: 1, height: 35, paddingLeft: 7 }}
                textContentType="password"
                secureTextEntry={true}
              />
            </Input>
          </View>

          <View style={styles.containerBtn}>
            <Button title="Entrar" onPress={signIn} />
            <Button title="Registrarse" onPress={createAccount} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerBtn: {
    justifyContent: 'space-between',
    marginTop: 20,
    height: 100,
    // backgroundColor: "red",
  },
});
