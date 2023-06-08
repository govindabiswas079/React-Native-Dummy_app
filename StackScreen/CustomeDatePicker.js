import React, { useState, useMemo, useCallback } from 'react';
import { View, Text, StatusBar, Modal } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';
import { CalendarList } from 'react-native-calendars';
import testIDs from '../testIDs';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

const RANGE = 24;
const initialDate = '2023-03-09';

const CustomeDatePicker = () => {
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
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EBEBFB', paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right,
    }}>
      <FocusAwareStatusBar barStyle='dark-content' backgroundColor="#EBEBFB" />

      <Modal visible={false} transparent>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0000007a', paddingHorizontal: 5, }}>
          <FocusAwareStatusBar barStyle='dark-content' backgroundColor="#0000007a" />
          <View style={{
            elevation: 12,
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            padding: 0,
            width: '100%',
            overflow: 'hidden'
          }}>
            <CalendarList
              testID={testIDs.calendarList.CONTAINER}
              current={initialDate}
              pastScrollRange={RANGE}
              futureScrollRange={RANGE}
              onDayPress={onDayPress}
              markedDates={marked}
              renderHeader={renderCustomHeader}
              theme={theme}
              horizontal={true}
              pagingEnabled={false}
              staticHeader={false}
            />
          </View>
        </View>
      </Modal>
    </View>
  )
}

const theme = {
  calendarBackground: '#FFFFFF',
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
    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
      <Text style={[{ marginLeft: 5 }, { fontSize: 18, fontWeight: 'bold', paddingTop: 10, paddingBottom: 10, color: '#5E60CE', paddingRight: 5 }]}>{`${month}`}</Text>
      <Text style={[{ marginRight: 5 }, { fontSize: 18, fontWeight: 'bold', paddingTop: 10, paddingBottom: 10, color: '#5E60CE', paddingRight: 5 }]}>{year}</Text>
    </View>
  );
}

export default CustomeDatePicker