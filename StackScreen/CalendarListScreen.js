import React, { useState, useMemo, useCallback } from 'react';
import { StyleSheet, Text, StatusBar, View } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import testIDs from '../testIDs';


function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

const RANGE = 24;
const initialDate = '2023-03-09';

const CalendarListScreen = () => {
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState(initialDate);

  const marked = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: '#5E60CE',
        selectedTextColor: 'white'
      }
    };
  }, [selected]);

  const onDayPress = useCallback((day) => {
    setSelected(day.dateString);
  }, []);

  return (
    <View style={{
      flex: 1, backgroundColor: '#EBEBFB', paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right,
    }}>
      <FocusAwareStatusBar barStyle='dark-content' backgroundColor="#EBEBFB" />
      <CalendarList
        testID={testIDs.calendarList.CONTAINER}
        current={initialDate}
        pastScrollRange={RANGE}
        futureScrollRange={RANGE}
        onDayPress={onDayPress}
        markedDates={marked}
        renderHeader={renderCustomHeader}
        theme={theme}
        horizontal={false}
        pagingEnabled={false}
        staticHeader={false}
      />
    </View >
  );
};

const theme = {
  calendarBackground: '#EBEBFB', 
  stylesheet: {
    calendar: {
      header: {
        dayHeader: {
          fontWeight: '600',
          color: '#48BFE3'
        }
      }
    }
  },
  'stylesheet.day.basic': {
    today: {
      borderColor: '#48BFE3',
      borderWidth: 0.8
    },
    todayText: {
      color: '#5390D9',
      fontWeight: '800'
    }
  }
};

function renderCustomHeader(date) {
  const header = date.toString('MMMM yyyy');
  const [month, year] = header.split(' ');

  return (
    <View style={styles.header}>
      <Text style={[styles.month, { fontSize: 18, fontWeight: 'bold', paddingTop: 10, paddingBottom: 10, color: '#5E60CE', paddingRight: 5 }]}>{`${month}`}</Text>
      <Text style={[styles.year, { fontSize: 18, fontWeight: 'bold', paddingTop: 10, paddingBottom: 10, color: '#5E60CE', paddingRight: 5 }]}>{year}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10
  },
  month: {
    marginLeft: 5
  },
  year: {
    marginRight: 5
  }
});

export default CalendarListScreen