/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AppNavigator from './js/navigator/AppNavigator';
import {name as appName} from './app.json';
import WelcomePage from './js/page/WelcomePage';

AppRegistry.registerComponent(appName, () => AppNavigator);
