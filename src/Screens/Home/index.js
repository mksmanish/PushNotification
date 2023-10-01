// import {Pressable, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import notifee, {AndroidImportance} from '@notifee/react-native';
// import {useNavigation} from '@react-navigation/native';

// const Home = () => {
//   const navigation = useNavigation();
//   //   async function onDisplayNotification() {
//   //     console.log('in the function');
//   //     // Request permissions (required for iOS)

//   //     //  await notifee.requestPermission();

//   //     // Create a channel (required for Android)
//   //     const channelId = await notifee.createChannel({
//   //       id: 'default3',
//   //       name: 'Default Channel 3',
//   //       sound: 'default',
//   //       importance: AndroidImportance.HIGH,
//   //     });

//   //     // Display a notification
//   //     await notifee.displayNotification({
//   //       title: 'Notification Title',
//   //       body: 'Main body content of the notification',
//   //       android: {
//   //         channelId,
//   //         //  smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
//   //         // pressAction is needed if you want the notification to open the app when pressed
//   //         pressAction: {
//   //           id: 'default',
//   //         },
//   //       },
//   //     });
//   //   }

//   //   async function onDisplayNotification() {
//   //     const channelId = await notifee.createChannel({
//   //       id: 'default5',
//   //       name: 'Default Channel 5',
//   //       sound: 'default',
//   //       importance: AndroidImportance.HIGH,
//   //     });

//   //     notifee.displayNotification({
//   //       title:
//   //         '<p style="color: #4caf50;"><b>Styled HTMLTitle</span></p></b></p> &#128576;',
//   //       subtitle: '&#129395;',
//   //       body: 'The <p style="text-decoration: line-through">body can</p> also be <p style="color: #ffffff; background-color: #9c27b0"><i>styled too</i></p> &#127881;!',
//   //       android: {
//   //         channelId,
//   //         color: '#4caf50',
//   //         actions: [
//   //           {
//   //             title: '<b>Dance</b> &#128111;',
//   //             pressAction: {id: 'dance'},
//   //           },
//   //           {
//   //             title: '<p style="color: #f44336;"><b>Cry</b> &#128557;</p>',
//   //             pressAction: {id: 'cry'},
//   //           },
//   //         ],
//   //       },
//   //     });
//   //   }

//   //   const onpressme = () => {
//   //     console.log('clicked onmes');
//   //     onDisplayNotification();
//   //   };
//   return (
//     <View>
//       <Text>Home</Text>
//       <Pressable
//         style={{
//           width: '50%',
//           justifyContent: 'center',
//           alignItems: 'center',
//           alignSelf: 'center',
//           backgroundColor: 'red',
//           padding: 20,
//         }}>
//         <Text>Press ME</Text>
//       </Pressable>
//       <Pressable
//         onPress={() => navigation.navigate('Details')}
//         style={{
//           width: '50%',
//           justifyContent: 'center',
//           alignItems: 'center',
//           alignSelf: 'center',
//           backgroundColor: 'red',
//           padding: 20,
//           marginVertical: 20,
//         }}>
//         <Text>Details</Text>
//       </Pressable>
//     </View>
//   );
// };

// export default Home;
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
} from 'react-native';

// create a component
const Home = ({navigation}) => {
  const [usersData, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const headers = {'app-id': '6186158c7f5fa01a0b0240f4'};
    try {
      const res = await axios['get']('https://dummyapi.io/data/v1/user', {
        headers,
      });
      console.log('res==>>>>', res);
      setUsers(res.data.data);
    } catch (error) {
      console.log('erro riased', error);
      alert('error');
    }
  };
  const onPressItem = item => {
    navigation.navigate('Details', {userId: item.id});
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center'}}
        activeOpacity={0.8}
        onPress={() => onPressItem(item)}>
        <Image style={styles.imgStyle} source={{uri: item?.picture}} />
        <Text style={styles.nameText}>
          {item?.firstName} {item?.lastName}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{marginHorizontal: 24}}>
        <Text style={{...styles.nameText, alignSelf: 'center'}}>
          All Users{' '}
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={usersData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={{marginBottom: 40}} />}
          ListHeaderComponent={() => <View style={{height: 10}} />}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default Home;
