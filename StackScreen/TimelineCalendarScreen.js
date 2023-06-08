import { View, Text } from 'react-native'
import groupBy from 'lodash/groupBy';
import filter from 'lodash/filter';
import find from 'lodash/find';
import React from 'react'
import {
  ExpandableCalendar,
  TimelineEventProps,
  TimelineList,
  CalendarProvider,
  TimelineProps,
  CalendarUtils
} from 'react-native-calendars';
import { timelineEvents, getDate } from '../mocks/timelineEvents';
import { useState } from 'react';

const EVENTS = timelineEvents;
const INITIAL_TIME = { hour: 9, minutes: 0 };
const TimelineCalendarScreen = () => {
  const [currentDate, setCurrentDate] = useState({ currentDate: getDate() })
  const [eventsByDate, setEventsByDate] = useState(groupBy(EVENTS, e => CalendarUtils.getCalendarDateString(e.start)))

  const onDateChanged = (date) => {
    setCurrentDate({ currentDate: date });
  };

  const onMonthChange = (month, updateSource) => {
    console.log('TimelineCalendarScreen onMonthChange: ', month, updateSource);
  };

  const createNewEvent = (timeString, timeObject) => {
    const hourString = `${(timeObject.hour + 1).toString().padStart(2, '0')}`;
    const minutesString = `${timeObject.minutes.toString().padStart(2, '0')}`;

    const newEvent = {
      id: 'draft',
      start: `${timeString}`,
      end: `${timeObject.date} ${hourString}:${minutesString}:00`,
      title: 'New Event',
      color: 'white'
    };

    if (timeObject.date) {
      if (eventsByDate[timeObject.date]) {
        eventsByDate[timeObject.date] = [...eventsByDate[timeObject.date], newEvent];
        setEventsByDate(eventsByDate);
      } else {
        eventsByDate[timeObject.date] = [newEvent];
        setEventsByDate({ ...eventsByDate });
      }
    }
  };

  const approveNewEvent = (_timeString, timeObject) => {

    // Alert.prompt('New Event', 'Enter event title', [
    //   {
    //     text: 'Cancel',
    //     onPress: () => {
    //       if (timeObject.date) {
    //         eventsByDate[timeObject.date] = filter(eventsByDate[timeObject.date], e => e.id !== 'draft');
    // 
    //         this.setState({ eventsByDate });
    //       }
    //     }
    //   },
    //   {
    //     text: 'Create',
    //     onPress: eventTitle => {
    //       if (timeObject.date) {
    //         const draftEvent = find(eventsByDate[timeObject.date], { id: 'draft' });
    //         if (draftEvent) {
    //           draftEvent.id = undefined;
    //           draftEvent.title = eventTitle ?? 'New Event';
    //           draftEvent.color = 'lightgreen';
    //           eventsByDate[timeObject.date] = [...eventsByDate[timeObject.date]];
    // 
    //           // this.setState({
    //           //   eventsByDate
    //           // });
    //         }
    //       }
    //     }
    //   }
    // ]);
  };

  const timelineProps = {
    format24h: true,
    onBackgroundLongPress: createNewEvent,
    onBackgroundLongPressOut: approveNewEvent,
    // scrollToFirst: true,
    // start: 0,
    // end: 24,
    unavailableHours: [{ start: 0, end: 6 }, { start: 22, end: 24 }],
    overlapEventsSpacing: 8,
    rightEdgeSpacing: 24,
  };

  return (
    <View style={{ flex: 1 }}>
      <CalendarProvider
        date={currentDate?.currentDate}
        onDateChanged={onDateChanged}
        onMonthChange={onMonthChange}
        showTodayButton
        disabledOpacity={0.6}
      // numberOfDays={3}
      >
        <ExpandableCalendar
          firstDay={1}
        />
        <TimelineList
          events={eventsByDate}
          timelineProps={timelineProps}
          showNowIndicator
          scrollToNow
          scrollToFirst
          initialTime={INITIAL_TIME}
        />
      </CalendarProvider>
    </View>
  )
}

export default TimelineCalendarScreen