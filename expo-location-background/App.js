import React from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Location, TaskManager, Constants, Permissions} from 'expo'

const LOCATION_TASK_NAME = 'background-location-task';
const API = 'https://jsonplaceholder.typicode.com/todos/1';

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

  componentWillUnmount(){
    console.log('component will unmount !');
    TaskManager.unregisterAllTasksAsync()
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

  onPress = async () => {
     console.log('on press: ');
     await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
       accuracy: Location.Accuracy.Balanced
     })    
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
        <TouchableOpacity onPress={this.onPress}>
            <Text>Enable background location</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

TaskManager.defineTask(LOCATION_TASK_NAME, ({data, error})=> {

  console.log('task :');

  if(error) {
    console.log(error);
    return;
  }

  if(data) {
    const {locations} = data;
    console.log('task manager: ');
    console.log(data);
    console.log(locations);

    fetch(API)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(e => console.log(e));
  }

});

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
