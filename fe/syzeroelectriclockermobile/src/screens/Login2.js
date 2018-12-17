import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function Login2(props) {
  const previous = () => {
    console.log("previous");
    props.navigation.goBack();
  };

  const next = () => {
    console.log("next");
    props.navigation.navigate("HomePage");
  };

  return (
    <View style={styles.container}>
      <Text>Login 2</Text>
      <View style={styles.row}>
        <Button title="Previous" onPress={previous} />
        <Button title="Next" onPress={next} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default Login2;
