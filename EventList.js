import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ErrorBoundary from './ErrorBoundary';
import EventCard from './EventCard';
import { useInterval } from './CustomHook';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F3F3F3',
  },
});

const EventList = () => {
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

  return (
    <FlatList
      style={styles.list}
      data={events}
      renderItem={({ item }) => (
        <ErrorBoundary>
          <EventCard event={item} />
        </ErrorBoundary>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default EventList;
