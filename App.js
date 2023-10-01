import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  requestUserPermission,
  notificationListener,
} from './src/Utils/notificationService';
import ForgroundHandler from './src/Utils/foregroundService';
import Home from './src/Screens/Home';
import Navigator from './src/Components/Navigator';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);

  return <Navigator />;
};

export default App;

const styles = StyleSheet.create({});
