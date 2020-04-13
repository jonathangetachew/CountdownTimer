import React from 'react';

import { View, Text, TouchableHighlight } from 'react-native';

const EventForm = ({ navigation }) => {
  const handleAddPress = () => {
    navigation.navigate('EventList');
  };

  return (
    <View>
      <TouchableHighlight onPress={handleAddPress}>
        <Text>Add</Text>
      </TouchableHighlight>
    </View>
  );
};

export default EventForm;
