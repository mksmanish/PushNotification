import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  requestUserPermission,
  notificationListener,
} from './src/Utils/notificationService';
import ForgroundHandler from './src/Utils/foregroundService';
import Home from './src/Screens/Home';
import Navigator from './src/Components/Navigator';
import {PermissionsAndroid} from 'react-native';

const App = () => {
  // useEffect(() => {
  //   if (Platform.OS === 'android') {
  //     PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
  //     )
  //       .then(res => {
  //         console.log('result', res);
  //         if (!!res && res === 'granted') {
  //           requestUserPermission();
  //           notificationListener();
  //         }
  //       })
  //       .catch(error => {
  //         console.log('getting the', error);
  //       });
  //   } else {
  //   }
  // }, []);

  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);

  return <Navigator />;
};

export default App;

const styles = StyleSheet.create({});
