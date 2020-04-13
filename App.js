import 'react-native-gesture-handler';
import React from 'react';
import { YellowBox } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EventList from './EventList';
import EventForm from './EventForm';

YellowBox.ignoreWarnings(['componentWillReceiveProps']);

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name='EventList'
        component={EventList}
        options={{ title: 'All Events' }}
      />
      <Stack.Screen
        name='EventForm'
        component={EventForm}
        options={{ title: 'Add New Event' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
