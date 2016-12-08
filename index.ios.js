import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import Landing from './application/components/Landing';

class meetups extends Component {
  render() {
    return (
      <Landing />
    );
  }
}

AppRegistry.registerComponent('meetups', () => meetups);