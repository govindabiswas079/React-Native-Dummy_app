import React from 'react';
import { View, StatusBar, Text, Modal, Pressable, TextInput, TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';
import CalendarPicker from 'react-native-calendar-picker';
import { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

const RNCalender = () => {
  const insets = useSafeAreaInsets();
  const [show, setIsShow] = useState(false)
  const [selectedStartDate, setSelectedStartDate] = useState(null)
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [value, setValue] = useState({ date: '' });

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    }
  };

  const startDate = selectedStartDate ? new Date(selectedStartDate)?.toLocaleDateString() : 'Start Date';
  const endDate = selectedEndDate ? new Date(selectedEndDate)?.toLocaleDateString() : 'End Date';
  return (
    <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EBEBFB', paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right,
    }}>
      <FocusAwareStatusBar barStyle='dark-content' backgroundColor="#EBEBFB" />

      <Pressable onPress={() => setIsShow(!show)} style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: 40, paddingHorizontal: 15 }} >
        <TextInput value={value?.date} editable={false} placeholder={"Select Date"} placeholderTextColor={'#000000'} style={{ color: '#000000', borderColor: '#000000', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, }} />
      </Pressable>

      <Modal visible={show} onRequestClose={() => setIsShow(!show)}>
        <FocusAwareStatusBar barStyle='dark-content' backgroundColor="#FFFFFF" />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, paddingTop: 10, paddingBottom: 50 }}>
          <Text style={{ color: '#252F40', fontSize: 16, fontFamily: 'OpenSans-SemiBold' }}>
            CGVTS
          </Text>
          <TouchableOpacity onPress={() => setIsShow(!show)}>
            <AntDesign name='closecircleo' color={'#252F40'} size={24} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, paddingBottom: 50 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Text style={{ color: '#252F40', fontSize: 14, fontFamily: 'OpenSans-SemiBold' }}>
              {startDate}
            </Text>
            <Text style={{ color: '#252F40', fontSize: 14, fontFamily: 'OpenSans-SemiBold', paddingLeft: 10, paddingRight: 10 }}>
              -
            </Text>
            <Text style={{ color: '#252F40', fontSize: 14, fontFamily: 'OpenSans-SemiBold' }}>
              {endDate}
            </Text>
          </View>
          <Pressable style={{ backgroundColor: 'blue', borderRadius: 5, paddingTop: 5, paddingBottom: 5, paddingLeft: 15, paddingRight: 15 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'OpenSans-SemiBold', }}>Clear</Text>
          </Pressable>
        </View>
        <CalendarPicker
          scrollable
          onDateChange={(date, type) => {
            onDateChange(date, type)
          }}
          allowRangeSelection={true}
          allowBackwardRangeSelect={false}
          horizontal={true}
          nextTitleStyle={{ fontFamily: 'OpenSans-Regular', fontSize: 14, color: '#67748E', }}
          previousTitleStyle={{ fontFamily: 'OpenSans-Regular', fontSize: 14, color: '#67748E', }}
          textStyle={{ fontFamily: 'OpenSans-SemiBold', fontSize: 14, color: '#252F40' }}
          monthTitleStyle={{ fontFamily: 'OpenSans-Bold', fontSize: 16, color: '#252F40' }}
          yearTitleStyle={{ fontFamily: 'OpenSans-Bold', fontSize: 16, color: '#252F40' }}
        />
        <View style={{ position: 'absolute', bottom: 0, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 20, paddingRight: 15, width: '100%' }}>
          <Pressable onPress={() => setIsShow(!show)} style={{ backgroundColor: '#F25555', borderRadius: 5, paddingTop: 5, paddingBottom: 5, paddingLeft: 15, paddingRight: 15, marginRight: 10 }}>
            <Text style={{ textAlign: 'center', color: '#FFFFFF', fontSize: 14, fontFamily: 'OpenSans-SemiBold', }}>Cancle</Text>
          </Pressable>
          <TouchableOpacity onPress={() => { setValue({ ...value, date: `${startDate} - ${endDate}` }), setIsShow(!show) }} style={{ backgroundColor: '#4646F2', borderRadius: 5, paddingTop: 5, paddingBottom: 5, paddingLeft: 15, paddingRight: 15 }}>
            <Text style={{ textAlign: 'center', color: '#FFFFFF', fontSize: 14, fontFamily: 'OpenSans-SemiBold', }}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

export default RNCalender