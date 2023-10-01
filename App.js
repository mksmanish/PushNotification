import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  requestUserPermission,
  notificationListener,
} from './src/Utils/notificationService';
import ForgroundHandler from './src/Utils/foregroundService';
import Home from './src/Screens/Home';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);

  return (
    <View>
      <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
