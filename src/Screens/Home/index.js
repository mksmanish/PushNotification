import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import notifee, {AndroidImportance} from '@notifee/react-native';

const Home = () => {
  //   async function onDisplayNotification() {
  //     console.log('in the function');
  //     // Request permissions (required for iOS)

  //     //  await notifee.requestPermission();

  //     // Create a channel (required for Android)
  //     const channelId = await notifee.createChannel({
  //       id: 'default3',
  //       name: 'Default Channel 3',
  //       sound: 'default',
  //       importance: AndroidImportance.HIGH,
  //     });

  //     // Display a notification
  //     await notifee.displayNotification({
  //       title: 'Notification Title',
  //       body: 'Main body content of the notification',
  //       android: {
  //         channelId,
  //         //  smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
  //         // pressAction is needed if you want the notification to open the app when pressed
  //         pressAction: {
  //           id: 'default',
  //         },
  //       },
  //     });
  //   }

  //   async function onDisplayNotification() {
  //     const channelId = await notifee.createChannel({
  //       id: 'default5',
  //       name: 'Default Channel 5',
  //       sound: 'default',
  //       importance: AndroidImportance.HIGH,
  //     });

  //     notifee.displayNotification({
  //       title:
  //         '<p style="color: #4caf50;"><b>Styled HTMLTitle</span></p></b></p> &#128576;',
  //       subtitle: '&#129395;',
  //       body: 'The <p style="text-decoration: line-through">body can</p> also be <p style="color: #ffffff; background-color: #9c27b0"><i>styled too</i></p> &#127881;!',
  //       android: {
  //         channelId,
  //         color: '#4caf50',
  //         actions: [
  //           {
  //             title: '<b>Dance</b> &#128111;',
  //             pressAction: {id: 'dance'},
  //           },
  //           {
  //             title: '<p style="color: #f44336;"><b>Cry</b> &#128557;</p>',
  //             pressAction: {id: 'cry'},
  //           },
  //         ],
  //       },
  //     });
  //   }

  //   const onpressme = () => {
  //     console.log('clicked onmes');
  //     onDisplayNotification();
  //   };
  return (
    <View>
      <Text>Home</Text>
      <Pressable
        style={{
          width: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: 'red',
          padding: 20,
        }}>
        <Text>Press ME</Text>
      </Pressable>
    </View>
  );
};

export default Home;
