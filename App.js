/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

//import {AppRegistry, Platform} from 'react-native';

import { ScrollView, TextInput, StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { placeholder } from '@babel/types';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import { classes } from 'istanbul-lib-coverage';



// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

class HomeScreen extends Component {
  render() {

    const pic = {
      uri: 'https://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2019/6/12/00638d9b151c449c87d6beda0c208f27_18.jpg'
    };

    return (

      <ScrollView>
        <PizzaTranslator></PizzaTranslator>
        <StyleSheetTest></StyleSheetTest>
        {/* <BlinkApp></BlinkApp> */}
        <Greeting name="Mobin"></Greeting>
        <Greeting name="Varsha"></Greeting>
        <Greeting name="Ginu"></Greeting>
        <Image source={pic} style={styles.containerImage}></Image>
        <Text>Hello World!</Text>

        <Button title='Click'
        onPress={() => this.props.navigation.navigate('Second') }>
        </Button>
      </ScrollView>

    );
  }
}

class SecondScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You are in the second Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Second: SecondScreen,
},
{
  initialRouteName: 'Home'
});


//export default createAppContainer(AppNavigator);



const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer></AppContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerImage: {
    width: 300,
    height: 300
  }

});

const learnstyles = StyleSheet.create({

  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});


class PizzaTranslator extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here"
          onChangeText={(text) => this.setState({ text })}>
        </TextInput>

        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>

        <Button
          onPress={() => {
            Alert.alert('You tapped');
          }}
          title="Press"
        ></Button>

      </View >
    );
  }
}


class FixedDimBasics extends Component {
  render() {
    return (
      <View>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}></View>
        <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }}></View>
        <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }}></View>
      </View>
    );
  }
}

class FlexDimBasics extends Component {
  render() {
    return (

      //Simple Flex

      // <View style={{flex: 1}}>
      //   <View style={{ flex: 1, backgroundColor: 'powderblue' }}></View>
      //   <View style={{ flex: 2, backgroundColor: 'skyblue' }}></View>
      //   <View style={{ flex: 3, backgroundColor: 'steelblue' }}></View>
      // </View>

      //flexDirection

      // <View style={{flex: 1, flexDirection: 'row'}}>
      //   <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}></View>
      //   <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }}></View>
      //   <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }}></View>
      // </View>

      //justifyContent and alignItems

      <View style={{
        flex: 1,
        // flexDirection: 'column',
        alignItems: 'stretch',
        // alignItems: 'flex-start',
        // alignItems: 'center',


        justifyContent: 'space-between'
        // justifyContent: 'flex-start'
        // justifyContent: 'center'
        // justifyContent: 'flex-end'
        // justifyContent: 'space-around'
        // justifyContent: 'space-evenly'

      }}>

        <View style={{ height: 50, backgroundColor: 'powderblue' }}></View>
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }}></View>
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }}></View>
      </View>



    );
  }
}


class StyleSheetTest extends Component {
  render() {
    return (
      <View>
        <Text style={learnstyles.red}>just red</Text>
        <Text style={learnstyles.bigBlue}>just bigBlue</Text>
        <Text style={[learnstyles.red, learnstyles.bigBlue]}>first red and then bigBlue</Text>
        <Text style={[learnstyles.bigBlue, learnstyles.red]}>first bigBlue and then red</Text>
      </View>
    );
  }
}


class Blink extends Component {
  componentDidMount() {
    setInterval(() => (this.setState(previousState => ({ isShowingText: !previousState.isShowingText }))), 1000);
  }

  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <View>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='> Task :app:installDebug' />
        <Blink text='05:03:18 V/ddms: execute: returning' />
        <Blink text='Installed on 1 device.' />
        <Blink text='BUILD SUCCESSFUL in 21s' />
      </View>
    );
  }
}