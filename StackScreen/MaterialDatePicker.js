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
import { format } from 'date-fns';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

const today = new Date();
const MaterialDatePicker = () => {
  const insets = useSafeAreaInsets();
  const [currentDate, setCurrentDate] = useState(today);

  const onOpenRange = () => {
    MaterialDatetimePickerAndroid.show({
      value: currentDate,
      titleText: 'Select date',
      mode: AndroidPickerMode.DATE,
      positiveButtonText: 'Ok',
      negativeButtonText: 'CANCLE',
      inputMode: AndroidDateInputMode.CALENDAR,
      fullscreen: true,
      type: AndroidDatePickerType.DEFAULT,
      onConfirm: (date) => {
        setCurrentDate(date);
      },
    });
  }

  return (
    <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EBEBFB', paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right,
    }}>
      <FocusAwareStatusBar barStyle='dark-content' backgroundColor="#EBEBFB" />

      <TouchableOpacity onPress={() => onOpenRange()}>
        <Text style={{ color: "#000000", fontSize: 16, fontFamily: 'OpenSans-SemiBold' }}>{format(new Date(currentDate), 'yyyy-MM-dd')}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MaterialDatePicker