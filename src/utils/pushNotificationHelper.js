import messaging from '@react-native-firebase/messaging';
import {retrieveUserSession, storeUserSession} from '../storage';
import {
  attachTokenOnServer,
  getToken,
  getTokenFromServer,
} from '../http/notifService';

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
  try {
    // смотрим, есть ли токен на сервере
    let dataTokenFromServer = await getTokenFromServer();
    // получаем токен с локального хранилища
    let fcmtoken = await retrieveUserSession('fcmtoken');
    fcmtoken = JSON.parse(fcmtoken);

    let fcmToken = await messaging().getToken();
    if (
      (!dataTokenFromServer.data.length && !fcmtoken) ||
      (dataTokenFromServer.data.length &&
        !fcmtoken &&
        !dataTokenFromServer.data.find(item => item.fcm_token === fcmToken)) ||
      (dataTokenFromServer.data.length &&
        fcmtoken &&
        !dataTokenFromServer.data.find(
          item =>
            item.id === fcmtoken.fcmTokenId &&
            item.fcm_token === fcmtoken.fcmToken,
        ))
    ) {
      let newDataTokenFromServer = await attachTokenOnServer(fcmToken);
      storeUserSession(
        'fcmtoken',
        JSON.stringify({
          fcmToken: fcmToken,
          fcmTokenId: newDataTokenFromServer.data.id,
        }),
      );
    } else if (!dataTokenFromServer.data.length && fcmtoken) {
      await attachTokenOnServer(fcmtoken.fcmToken);
      storeUserSession(
        'fcmtoken',
        JSON.stringify({
          fcmToken: fcmtoken.fcmToken,
          fcmTokenId: fcmtoken.fcmTokenId,
        }),
      );
    } else if (
      dataTokenFromServer.data.length &&
      dataTokenFromServer.data.find(item => item.fcm_token === fcmToken)
    ) {
      let tok = dataTokenFromServer.data.find(
        item => item.fcm_token === fcmToken,
      );
      storeUserSession(
        'fcmtoken',
        JSON.stringify({
          fcmToken: tok.fcm_token,
          fcmTokenId: tok.id,
        }),
      );
    }

    console.log('Current fcm data: ', await retrieveUserSession('fcmtoken'));
  } catch (e) {
    console.log('error in fcmtoken', e);
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

  messaging().onMessage(async remoteMessage => {
    console.log('notification on froground state.........', remoteMessage);
  });
};
