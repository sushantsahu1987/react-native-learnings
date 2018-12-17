import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Modal } from "react-native";

function HomePage(props) {

  const [settings, showsettings] = useState(false);

  const settingsNavigation = () => {
    console.log("settings");
    // props.navigation.navigate("SettingsPage");
    showsettings(!settings);
  };

  const addEntryNavigation = () => {
    console.log("add entry");
    props.navigation.navigate("AddEntryPage");
  };

  const editEntryNavigation = () => {
    console.log("settings");
    props.navigation.navigate("EditEntryPage");
  };

  const cancelEntryNavigation = () => {
    console.log("add entry");
    props.navigation.navigate("DeleteEntryPage");
  };

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>

      <Modal animationType="fade" transparent visible={settings}>
        <View
          style={{
            padding: 40,
            marginTop: 100,
            marginLeft: 40,
            marginRight: 40,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#BCAC9B"
          }}
        >
          <Text>Settings</Text>
          <View>
            <Button title="Add new Account" />
            <Button title="Change Password" />
            <Button title="Cancel" />
          </View>
        </View>
      </Modal>

      <View style={styles.row}>
        <Button title="Settings" onPress={settingsNavigation} />
        <Button title="Add Entry" onPress={addEntryNavigation} />
        <Button title="Edit Entry" onPress={editEntryNavigation} />
        <Button title="Cancel Entry" onPress={cancelEntryNavigation} />
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
    justifyContent: "space-between"
  }
});

export default HomePage;
