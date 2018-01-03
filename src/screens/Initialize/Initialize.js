import React, { Component } from 'react';
import { ActivityIndicator, Screen } from '@blankapp/ui';
import { NavigationActions } from 'react-navigation';

class Initialize extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
  }

  componentDidMount() {
    setTimeout(() => {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
      });
      this.navigation.dispatch(resetAction);
    }, 600);
  }

  render() {
    return (
      <Screen
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator />
      </Screen>
    );
  }
}

export default Initialize;
