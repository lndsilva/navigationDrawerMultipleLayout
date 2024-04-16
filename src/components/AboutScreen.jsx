import { useLayoutEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function AboutScreen({ navigation, route }) {
  const { name } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button
        title="Alterar o nome"
        onPress={() => navigation.setParams({ name: "Nome novo" })}
      />
      <Button
        title="Voltar com os dados"
        onPress={() => {
          navigation.navigate("Home", { result: "Dados" });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
