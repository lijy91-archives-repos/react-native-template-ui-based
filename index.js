import { AppRegistry, Platform } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('HelloWorld', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('HelloWorld', {
    rootTag: document.getElementById('root'),
  });
}
