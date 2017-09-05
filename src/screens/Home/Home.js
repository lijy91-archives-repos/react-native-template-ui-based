import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Screen, Title, Text } from '@blankapp/ui';
import HomeScreenStore from '../../stores/HomeScreenStore';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;

    this.stateStore = new HomeScreenStore();
  }

  render() {
    const instructions = Platform.select({
      ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
      android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
    });
    return (
      <Screen
        style={{
          flex: 1,
          alignItems: 'center',
          paddingTop: 160,
        }}
      >
        <Title>
          Welcome to React Native!
        </Title>
        <Text>
          To get started, edit App.js
        </Text>
        <Text
          style={{
            textAlign: 'center',
          }}
        >
          {instructions}
        </Text>
      </Screen>
    );
  }
}

export default Home;
