/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry, LogBox} from 'react-native';
import App from './src/App';
import messaging from '@react-native-firebase/messaging';
import {name as appName} from './app.json';

LogBox.ignoreLogs(['Remote debugger']);

// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Message handled in the background!', remoteMessage);
// });

AppRegistry.registerComponent(appName, () => App);
