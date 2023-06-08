import React from 'react';
import { Text, TouchableOpacity, View, StatusBar } from 'react-native';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

const UserPostScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{
      flex: 1, backgroundColor: '#EBEBFB', paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right,
    }}>
      <FocusAwareStatusBar barStyle='dark-content' backgroundColor="#EBEBFB" />
      {NavigationScreen?.map((value, index) => (
        <View key={index} style={{ paddingHorizontal: 15 }}>
          <TouchableOpacity style={{ width: '100%', backgroundColor: "blue", marginTop: 10, padding: 15, justifyContent: "center", alignItems: 'center', borderRadius: 5 }} onPress={() => navigation.navigate(value?.navigation)}>
            <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'OpenSans-SemiBold' }}>{value.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default UserPostScreen;

const NavigationScreen = [
  { navigation: 'AgendaScreen', name: 'Agenda ' },
  { navigation: 'CalendarListScreen', name: 'Calendar List' },
  { navigation: 'TimelineCalendarScreen', name: 'Timeline Calendar' },
  { navigation: 'MaterialTimePicker', name: 'Material Time Picker' },
  { navigation: 'MaterialDatePicker', name: 'Material Date Picker' },
  { navigation: 'MaterialDateRangePicker', name: 'Material Date Range Picker' },
  { navigation: 'RNCalender', name: 'RN Calender' },
  { navigation: 'CustomeDatePicker', name: 'Custome Date Picker' },
]