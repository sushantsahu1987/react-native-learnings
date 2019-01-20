import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {Constants, Location, Permissions} from 'expo';

export default class App extends React.Component {

  state = {
    location: null,
    error: null
  }

  componentWillMount() {
    console.log('component will mount');
    if(Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        error: 'This will not work on the android emulator'
      })
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {

    let {status} = await Permissions.askAsync(Permissions.LOCATION);
    console.log(status);
    if(status != 'granted') {
      this.setState({
        error: 'Permission to access location was denied'
      })
    }
    let location = await Location.getCurrentPositionAsync();
    console.log(`location ${location}`);
    this.setState({location});

  }

  render() {

    let text = 'Waiting...';
    if(this.state.error) {
      text = this.state.error;
    }else if(this.state.location) {
      text = JSON.stringify(this.state.location);
    }




    return (      
      <View style={styles.container}>
        <Text style={styles.para}>
            {text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  },
  para: {
    margin: 24,
    fontSize: 18,
    textAlign:'center',
  }
});
