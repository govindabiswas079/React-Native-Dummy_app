import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';
import {
  AndroidPickerMode,
  AndroidTimeInputMode,
  MaterialDatetimePickerAndroid,
} from 'react-native-material-datetime-picker';
import { format, } from 'date-fns';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

const today = new Date();
const MaterialTimePicker = () => {
  const insets = useSafeAreaInsets();
  const [currentTime, setCurrentTime] = useState(today);

  const onOpenRange = () => {
    MaterialDatetimePickerAndroid.show({
      value: currentTime,
      titleText: 'Select time',
      mode: AndroidPickerMode.TIME,
      is24Hour: false,
      positiveButtonText: 'OK',
      negativeButtonText: 'CANCLE',
      inputMode: AndroidTimeInputMode.CLOCK,
      onConfirm: (date) => {
        setCurrentTime(date);
      },
    });
  }

  return (
    <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EBEBFB', paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right,
    }}>
      <FocusAwareStatusBar barStyle='dark-content' backgroundColor="#EBEBFB" />
      <TouchableOpacity onPress={() => onOpenRange()}>
        <Text style={{ color: "#000000", fontSize: 16, fontFamily: 'OpenSans-SemiBold' }}>{format(new Date(currentTime), 'h:mm a')}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MaterialTimePicker