import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import notifee, {AndroidImportance} from '@notifee/react-native';
import navigationService from '../Components/navigationService';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    generateFcmToken();
  }
}

const generateFcmToken = async () => {
  let fcmtoken = await AsyncStorage.getItem('fcmtoken');
  console.log('fcm token old onne ', fcmtoken);
  if (fcmtoken == null) {
    const fcmtoken = await messaging().getToken();
    console.log('new generated FCM token', fcmtoken);
    try {
      if (fcmtoken) {
        console.log('new generated FCM token', fcmtoken);
        await AsyncStorage.setItem('fcmtoken', fcmtoken);
      }
    } catch (error) {
      console.log('error in generating fcm token', error);
    }
  }
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

export const notificationListener = async () => {
  const subscribe = messaging().onMessage(async remoteMessage => {
    // onDisplayNotification(remoteMessage);
    // navigationService.navigate('Details');
  });

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    setTimeout(() => {
      navigationService.navigate('Details');
    }, 1200);
  });

  // messaging().onMessage(async remoteMessage => {
  //   console.log('getting  foreground', remoteMessage);
  // });
  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
};
