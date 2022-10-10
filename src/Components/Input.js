import { StyleSheet, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Input = (props) => {
  return (
    <View style={styles.container}>
      <Feather name={props.name} size={25} />
      {props.children}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    width: "70%",
    height: 50,
    marginVertical: 10
  },
});
