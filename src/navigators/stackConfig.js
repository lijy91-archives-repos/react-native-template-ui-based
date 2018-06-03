import React from 'react';
import { AppBar } from '@blankapp/ui-pro';

const stackConfig = {
  initialRouteName: 'Initialize',
  headerMode: 'screen',
  navigationOptions: {
    header: props => <AppBar {...props} />,
  },
};

export default stackConfig;
