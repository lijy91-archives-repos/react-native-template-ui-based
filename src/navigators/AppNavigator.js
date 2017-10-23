import { StackNavigator } from 'react-navigation';

import InitializeScreen from '../screens/Initialize';
import HomeScreen from '../screens/Home';

const routeConfigMap = {
  Initialize: {
    screen: InitializeScreen,
  },
  Home: {
    screen: HomeScreen,
  },
};
const stackConfig = {
  initialRouteName: 'Initialize',
  headerMode: 'screen',
};

const AppNavigator = StackNavigator(routeConfigMap, stackConfig);

export default AppNavigator;
