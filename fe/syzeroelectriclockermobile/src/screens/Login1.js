import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function Login1(props) {

  const previous = () => {
    console.log("previous");
    props.navigate.goBack();
  }

  const next = () => {
    console.log("next");
    console.log(props);
    props.navigation.navigate('Login2Page');
  }

  return (
    <View style={styles.container}>
      <Text>Login 1</Text>
      <View style={styles.row}>
        {/* <Button title="Previous" onPress={previous} /> */}
        <Button title="Next" onPress={next} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E7E5DF"
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default Login1;
