import React, { Component } from 'react';
import { ActivityIndicator, Screen } from '@blankapp/ui';
import { NavigationActions, StackActions } from 'react-navigation';
import { t } from '../../utilities/I18n';

class Initialize extends Component {
  // eslint-disable-next-line
  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      title: t('screens.initialize.title'),
      header: null,
    };
  };

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
  }

  componentDidMount() {
    setTimeout(() => {
      const routeName = 'Home';

      this.navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName })],
      }));
      this.navigation.dispatch(NavigationActions.navigate({ routeName }));
    }, 300);
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
