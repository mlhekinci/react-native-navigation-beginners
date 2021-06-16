import React from 'react'
import {AppRegistry} from 'react-native';

// Library imports required for navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import of our displays
import Home from './screens/home'
import Details from './screens/details'
import Favorite from './screens/favorite';
import Settings from './screens/settings';

// First we need to build our stack
const Stack = createStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details}/>
          <Stack.Screen name="Favorite" component={Favorite}/>
          <Stack.Screen name="Settings" component={Settings}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}


AppRegistry.registerComponent('navigation_example', () => App);
