import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import BrowserAppContainer from './BrowserAppContainer';

import routeConfigMap from './routeConfigMap';
import stackConfig from './stackConfig';

const DefaultNavigator = createStackNavigator(routeConfigMap, stackConfig);
// eslint-disable-next-line
const AppNavigator = Platform.OS === 'web' ? BrowserAppContainer(DefaultNavigator) : DefaultNavigator;

export default DefaultNavigator;

