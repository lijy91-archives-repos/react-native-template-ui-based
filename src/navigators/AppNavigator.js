import { StackNavigator } from 'react-navigation';

import InitializeScreen from '../screens/Initialize';
import HomeScreen from '../screens/Home';

const routeConfigs = {
  Initialize: {
    screen: InitializeScreen,
  },
  Home: {
    screen: HomeScreen,
  },
};
const stackNavigatorConfig = {
  initialRouteName: 'Initialize',
  headerMode: 'screen',
};

const AppNavigator = StackNavigator(routeConfigs, stackNavigatorConfig);

export default AppNavigator;
