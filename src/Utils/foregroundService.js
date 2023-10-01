import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import {Platform} from 'react-native';
import notifee, {AndroidImportance} from '@notifee/react-native';

const ForgroundHandler = () => {
  useEffect(() => {
    const subscribe = messaging().onMessage(async remoteMessage => {
      onDisplayNotification(remoteMessage);
      // console.log('getting  foreground', remoteMessage);
      // const {notification, messageId} = remoteMessage;
      // if (Platform.OS === 'ios') {
      //   PushNotificationIOS.addNotificationRequest({
      //     id: 'asdasdasd',
      //     body: 'this is body dat',
      //     title: 'this is tile',
      //     sound: 'default',
      //   });
      // } else {
      //   PushNotification.localNotification({
      //     channelId: 'your-channel-id',
      //     id: messageId,
      //     body: notification.body,
      //     title: notification.title,
      //     soundName: 'default',
      //     vibrate: true,
      //     playSound: true,
      //   });
      // }

      return subscribe;
    });
  }, []);
  return null;
};

async function onDisplayNotification(remoteMessage) {
  const {notification, messageId} = remoteMessage;
  const channelId = await notifee.createChannel({
    id: 'default6',
    name: 'Default Channel 6',
    sound: 'default',
    importance: AndroidImportance.HIGH,
  });

  notifee.displayNotification({
    title: notification.title,
    subtitle: '&#129395;',
    body: notification.body,
    android: {
      channelId,
      color: '#4caf50',
      actions: [
        {
          title: '<b>Dance</b> &#128111;',
          pressAction: {id: 'dance'},
        },
        {
          title: '<p style="color: #f44336;"><b>Cry</b> &#128557;</p>',
          pressAction: {id: 'cry'},
        },
      ],
    },
  });
}

export default ForgroundHandler;
