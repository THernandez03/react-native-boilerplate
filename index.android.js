/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { AppRegistry, WebView } from 'react-native';

class nativ extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'http://github.com/THernandez03' }}
        scalesPageToFit
      />
    );
  }
}

AppRegistry.registerComponent('nativ', () => nativ);
