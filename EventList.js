import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';

import ErrorBoundary from './ErrorBoundary';
import EventCard from './EventCard';
import { useInterval } from './CustomHook';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#F3F3F3',
  },
});

const EventList = ({ navigation }) => {
  const [events, setEvents] = useState([]);

  useInterval(() => {
    setEvents(
      events.map((evt) => ({
        ...evt,
        timer: Date.now(),
      }))
    );
  }, 1000);

  useEffect(() => {
    const event = require('./db.json').events.map((e) => ({
      ...e,
      date: new Date(e.date),
    }));
    setEvents(event);
  }, []);

  const handleAddEvent = () => {
    navigation.navigate('EventForm');
  };

  return [
    <FlatList
      key='list'
      style={styles.list}
      data={events}
      renderItem={({ item }) => (
        <ErrorBoundary>
          <EventCard event={item} />
        </ErrorBoundary>
      )}
      keyExtractor={(item) => item.id}
    />,
    <ActionButton
      key='fab'
      onPress={handleAddEvent}
      buttonColor='rgba(231, 76, 60, 1)'
    />,
  ];
};

export default EventList;
