import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';
import {
  AndroidDateInputMode,
  AndroidPickerMode,
  MaterialDatetimePickerAndroid,
  AndroidDatePickerType,
} from 'react-native-material-datetime-picker';
import { format, subMonths } from 'date-fns';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

const today = new Date();
const start = subMonths(today, 1);
const MaterialDateRangePicker = () => {
  const insets = useSafeAreaInsets();
  const [currentStartDate, setCurrentStartDate] = useState(start);
  const [currentEndDate, setCurrentEndDate] = useState(today);
  const [currentDate, setCurrentDate] = useState(start);

  const onOpenRange = () => {
    MaterialDatetimePickerAndroid.show({
      value: currentDate,
      titleText: 'Select duration',
      maximumDate: today,
      mode: AndroidPickerMode.DATE,
      startDate: currentStartDate,
      endDate: currentEndDate,
      positiveButtonText: 'Ok',
      negativeButtonText: 'Cancle',
      inputMode: AndroidDateInputMode.CALENDAR,
      type: AndroidDatePickerType.RANGE,
      onConfirmDateRange: (startDate, endDate) => {
        setCurrentStartDate(startDate);
        setCurrentEndDate(endDate);
        setCurrentDate(startDate);
      },
    });
  }
  return (
    <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EBEBFB', paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right,
    }}>
      <FocusAwareStatusBar barStyle='dark-content' backgroundColor="#EBEBFB" />

      <TouchableOpacity onPress={() => onOpenRange()}>
        <Text style={{ color: "#000000", fontSize: 16, fontFamily: 'OpenSans-SemiBold' }}>{format(new Date(currentStartDate), 'yyyy-MM-dd')} - {format(new Date(currentEndDate), 'yyyy-MM-dd')}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MaterialDateRangePicker