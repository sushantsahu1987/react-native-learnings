import React from "react";
import { View, Text, StyleSheet, Button, Modal } from "react-native";

function Settings(props) {
  const addAccountPage = () => {
    console.log("settings");
    props.navigation.navigate("AddAccountPage");
  };

  const changePasswordPage = () => {
    console.log("add entry");
    props.navigation.navigate("ChangePasswordPage");
  };

  const cancelNavigation = () => {
    console.log("add entry");
    props.navigation.goBack();
  };

  return (
    <Modal 
      animationType="fade" transparent visible>
      <View
        style={{
          margin: 40,
          width: "50%",
        }}
      >
        <Text>Settings</Text>
        <View>
          <Button title="Add new Account" onPress={addAccountPage} />
          <Button title="Change Password" onPress={changePasswordPage} />
          <Button title="Cancel" onPress={cancelNavigation} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E7E5DF",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  row: {
    marginTop: 40,
    justifyContent: "space-between"
  }
});

export default Settings;
