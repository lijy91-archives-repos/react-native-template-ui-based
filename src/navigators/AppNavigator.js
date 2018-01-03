import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import BrowserAppContainer from './BrowserAppContainer';

import InitializeScreen from '../screens/Initialize';
import HomeScreen from '../screens/Home';

const routeConfigMap = {
  Initialize: {
    screen: InitializeScreen,
    path: 'init',
  },
  Home: {
    screen: HomeScreen,
    path: '',
  },
};
const stackConfig = {
  initialRouteName: 'Initialize',
  headerMode: 'screen',
};

const DefaultNavigator = StackNavigator(routeConfigMap, stackConfig);
const AppNavigator = Platform.OS === 'web' ? BrowserAppContainer(DefaultNavigator) : DefaultNavigator;

export default AppNavigator;
