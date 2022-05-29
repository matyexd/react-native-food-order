import PushNotification, {Importance} from 'react-native-push-notification';
import {useEffect} from 'react';

const NotifService = () => {
  const configure = () => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('[NotificationManager] TOKEN: ', token);
      },
      onNotification: function (notification) {
        console.log('[NotificationManager] NOTIFICATION: ', notification);
      },
    });
  };

  const _buildAndroidNotification = (
    id,
    title,
    message,
    data = {},
    options = {},
  ) => {
    return {
      id: id,
      autoCancel: true,
      bigText: message || '',
      subText: title || '',
      vibrate: options.vibrate || false,
    };
  };
};

export default NotifService;
