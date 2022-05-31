import messaging from '@react-native-firebase/messaging';
import {retrieveUserSession, storeUserSession} from '../storage';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    GetFCMToken();
  }
}

async function GetFCMToken() {
  let fcmtoken = await retrieveUserSession('fcmtoken');
  console.log('old token', fcmtoken);
  if (!fcmtoken) {
    try {
      const fcmtoken = await messaging().getToken();
      if (fcmtoken) {
        console.log('new token', fcmtoken);
        storeUserSession('fcmtoken', fcmtoken);
      }
    } catch (e) {
      console.log('error in fcmtoken', e);
    }
  }
}

export const NotificationListner = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

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

  // messaging().setBackgroundMessageHandler(async remoteMessage => {
  //   console.log('Message handled in the background!', remoteMessage);
  // });

  messaging().onMessage(async remoteMessage => {
    console.log('notification on froground state.........', remoteMessage);
  });
};
