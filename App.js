import React, { Component } from 'react';
import { Platform, StatusBar, Alert } from 'react-native';
import { ThemeProvider } from '@blankapp/ui';
import AppNavigator from './src/navigators/AppNavigator';

// 覆盖 `alert`，用于修正 iOS 系统上同时使用 Modal 时的 Bug。
alert = (text) => {
  setTimeout(() => {
    Alert.alert(
      text,
      undefined,
      undefined,
      { cancelable: false },
    );
  }, 200);
};

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
          ref={(nav) => {
            this.navigator = nav;
          }}
        />
      </ThemeProvider>
    );
  }
}

export default App;
