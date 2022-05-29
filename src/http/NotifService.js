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

  const createDefaultChannels = () => {
    PushNotification.createChannel(
      {
        channelId: 'default-channel-id', // (required)
        channelName: `Default channel`, // (required)
        channelDescription: 'A default channel', // (optional) default: undefined.
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      created =>
        console.log(`createChannel 'default-channel-id' returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  };

  const showNotification = (id, title, message, data = {}, options = {}) => {
    PushNotification.localNotification({
      ..._buildAndroidNotification(id),
      channelId: 'default-channel-id',
      title: 'Local Notification', // (optional)
      message: 'My Notification Message', // (required)
    });
  };

  const cancelAllLocalNotification = () => {
    PushNotification.cancelAllLocalNotifications();
  };

  const unregister = () => {
    PushNotification.unregister();
  };

  return {
    configure,
    createDefaultChannels,
    showNotification,
    cancelAllLocalNotification,
    unregister,
  };
};

export default NotifService;
