/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ChangeTxt from './app/component_ios/test/TextComponent';
import EventStore from './app/store/EventStore';
import TestConstants from './app/constant/TestConstant';

const rntest = React.createClass({
  getInitialState(){
        return {
            txt: 'React Native!'
        };
    },

    componentDidMount() {
        EventStore.addChangeListener(TestConstants.CHANGE_TEXT, this._onChangeInput);
    },

    componentWillUnmount(){
        EventStore.removeChangeListener(TestConstants.CHANGE_TEXT, this._onChangeInput);
    },

    _onChangeInput(data){
        let val = data.data || 'React Native';
        if(val){
            this.setState({
                txt: val
            })
        }
    },
  render: function() {
    let txt = this.state.txt;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to {txt}!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <ChangeTxt/>
      </View>
    );
  }
});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rntest', () => rntest);
