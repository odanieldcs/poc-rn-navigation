import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function SignUpScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Cadastro</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
