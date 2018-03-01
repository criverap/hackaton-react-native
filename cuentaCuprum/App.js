import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Login from './src/views/Login/Login';
import Home from './src/views/Home/Home';

class App extends React.Component {  
  render() {
    return (
      <Login navigation={this.props.navigation}/>
    );
  }
}

const NavigationMenu = StackNavigator ({
  Login: { screen: Login },
  Home: { screen: Home},
});

export default NavigationMenu

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
