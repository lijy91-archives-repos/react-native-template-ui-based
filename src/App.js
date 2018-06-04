import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import Theme, { ThemeProvider } from '@blankapp/ui';
import defaultTheme from '@blankapp/ui/src/resources/themes/default';
import defaultThemePro from '@blankapp/ui-pro/src/resources/themes/default';
import defaultThemeExtend from './resources/themes/default';
import AppNavigator from './navigators/AppNavigator';
import NavigationService from './navigators/NavigationService';

Theme.registerTheme('default', [
  defaultTheme,
  defaultThemePro,
  defaultThemeExtend,
]);

class App extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.2)');
    }
    StatusBar.setBarStyle('dark-content');
  }

  render() {
    return (
      <ThemeProvider>
        <AppNavigator
          ref={(navigatorRef) => {
            this.topLevelNavigator = navigatorRef;
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </ThemeProvider>
    );
  }
}

export default App;
