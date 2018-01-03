import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { ThemeProvider } from '@blankapp/ui';
import AppNavigator from '../src/navigators/AppNavigator';

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
