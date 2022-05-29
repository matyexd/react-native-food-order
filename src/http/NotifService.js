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
      vibration: options.vibration || 300,
      priority: options.priority || 'high',
      importance: options.importance || 'high',
      data: data,
    };
  };

  const showNotification = (id, title, message, data = {}, options = {}) => {
    PushNotification.localNotification({
      ..._buildAndroidNotification(id, title, message, data, options),
      title: title || '',
      message: message || '',
      playSound: options.playSound || false,
      soundName: options.soundName || 'default',
      userInteraction: false,
    });
  };

  const cancelAllLocalNotification = () => {
    PushNotification.cancelAllLocalNotifications();
  };

  const unregister = () => {
    PushNotification.unregister();
  };

  return {configure, showNotification, cancelAllLocalNotification, unregister};
};

export default NotifService;
